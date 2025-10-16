import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Recursos',
      links: [
        { href: '/foundations', label: 'Fundamentos' },
        { href: '/course', label: 'Curso Completo' },
        { href: '/examples', label: 'Ejemplos' },
        { href: '/templates', label: 'Plantillas' },
      ],
    },
    {
      title: 'Comunidad',
      links: [
        { href: 'https://github.com/davidkimai/Context-Engineering', label: 'GitHub', external: true },
        { href: '/contribute', label: 'Contribuir' },
        { href: '/about', label: 'Acerca de' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { href: '/license', label: 'Licencia MIT' },
        { href: '/privacy', label: 'Privacidad' },
      ],
    },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Context Engineering</h3>
            <p className="text-sm text-muted-foreground">
              Framework completo de ingeniería de contexto para LLMs. Desde fundamentos hasta sistemas multi-agente.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/davidkimai/Context-Engineering"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar repositorio en GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir en Twitter"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Context Engineering. Licencia MIT. Creado por{' '}
            <Link
              href="https://github.com/davidkimai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              David Kimai
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
