import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileCode, FileJson, FileText, Code2, Database, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Templates & Boilerplates',
  description: 'Templates listos para usar en tus proyectos de Context Engineering.',
};

const templates = [
  {
    id: 'control-loop',
    title: 'Control Loop Template',
    description: 'Template para implementar loops de control con retry logic y error handling.',
    icon: GitBranch,
    file: 'control_loop.py',
    language: 'Python',
    category: 'Código',
  },
  {
    id: 'prompt-program',
    title: 'Prompt Program Template',
    description: 'Estructura base para programas de prompts con composición y orquestación.',
    icon: Code2,
    file: 'prompt_program_template.py',
    language: 'Python',
    category: 'Código',
  },
  {
    id: 'field-protocol',
    title: 'Field Protocol Shells',
    description: 'Shells para protocolos de campos neuronales y gestión de resonancia.',
    icon: FileCode,
    file: 'field_protocol_shells.py',
    language: 'Python',
    category: 'Código',
  },
  {
    id: 'recursive-context',
    title: 'Recursive Context',
    description: 'Template para contexto recursivo con profundidad configurable.',
    icon: FileCode,
    file: 'recursive_context.py',
    language: 'Python',
    category: 'Código',
  },
  {
    id: 'minimal-context',
    title: 'Minimal Context YAML',
    description: 'Schema YAML mínimo para definir contexto estructurado.',
    icon: FileText,
    file: 'minimal_context.yaml',
    language: 'YAML',
    category: 'Schema',
  },
  {
    id: 'neural-field-context',
    title: 'Neural Field Context',
    description: 'Schema para contexto basado en teoría de campos neuronales.',
    icon: FileText,
    file: 'neural_field_context.yaml',
    language: 'YAML',
    category: 'Schema',
  },
  {
    id: 'schema-json',
    title: 'Schema Template JSON',
    description: 'Template JSON Schema para validación de contexto estructurado.',
    icon: FileJson,
    file: 'schema_template.json',
    language: 'JSON',
    category: 'Schema',
  },
  {
    id: 'schema-yaml',
    title: 'Schema Template YAML',
    description: 'Template YAML para definición de schemas de contexto.',
    icon: FileText,
    file: 'schema_template.yaml',
    language: 'YAML',
    category: 'Schema',
  },
  {
    id: 'scoring-functions',
    title: 'Scoring Functions',
    description: 'Funciones de puntuación para evaluación de contexto y relevancia.',
    icon: Database,
    file: 'scoring_functions.py',
    language: 'Python',
    category: 'Utilidades',
  },
];

const categories = ['Código', 'Schema', 'Utilidades'];

export default function TemplatesPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-[980px] space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Templates & Boilerplates
          </h1>
          <p className="text-xl text-muted-foreground">
            Templates listos para usar que aceleran el desarrollo de tus proyectos.
            Copia, personaliza y despliega.
          </p>
        </div>

        {/* Templates by Category */}
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h2 className="text-2xl font-bold">{category}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {templates
                .filter((t) => t.category === category)
                .map((template) => {
                  const Icon = template.icon;
                  return (
                    <Card key={template.id} className="flex flex-col">
                      <CardHeader>
                        <div className="mb-2 flex items-center gap-2">
                          <div className="rounded-lg bg-primary/10 p-2">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
                            {template.language}
                          </span>
                        </div>
                        <CardTitle className="text-lg">{template.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {template.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <div className="flex gap-2">
                          <Button asChild variant="default" size="sm" className="flex-1">
                            <Link
                              href={`https://github.com/davidkimai/Context-Engineering/blob/main/20_templates/${template.file}`}
                              target="_blank"
                            >
                              Ver Código
                            </Link>
                          </Button>
                          <Button asChild variant="outline" size="sm">
                            <Link
                              href={`https://raw.githubusercontent.com/davidkimai/Context-Engineering/main/20_templates/${template.file}`}
                              target="_blank"
                              download
                            >
                              Descargar
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-12 rounded-lg border bg-gradient-to-br from-primary/10 to-purple-500/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">¿Necesitas un template personalizado?</h2>
          <p className="mb-6 text-muted-foreground">
            Contribuye con tus propios templates o solicita uno específico para tu caso de uso.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="https://github.com/davidkimai/Context-Engineering/issues/new" target="_blank">
                Solicitar Template
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com/davidkimai/Context-Engineering/pulls" target="_blank">
                Contribuir
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
