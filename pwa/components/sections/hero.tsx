import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="container flex flex-col items-center gap-8 py-24 md:py-32">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
          Context Engineering
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Del Prompting a Sistemas Multi-Agente
        </p>
        <p className="max-w-[750px] text-base text-muted-foreground">
          Framework completo de ingeniería de contexto para LLMs. Desde fundamentos hasta teoría unificada de campos, RAG, memoria y sistemas multi-agente.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/foundations" className="group">
            Comenzar el Curso
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/examples">
            Ver Ejemplos
          </Link>
        </Button>
      </div>

      <div className="mt-8 max-w-[750px] text-center">
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
          &ldquo;Context engineering is the delicate art and science of filling the context window with just the right information for the next step.&rdquo;
          <footer className="mt-2 text-sm">
            — <Link href="https://x.com/karpathy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Andrej Karpathy</Link>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
