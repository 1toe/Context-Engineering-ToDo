#!/bin/bash

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Crear iconos PWA placeholder
echo -e "\n🎨 Creando iconos PWA placeholder..."

# Verificar instalación
echo -e "\n✅ Instalación completada!"
echo -e "\nPróximos pasos:"
echo "1. Reemplaza los iconos en public/ con tus iconos reales (192x192 y 512x512)"
echo "2. Ejecuta 'npm run dev' para iniciar el servidor de desarrollo"
echo "3. Abre http://localhost:3000 en tu navegador"
echo -e "\n🚀 Para producción:"
echo "   npm run build"
echo "   npm start"
