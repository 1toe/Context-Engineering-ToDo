import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Github } from 'lucide-react';

const examplesData: Record<string, {
  title: string;
  description: string;
  difficulty: string;
  githubUrl: string;
}> = {
  'toy-chatbot': {
    title: 'Toy Chatbot',
    description: 'Chatbot básico con contexto simple para entender los fundamentos.',
    difficulty: 'Principiante',
    githubUrl: 'https://github.com/davidkimai/Context-Engineering/tree/main/30_examples/00_toy_chatbot',
  },
  'rag-recipe': {
    title: 'RAG Recipe',
    description: 'Implementación de Retrieval Augmented Generation con búsqueda semántica.',
    difficulty: 'Intermedio',
    githubUrl: 'https://github.com/davidkimai/Context-Engineering/tree/main/30_examples',
  },
  'multi-agent': {
    title: 'Sistema Multi-Agente',
    description: 'Coordinación de múltiples agentes especializados para resolver tareas complejas.',
    difficulty: 'Avanzado',
    githubUrl: 'https://github.com/davidkimai/Context-Engineering/tree/main/30_examples',
  },
  'prompt-program': {
    title: 'Programa de Prompts',
    description: 'Programación declarativa con prompts encadenados y control de flujo.',
    difficulty: 'Intermedio',
    githubUrl: 'https://github.com/davidkimai/Context-Engineering/tree/main/30_examples',
  },
  'field-resonance': {
    title: 'Resonancia de Campos',
    description: 'Aplicación de teoría de campos neuronales para gestión de contexto.',
    difficulty: 'Avanzado',
    githubUrl: 'https://github.com/davidkimai/Context-Engineering/tree/main/30_examples',
  },
  'schema-design': {
    title: 'Diseño de Schemas',
    description: 'Patrones de diseño para schemas de contexto estructurado.',
    difficulty: 'Intermedio',
    githubUrl: 'https://github.com/davidkimai/Context-Engineering/tree/main/30_examples',
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const example = examplesData[params.slug];
  
  if (!example) {
    return {
      title: 'Ejemplo no encontrado',
    };
  }

  return {
    title: example.title,
    description: example.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(examplesData).map((slug) => ({
    slug,
  }));
}

export default function ExamplePage({ params }: PageProps) {
  const example = examplesData[params.slug];

  if (!example) {
    notFound();
  }

  const difficultyClass = 
    example.difficulty === 'Principiante' 
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : example.difficulty === 'Intermedio'
      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-[980px] space-y-8">
        {/* Back Button */}
        <Button variant="ghost" size="sm" asChild>
          <Link href="/examples">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Ejemplos
          </Link>
        </Button>

        {/* Header */}
        <div className="space-y-4">
          <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${difficultyClass}`}>
            {example.difficulty}
          </span>
          
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {example.title}
          </h1>
          
          <p className="text-xl text-muted-foreground">
            {example.description}
          </p>
        </div>

        {/* Content Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="lead">
                Este ejemplo está disponible en el repositorio de GitHub con código completo,
                explicaciones detalladas y ejemplos ejecutables.
              </p>
              
              <h3>¿Qué incluye?</h3>
              <ul>
                <li>Código fuente completo y funcional</li>
                <li>Documentación detallada con explicaciones paso a paso</li>
                <li>Ejemplos de uso prácticos</li>
                <li>Best practices y patrones recomendados</li>
                <li>Requisitos e instrucciones de instalación</li>
              </ul>

              <div className="mt-8 flex gap-4">
                <Button size="lg" asChild>
                  <Link href={example.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Ver Código en GitHub
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/examples">
                    Ver Más Ejemplos
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between border-t pt-8">
          <Button variant="outline" asChild>
            <Link href="/examples">
              ← Todos los Ejemplos
            </Link>
          </Button>
          <Button asChild>
            <Link href="/guides">
              Guías Prácticas →
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
