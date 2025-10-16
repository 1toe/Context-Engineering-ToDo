import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { MainLayout } from '@/components/layout/main-layout';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'Context Engineering - Del Prompting a Sistemas Multi-Agente',
    template: '%s | Context Engineering'
  },
  description: 'Framework completo de ingeniería de contexto para LLMs. Desde fundamentos hasta teoría unificada de campos, RAG, memoria y sistemas multi-agente.',
  keywords: [
    'Context Engineering',
    'Prompt Engineering',
    'LLM',
    'RAG',
    'Multi-Agent Systems',
    'Neural Fields',
    'Quantum Semantics',
    'AI',
    'Machine Learning'
  ],
  authors: [{ name: 'David Kimai' }],
  creator: 'David Kimai',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://context-engineering.vercel.app',
    title: 'Context Engineering',
    description: 'Framework completo de ingeniería de contexto para LLMs',
    siteName: 'Context Engineering',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Context Engineering',
    description: 'Framework completo de ingeniería de contexto para LLMs',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  appleWebApp: {
    capable: false, // Cambiado para evitar warning deprecado
    statusBarStyle: 'default',
    title: 'Context Engineering'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
