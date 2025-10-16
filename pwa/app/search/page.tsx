import { Metadata } from 'next';
import { SearchComponent } from '@/components/search-component';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Buscar',
  description: 'Busca en todo el contenido de Context Engineering',
};

export default function SearchPage() {
  const breadcrumbItems = [{ label: 'Buscar' }];

  return (
    <div className="container py-8">
      <Breadcrumbs items={breadcrumbItems} className="mb-6" />

      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Buscar Contenido</h1>
        <p className="text-lg text-muted-foreground">
          Encuentra rápidamente lo que necesitas en todo el framework
        </p>
      </div>

      <SearchComponent />
    </div>
  );
}
