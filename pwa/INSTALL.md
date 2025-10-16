# Context Engineering PWA - Guía de Instalación y Uso

## 🚀 Instalación Rápida

### Opción 1: Script Automático (Windows)

```powershell
cd pwa
.\install.ps1
```

### Opción 2: Script Automático (Linux/Mac)

```bash
cd pwa
chmod +x install.sh
./install.sh
```

### Opción 3: Manual

```bash
cd pwa
npm install
```

## 📋 Requisitos Previos

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0

## 🎯 Comandos Disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo en [http://localhost:3000](http://localhost:3000)

### Producción

```bash
npm run build   # Genera build optimizado
npm start       # Inicia servidor de producción
```

### Linting

```bash
npm run lint        # Ejecuta ESLint
npm run type-check  # Verifica tipos de TypeScript
```

## 📁 Estructura del Proyecto

```
pwa/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout principal con metadata
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Estilos globales
│   ├── foundations/             # Sección de Fundamentos
│   │   ├── page.tsx            # Índice de fundamentos
│   │   └── [...slug]/          # Páginas dinámicas de contenido
│   │       └── page.tsx
│   └── search/                  # Búsqueda global
│       └── page.tsx
│
├── components/                   # Componentes React
│   ├── layout/                  # Header, Footer, MainLayout
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── main-layout.tsx
│   ├── sections/                # Secciones de homepage
│   │   ├── hero.tsx
│   │   ├── featured-sections.tsx
│   │   └── quick-start.tsx
│   ├── ui/                      # Componentes UI (Shadcn)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── accordion.tsx
│   │   └── separator.tsx
│   ├── breadcrumbs.tsx          # Navegación breadcrumb
│   ├── markdown-renderer.tsx    # Renderizador de Markdown
│   ├── search-component.tsx     # Componente de búsqueda
│   ├── theme-provider.tsx       # Provider de temas
│   └── theme-toggle.tsx         # Toggle light/dark
│
├── lib/                         # Utilidades y lógica
│   ├── utils.ts                # Utilidades generales (cn)
│   ├── content.ts              # Parser de archivos Markdown
│   └── markdown.ts             # Conversión MD a HTML
│
├── public/                      # Archivos estáticos
│   ├── manifest.json           # Manifest PWA
│   ├── robots.txt              # SEO
│   ├── icon-192x192.png        # Icono PWA 192x192
│   └── icon-512x512.png        # Icono PWA 512x512
│
├── next.config.js              # Configuración Next.js + PWA
├── tailwind.config.ts          # Configuración Tailwind
├── tsconfig.json               # Configuración TypeScript
├── postcss.config.js           # PostCSS
├── package.json                # Dependencias
└── README.md                   # Documentación
```

## 🎨 Personalización

### Temas y Colores

Edita `app/globals.css` para cambiar el esquema de colores:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... más colores */
}
```

### Iconos PWA

Reemplaza los iconos en `public/`:

- `icon-192x192.png` - Icono de 192x192px
- `icon-512x512.png` - Icono de 512x512px
- `apple-icon-180x180.png` - Icono de Apple de 180x180px

### Manifest PWA

Edita `public/manifest.json` para personalizar:

```json
{
  "name": "Tu Nombre de App",
  "short_name": "Tu App",
  "theme_color": "#3b82f6",
  "background_color": "#ffffff"
}
```

## 🔧 Agregar Nuevo Contenido

### 1. Agregar Nueva Categoría

1. Actualiza `lib/content.ts` agregando la ruta:

```typescript
const contentDirectories = {
  foundations: '../00_foundations',
  'tu-nueva-categoria': '../ruta/a/contenido',
};
```

2. Crea la página índice en `app/tu-nueva-categoria/page.tsx`

3. Crea la página dinámica en `app/tu-nueva-categoria/[...slug]/page.tsx`

### 2. Agregar Componentes UI

Los componentes siguen el patrón de Shadcn/UI:

```tsx
import { Button } from '@/components/ui/button';

export const MiComponente = () => {
  return (
    <Button variant="default" size="lg">
      Click aquí
    </Button>
  );
};
```

### 3. Estilos con Tailwind

Usa clases de Tailwind directamente:

```tsx
<div className="flex items-center gap-4 p-6 bg-background rounded-lg border">
  <h2 className="text-2xl font-bold">Título</h2>
</div>
```

## 🌐 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura el directorio raíz como `pwa/`
3. Deploy automático en cada push

### Otros Hosting

```bash
npm run build
```

El contenido estático se genera en `.next/`. Usa cualquier servidor Node.js o hosting estático.

## 🔒 PWA Features

La aplicación incluye:

- ✅ **Instalable**: Puede instalarse como app nativa
- ✅ **Offline**: Funciona sin conexión mediante Service Worker
- ✅ **Caché inteligente**: Recursos se almacenan en caché
- ✅ **Actualizaciones**: Se actualiza automáticamente
- ✅ **Accesos directos**: Shortcuts personalizados en el manifest

### Probar PWA Localmente

1. Ejecuta `npm run build && npm start`
2. Abre DevTools → Application → Manifest
3. Verifica que el Service Worker esté activo
4. Prueba offline mode deshabilitando la red

## 🎯 Características Implementadas

### Accesibilidad

- ✅ ARIA labels en todos los elementos interactivos
- ✅ Navegación completa por teclado
- ✅ Contraste de colores WCAG AA
- ✅ Focus indicators visibles
- ✅ Screen reader friendly

### SEO

- ✅ Meta tags optimizados
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structured data ready
- ✅ Sitemap y robots.txt

### Performance

- ✅ Code splitting automático
- ✅ Lazy loading de imágenes
- ✅ Optimización de fuentes
- ✅ Compresión de assets
- ✅ Cache strategies

## 🐛 Solución de Problemas

### Los iconos PWA no aparecen

Asegúrate de que existan los archivos:
- `public/icon-192x192.png`
- `public/icon-512x512.png`

### El Service Worker no se registra

1. Verifica que estés en modo producción (`npm run build && npm start`)
2. El SW no funciona en desarrollo por defecto
3. Revisa la consola del navegador para errores

### Los estilos de Tailwind no funcionan

1. Verifica que `tailwindcss` esté instalado
2. Revisa `postcss.config.js`
3. Reinicia el servidor de desarrollo

### TypeScript muestra errores

Ejecuta:
```bash
npm run type-check
```

Si persisten, asegúrate de que todas las dependencias estén instaladas.

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/UI](https://ui.shadcn.com/)
- [PWA Best Practices](https://web.dev/progressive-web-apps/)
- [Radix UI](https://www.radix-ui.com/)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

MIT License - Ver [LICENSE](../LICENSE) para más detalles.

## 👤 Autor

**David Kimai**

- GitHub: [@davidkimai](https://github.com/davidkimai)
- Repositorio: [Context-Engineering](https://github.com/davidkimai/Context-Engineering)
