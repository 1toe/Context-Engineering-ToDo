import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ContentMetadata {
  title: string;
  description?: string;
  slug: string;
  category: string;
  order?: number;
  tags?: string[];
}

export interface ContentItem {
  metadata: ContentMetadata;
  content: string;
  filePath: string;
}

const contentDirectories = {
  foundations: '../00_foundations',
  course: '../00_COURSE',
  examples: '../30_examples',
  templates: '../20_templates',
  'cognitive-tools': '../cognitive-tools',
  protocols: '../60_protocols',
  reference: '../40_reference',
};

export const getContentDirectory = (category: string): string => {
  const baseDir = process.cwd();
  const relativeDir = contentDirectories[category as keyof typeof contentDirectories];
  if (!relativeDir) {
    throw new Error(`Categoría no válida: ${category}`);
  }
  return path.join(baseDir, relativeDir);
};

export const getAllContentFiles = (category: string): string[] => {
  const contentDir = getContentDirectory(category);
  
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const getAllMdFiles = (dir: string): string[] => {
    const files: string[] = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...getAllMdFiles(fullPath));
      } else if (item.endsWith('.md')) {
        files.push(fullPath);
      }
    }

    return files;
  };

  return getAllMdFiles(contentDir);
};

export const parseMarkdownFile = (filePath: string, category: string): ContentItem => {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const relativePath = path.relative(getContentDirectory(category), filePath);
  const slug = relativePath.replace(/\.md$/, '').replace(/\\/g, '/');

  const metadata: ContentMetadata = {
    title: data.title || path.basename(filePath, '.md'),
    description: data.description,
    slug,
    category,
    order: data.order,
    tags: data.tags || [],
  };

  return {
    metadata,
    content,
    filePath,
  };
};

export const getAllContent = (category: string): ContentItem[] => {
  const files = getAllContentFiles(category);
  return files.map((file) => parseMarkdownFile(file, category));
};

export const getContentBySlug = (category: string, slug: string): ContentItem | null => {
  const contentDir = getContentDirectory(category);
  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return parseMarkdownFile(filePath, category);
};

export const getContentSlugs = (category: string): string[] => {
  const content = getAllContent(category);
  return content.map((item) => item.metadata.slug);
};
