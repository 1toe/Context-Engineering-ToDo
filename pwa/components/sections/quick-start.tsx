import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const QuickStart = () => {
  const quickStartSteps = [
    {
      title: '1. Aprende los Fundamentos',
      description: 'Comienza con átomos de prompting y escala hasta campos neuronales',
      link: '/foundations/01_atoms_prompting',
    },
    {
      title: '2. Sigue el Curso',
      description: 'Módulos estructurados desde matemáticas hasta sistemas multi-agente',
      link: '/course',
    },
    {
      title: '3. Practica con Ejemplos',
      description: 'Implementa chatbots, RAG, agentes y más aplicaciones',
      link: '/examples',
    },
    {
      title: '4. Usa las Plantillas',
      description: 'Templates y shells listos para integrar en tus proyectos',
      link: '/templates',
    },
  ];

  return (
    <section className="border-t bg-muted/50 py-12 md:py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Guía de Inicio Rápido
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tu ruta de aprendizaje paso a paso
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {quickStartSteps.map((step) => (
            <Card key={step.title} className="transition-colors hover:border-primary">
              <CardHeader>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link href={step.link}>
                    Ir al paso →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            ¿Prefieres ir directo al código?{' '}
            <Link href="/examples/00_toy_chatbot" className="text-primary hover:underline">
              Comienza con el chatbot de ejemplo
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
