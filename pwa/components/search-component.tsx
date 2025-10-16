'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Search as SearchIcon, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SearchResult {
  title: string;
  description: string;
  category: string;
  slug: string;
  href: string;
}

export const SearchComponent = () => {
  const router = useRouter();
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSearch = React.useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);

    // Simulación de búsqueda - aquí integrarías con una API real o índice de búsqueda
    await new Promise((resolve) => setTimeout(resolve, 300));

    const mockResults: SearchResult[] = [
      {
        title: 'Átomos de Prompting',
        description: 'La unidad fundamental de prompting',
        category: 'Fundamentos',
        slug: '01_atoms_prompting',
        href: '/foundations/01_atoms_prompting',
      },
      {
        title: 'Moléculas de Contexto',
        description: 'Combinando prompts con ejemplos',
        category: 'Fundamentos',
        slug: '02_molecules_context',
        href: '/foundations/02_molecules_context',
      },
    ];

    setResults(mockResults.filter((r) =>
      r.title.toLowerCase().includes(searchQuery.toLowerCase())
    ));
    setIsSearching(false);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, handleSearch]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClear();
    }
  };

  const handleResultClick = (href: string) => {
    router.push(href);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="search"
          placeholder="Buscar en todo el contenido..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pl-10 pr-10"
          aria-label="Buscar contenido"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
            onClick={handleClear}
            aria-label="Limpiar búsqueda"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {results.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-sm text-muted-foreground">
            {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
          </p>
          {results.map((result) => (
            <Card
              key={result.slug}
              className="cursor-pointer hover:border-primary transition-colors"
              onClick={() => handleResultClick(result.href)}
              tabIndex={0}
              role="button"
              aria-label={`Ver ${result.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleResultClick(result.href);
                }
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">{result.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {result.description}
                    </p>
                    <span className="text-xs px-2 py-1 bg-secondary rounded-full">
                      {result.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {query && !isSearching && results.length === 0 && (
        <div className="mt-4 text-center text-muted-foreground">
          No se encontraron resultados para &ldquo;{query}&rdquo;
        </div>
      )}
    </div>
  );
};
