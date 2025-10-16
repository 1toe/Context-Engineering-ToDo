'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, Search, BookOpen } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggleMenu();
    }
  };

  const navItems = [
    { href: '/foundations', label: 'Fundamentos' },
    { href: '/guides', label: 'Guías' },
    { href: '/examples', label: 'Ejemplos' },
    { href: '/templates', label: 'Templates' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link 
          href="/" 
          className="mr-6 flex items-center space-x-2"
          aria-label="Ir a página principal"
        >
          <BookOpen className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            Context Engineering
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            aria-label="Buscar contenido"
          >
            <Link href="/search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            tabIndex={0}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t md:hidden">
          <nav className="container grid gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
