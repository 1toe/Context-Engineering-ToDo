import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllContent, getContentBySlug } from '@/lib/content';
import { markdownToHtml } from '@/lib/markdown';
import { MarkdownRenderer } from '@/components/markdown-renderer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Separator } from '@/components/ui/separator';

interface FoundationsPageProps {
  params: {
    slug: string[];
  };
}

export const generateStaticParams = async () => {
  const allContent = getAllContent('foundations');
  return allContent.map((item) => ({
    slug: item.metadata.slug.split('/'),
  }));
};

export const generateMetadata = async ({
  params,
}: FoundationsPageProps): Promise<Metadata> => {
  const slug = params.slug.join('/');
  const content = getContentBySlug('foundations', slug);

  if (!content) {
    return {
      title: 'Contenido no encontrado',
    };
  }

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
};

export default async function FoundationsPage({ params }: FoundationsPageProps) {
  const slug = params.slug.join('/');
  const content = getContentBySlug('foundations', slug);

  if (!content) {
    notFound();
  }

  const htmlContent = await markdownToHtml(content.content);

  const breadcrumbItems = [
    { label: 'Fundamentos', href: '/foundations' },
    { label: content.metadata.title },
  ];

  return (
    <div className="container py-8">
      <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      
      <article className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{content.metadata.title}</h1>
          {content.metadata.description && (
            <p className="text-xl text-muted-foreground">
              {content.metadata.description}
            </p>
          )}
          {content.metadata.tags && content.metadata.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {content.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <Separator className="mb-8" />

        <MarkdownRenderer html={htmlContent} />
      </article>
    </div>
  );
}
