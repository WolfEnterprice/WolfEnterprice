# WolfEnterprice - Landing Page

Landing page profesional y optimizada para SEO construida con Astro, enfocada en desarrollo web y soluciones digitales.

## 🚀 Características

- **Ultra rápido**: Generación de sitios estáticos con Astro
- **SEO optimizado**: Meta tags, Open Graph, sitemap y estructura semántica
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Código limpio**: Arquitectura escalable con servicios de negocio
- **Alta conversión**: CTAs estratégicos y diseño orientado a resultados

## 📁 Estructura del Proyecto

```
src/
 ├─ layouts/
 │   └─ BaseLayout.astro      # Layout base con SEO
 ├─ pages/
 │   ├─ index.astro           # Página principal
 │   ├─ sitemap.xml.ts        # Generador de sitemap
 │   └─ robots.txt.ts         # Generador de robots.txt
 ├─ components/
 │   ├─ Navigation.astro      # Barra de navegación
 │   ├─ Hero.astro            # Sección hero
 │   ├─ About.astro           # Quiénes somos
 │   ├─ Services.astro        # Servicios
 │   ├─ Plans.astro           # Planes y precios
 │   ├─ Technologies.astro    # Tecnologías
 │   ├─ Process.astro         # Proceso de trabajo
 │   ├─ Contact.astro         # Formulario de contacto
 │   └─ Footer.astro          # Footer
 ├─ services/                 # Servicios de negocio
 │   ├─ planService.ts
 │   ├─ serviceService.ts
 │   ├─ technologyService.ts
 │   ├─ processService.ts
 │   └─ contactService.ts
 ├─ types/
 │   └─ index.ts              # Tipos TypeScript
 └─ styles/
     └─ global.css            # Estilos globales
```

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## 📦 Tecnologías

- **Astro**: Framework para sitios estáticos
- **TypeScript**: Tipado estático
- **CSS**: Estilos modernos con variables CSS

## 🎨 Diseño

- Colores oscuros (negro, gris, azul)
- Tipografía moderna (Inter)
- Diseño limpio y profesional
- Enfoque empresarial

## 📈 SEO

- Meta tags optimizados
- Open Graph para redes sociales
- Sitemap automático
- Estructura semántica HTML5
- URLs limpias
- Contenido optimizado para Google

## 🔧 Configuración

### WhatsApp

Edita el número de WhatsApp en `src/services/contactService.ts`:

```typescript
private readonly whatsappNumber: string = '+573001234567';
```

### Dominio

Actualiza el dominio en `astro.config.mjs`:

```javascript
site: 'https://wolfenterprice.com',
```

## 📝 Licencia

Todos los derechos reservados © WolfEnterprice

