import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Code, Lightbulb, Rocket, Layers, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Guías Zero to Hero',
  description: 'Guías paso a paso para dominar Context Engineering desde cero hasta nivel experto.',
};

const guides = [
  {
    id: '01-min-prompt',
    title: 'Minimal Prompt',
    description: 'Aprende a crear prompts efectivos con la mínima cantidad de tokens.',
    icon: Target,
    file: '01_min_prompt.py',
    level: 1,
    duration: '15 min',
  },
  {
    id: '02-expand-context',
    title: 'Expandir Contexto',
    description: 'Técnicas para expandir el contexto de manera eficiente y estructurada.',
    icon: Layers,
    file: '02_expand_context.py',
    level: 2,
    duration: '20 min',
  },
  {
    id: '03-control-loops',
    title: 'Control Loops',
    description: 'Implementa loops de control para interacciones más complejas.',
    icon: Code,
    file: '03_control_loops.py',
    level: 3,
    duration: '30 min',
  },
  {
    id: '04-rag-recipes',
    title: 'RAG Recipes',
    description: 'Recetas prácticas para implementar RAG de forma efectiva.',
    icon: BookOpen,
    file: '04_rag_recipes.py',
    level: 4,
    duration: '45 min',
  },
  {
    id: '05-prompt-programs',
    title: 'Prompt Programs',
    description: 'Diseña programas completos usando prompts como primitivas.',
    icon: Lightbulb,
    file: '05_prompt_programs.py',
    level: 5,
    duration: '60 min',
  },
  {
    id: '06-schema-design',
    title: 'Schema Design',
    description: 'Patrones avanzados de diseño de schemas para contexto estructurado.',
    icon: Rocket,
    file: '06_schema_design.py',
    level: 6,
    duration: '45 min',
  },
];

export default function GuidesPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-[980px] space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Guías Zero to Hero
          </h1>
          <p className="text-xl text-muted-foreground">
            Sigue estas guías paso a paso para convertirte en un experto en Context Engineering.
            Cada guía incluye código funcional y ejemplos prácticos.
          </p>
        </div>

        {/* Progress Path */}
        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-border" />
          <div className="space-y-8">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <div key={guide.id} className="relative flex gap-8">
                  {/* Step Number */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-2xl font-bold text-primary-foreground">
                    {guide.level}
                  </div>

                  {/* Card */}
                  <Card className="flex-1">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg bg-primary/10 p-2">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{guide.title}</CardTitle>
                            <div className="mt-1 flex gap-3 text-sm text-muted-foreground">
                              <span>⏱️ {guide.duration}</span>
                              <span>📄 {guide.file}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="mt-3">
                        {guide.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={`https://github.com/davidkimai/Context-Engineering/blob/main/10_guides_zero_to_hero/${guide.file}`}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        Ver código completo →
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-lg border bg-muted/50 p-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-4 text-2xl font-bold">¿Completaste todas las guías?</h2>
            <p className="mb-6 max-w-[600px] text-muted-foreground">
              Explora los ejemplos avanzados y profundiza en temas específicos como
              sistemas multi-agente, teoría de campos neuronales y quantum semantics.
            </p>
            <div className="flex gap-4">
              <Link
                href="/examples"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Ver Ejemplos
              </Link>
              <Link
                href="/foundations"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Fundamentos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
