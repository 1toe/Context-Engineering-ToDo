# Context Engineering PWA

Progressive Web App para el framework completo de Context Engineering.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
npm run build
npm start
```

## 📦 Estructura del Proyecto

```
pwa/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Homepage
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── layout/           # Header, Footer, MainLayout
│   ├── sections/         # Hero, FeaturedSections, etc.
│   ├── ui/               # Componentes UI (Shadcn)
│   └── theme-provider.tsx
├── lib/                   # Utilidades
│   └── utils.ts
├── public/               # Archivos estáticos
│   ├── manifest.json
│   └── icons/
├── types/                # TypeScript types
├── next.config.js        # Configuración Next.js + PWA
├── tailwind.config.ts    # Configuración Tailwind
└── tsconfig.json         # Configuración TypeScript
```

## 🎨 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 + TypeScript
- **Estilos**: TailwindCSS + Shadcn/UI
- **PWA**: next-pwa
- **Iconos**: Lucide React
- **Temas**: next-themes (Light/Dark)

## 📱 Características PWA

- ✅ Instalable en dispositivos móviles y desktop
- ✅ Funcionamiento offline con Service Worker
- ✅ Caché inteligente de recursos
- ✅ Actualizaciones automáticas
- ✅ Accesos directos personalizados
- ✅ Optimizado para rendimiento

## 🎯 Características

- **Responsive Design**: Adaptado a móviles, tablets y desktop
- **Accesibilidad**: ARIA labels, navegación por teclado
- **SEO Optimizado**: Meta tags, Open Graph, Twitter Cards
- **Modo Oscuro**: Tema claro/oscuro con persistencia
- **Búsqueda Global**: Búsqueda rápida en todo el contenido
- **Navegación Intuitiva**: Breadcrumbs, sidebar, menú móvil
- **Markdown Rendering**: Soporte completo para archivos .md

## 📚 Contenido

La PWA integra todo el contenido del repositorio:

- **Fundamentos** (00_foundations): 14 módulos desde átomos hasta teoría unificada
- **Curso** (00_COURSE): 15 módulos estructurados
- **Ejemplos** (30_examples): Chatbots, RAG, agentes
- **Plantillas** (20_templates): Templates listos para usar
- **Herramientas Cognitivas** (cognitive-tools): Arquitecturas y programas
- **Protocolos** (60_protocols): Shells y esquemas
- **Referencias** (40_reference): Guías y documentación

## 🛠️ Desarrollo

### Agregar Nuevas Páginas

1. Crear archivo en `app/[ruta]/page.tsx`
2. Agregar metadata con `export const metadata`
3. Implementar componente con TypeScript

### Agregar Componentes UI

```tsx
import { Button } from '@/components/ui/button';

export const MiComponente = () => {
  return <Button variant="default">Click</Button>;
};
```

### Estilos con Tailwind

Usa clases de Tailwind directamente:

```tsx
<div className="flex items-center gap-4 p-6">
  <h1 className="text-3xl font-bold">Título</h1>
</div>
```

## 📄 Licencia

MIT License - Ver [LICENSE](../LICENSE)

## 👤 Autor

**David Kimai**

- GitHub: [@davidkimai](https://github.com/davidkimai)
- Repositorio: [Context-Engineering](https://github.com/davidkimai/Context-Engineering)

## 🙏 Contribuciones

Las contribuciones son bienvenidas. Por favor, lee [CONTRIBUTING.md](../.github/CONTRIBUTING.md) antes de enviar un PR.
