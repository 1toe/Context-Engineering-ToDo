import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Bot, Database, Network, Zap, FileCode } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ejemplos Prácticos',
  description: 'Ejemplos prácticos de Context Engineering: desde chatbots simples hasta sistemas multi-agente complejos.',
};

const examples = [
  {
    id: 'toy-chatbot',
    title: 'Toy Chatbot',
    description: 'Chatbot básico con contexto simple para entender los fundamentos.',
    icon: Bot,
    href: '/examples/toy-chatbot',
    difficulty: 'Principiante',
    topics: ['Prompting', 'Context Window', 'Conversación'],
  },
  {
    id: 'rag-recipe',
    title: 'RAG Recipe',
    description: 'Implementación de Retrieval Augmented Generation con búsqueda semántica.',
    icon: Database,
    href: '/examples/rag-recipe',
    difficulty: 'Intermedio',
    topics: ['RAG', 'Embeddings', 'Vector Search'],
  },
  {
    id: 'multi-agent',
    title: 'Sistema Multi-Agente',
    description: 'Coordinación de múltiples agentes especializados para resolver tareas complejas.',
    icon: Network,
    href: '/examples/multi-agent',
    difficulty: 'Avanzado',
    topics: ['Agentes', 'Coordinación', 'Especialización'],
  },
  {
    id: 'prompt-program',
    title: 'Programa de Prompts',
    description: 'Programación declarativa con prompts encadenados y control de flujo.',
    icon: Code2,
    href: '/examples/prompt-program',
    difficulty: 'Intermedio',
    topics: ['Programación', 'Control de Flujo', 'Composición'],
  },
  {
    id: 'field-resonance',
    title: 'Resonancia de Campos',
    description: 'Aplicación de teoría de campos neuronales para gestión de contexto.',
    icon: Zap,
    href: '/examples/field-resonance',
    difficulty: 'Avanzado',
    topics: ['Neural Fields', 'Resonancia', 'Teoría de Campos'],
  },
  {
    id: 'schema-design',
    title: 'Diseño de Schemas',
    description: 'Patrones de diseño para schemas de contexto estructurado.',
    icon: FileCode,
    href: '/examples/schema-design',
    difficulty: 'Intermedio',
    topics: ['Schemas', 'JSON', 'Validación'],
  },
];

const difficultyColors = {
  Principiante: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Intermedio: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Avanzado: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

export default function ExamplesPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-[980px] space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Ejemplos Prácticos
          </h1>
          <p className="text-xl text-muted-foreground">
            Aprende Context Engineering con ejemplos prácticos que van desde lo básico hasta sistemas avanzados.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((example) => {
            const Icon = example.icon;
            return (
              <Card key={example.id} className="flex flex-col">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        difficultyColors[example.difficulty as keyof typeof difficultyColors]
                      }`}
                    >
                      {example.difficulty}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{example.title}</CardTitle>
                  <CardDescription>{example.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {example.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md bg-muted px-2 py-1 text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link href={example.href}>Ver Ejemplo</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-lg border bg-muted/50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">¿Quieres contribuir?</h2>
          <p className="mb-6 text-muted-foreground">
            Añade tus propios ejemplos y ayuda a la comunidad a aprender Context Engineering.
          </p>
          <Button asChild size="lg">
            <Link href="https://github.com/davidkimai/Context-Engineering" target="_blank">
              Ver en GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
