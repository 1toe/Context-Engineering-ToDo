import { Metadata } from 'next';
import Link from 'next/link';
import { getAllContent } from '@/lib/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Fundamentos',
  description: 'Desde átomos de prompting hasta teoría unificada de campos neuronales',
};

export default function FoundationsIndexPage() {
  const allContent = getAllContent('foundations');
  
  const sortedContent = allContent.sort((a, b) => {
    const orderA = a.metadata.order || 999;
    const orderB = b.metadata.order || 999;
    return orderA - orderB;
  });

  const breadcrumbItems = [{ label: 'Fundamentos' }];

  return (
    <div className="container py-8">
      <Breadcrumbs items={breadcrumbItems} className="mb-6" />

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Fundamentos de Context Engineering</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Desde átomos de prompting hasta teoría unificada de campos. Un viaje completo
          por los fundamentos teóricos de la ingeniería de contexto.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedContent.map((item) => (
          <Link
            key={item.metadata.slug}
            href={`/foundations/${item.metadata.slug}`}
            className="group"
          >
            <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
              <CardHeader>
                {item.metadata.order && (
                  <div className="text-sm text-muted-foreground mb-2">
                    Módulo {item.metadata.order}
                  </div>
                )}
                <CardTitle className="group-hover:text-primary transition-colors">
                  {item.metadata.title}
                </CardTitle>
                {item.metadata.description && (
                  <CardDescription>{item.metadata.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <span className="text-sm text-primary">
                  Leer más →
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
