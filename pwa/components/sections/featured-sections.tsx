import Link from 'next/link';
import { BookOpen, Code2, Layers, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const FeaturedSections = () => {
  const sections = [
    {
      title: 'Fundamentos',
      description: 'Desde átomos de prompting hasta teoría unificada de campos',
      icon: BookOpen,
      href: '/foundations',
      color: 'text-blue-500',
    },
    {
      title: 'Guías Zero to Hero',
      description: 'Paso a paso desde lo básico hasta nivel experto',
      icon: Layers,
      href: '/guides',
      color: 'text-green-500',
    },
    {
      title: 'Ejemplos',
      description: 'Chatbots, RAG, agentes y más implementaciones',
      icon: Code2,
      href: '/examples',
      color: 'text-purple-500',
    },
    {
      title: 'Templates',
      description: 'Código y schemas listos para usar en tus proyectos',
      icon: Zap,
      href: '/templates',
      color: 'text-yellow-500',
    },
  ];

  return (
    <section className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Explora el Framework
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Todo lo que necesitas para dominar la ingeniería de contexto
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.href}
              href={section.href}
              className="group transition-transform hover:scale-105"
            >
              <Card className="h-full transition-colors hover:border-primary">
                <CardHeader>
                  <div className="mb-2">
                    <Icon className={`h-10 w-10 ${section.color}`} />
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-primary group-hover:underline">
                    Explorar →
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
