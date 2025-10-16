'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-24">
      <h1 className="text-4xl font-bold mb-4">Algo salió mal</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        Ha ocurrido un error inesperado. Por favor, intenta nuevamente.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Intentar nuevamente
      </button>
    </div>
  );
}
