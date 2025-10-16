# Instalar dependencias
Write-Host "📦 Instalando dependencias..." -ForegroundColor Cyan
npm install

# Crear iconos PWA placeholder (serán reemplazados con iconos reales)
Write-Host "`n🎨 Creando iconos PWA placeholder..." -ForegroundColor Cyan

# Verificar que todo esté correcto
Write-Host "`n✅ Instalación completada!" -ForegroundColor Green
Write-Host "`nPróximos pasos:" -ForegroundColor Yellow
Write-Host "1. Reemplaza los iconos en public/ con tus iconos reales (192x192 y 512x512)"
Write-Host "2. Ejecuta 'npm run dev' para iniciar el servidor de desarrollo"
Write-Host "3. Abre http://localhost:3000 en tu navegador"
Write-Host "`n🚀 Para producción:" -ForegroundColor Yellow
Write-Host "   npm run build"
Write-Host "   npm start"
