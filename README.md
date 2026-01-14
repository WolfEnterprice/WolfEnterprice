# 🐺 WolfEnterprice - Documentación del Proyecto

Landing page profesional y optimizada para SEO construida con **Astro**, enfocada en desarrollo web y soluciones digitales para empresas.

---

## 📋 Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Características Principales](#características-principales)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Instalación y Configuración](#instalación-y-configuración)
5. [Guía de Desarrollo](#guía-de-desarrollo)
6. [Componentes](#componentes)
7. [Servicios](#servicios)
8. [Estilos y Diseño](#estilos-y-diseño)
9. [Configuración](#configuración)
10. [Scripts Disponibles](#scripts-disponibles)
11. [Convenciones de Código](#convenciones-de-código)
12. [Deployment](#deployment)

---

## 🎯 Descripción General

**WolfEnterprice** es una landing page corporativa diseñada para mostrar servicios de desarrollo web, tecnologías utilizadas, planes de precios y facilitar el contacto con clientes potenciales. El proyecto está construido con **Astro 4.0**, lo que garantiza sitios estáticos ultra rápidos y optimizados para SEO.

### Tecnologías Principales

- **Astro 4.0**: Framework para sitios estáticos
- **TypeScript**: Tipado estático para mayor seguridad
- **CSS Variables**: Sistema de diseño escalable
- **GitHub API**: Integración para mostrar proyectos

---

## ✨ Características Principales

- ⚡ **Ultra rápido**: Generación de sitios estáticos con Astro
- 🔍 **SEO optimizado**: Meta tags, Open Graph, sitemap y estructura semántica
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos (Mobile First)
- 🎨 **Diseño profesional**: UI/UX moderna y orientada a conversión
- 💬 **Integración WhatsApp**: Formulario de contacto con envío directo a WhatsApp
- 🎯 **Alta conversión**: CTAs estratégicos y diseño orientado a resultados
- 🏗️ **Arquitectura escalable**: Código limpio con servicios de negocio separados
- ♿ **Accesible**: Cumple con estándares de accesibilidad web

---

## 📁 Estructura del Proyecto

```
WolfEnterprice/
├── public/                          # Archivos estáticos
│   ├── icons/
│   │   └── logo.png                # Logo de la empresa
│   ├── profiles/                    # Fotos del equipo
│   └── scripts/                     # Scripts del cliente
│
├── src/
│   ├── components/                  # Componentes Astro
│   │   ├── Navigation.astro        # Barra de navegación principal
│   │   ├── FloatingNav.astro        # Navegación flotante
│   │   ├── Hero.astro              # Sección hero (principal)
│   │   ├── About.astro             # Sección "Quiénes somos"
│   │   ├── Services.astro          # Servicios ofrecidos
│   │   ├── Plans.astro              # Planes y precios
│   │   ├── Technologies.astro       # Tecnologías utilizadas
│   │   ├── Process.astro            # Proceso de trabajo
│   │   ├── Team.astro               # Equipo y proyectos
│   │   ├── Contact.astro            # Formulario de contacto
│   │   ├── ContactModal.astro       # Modal de contacto
│   │   ├── Footer.astro             # Pie de página
│   │   ├── Icons.astro              # SVG icons
│   │   └── ProjectCard.astro         # Tarjeta de proyecto
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro         # Layout base con SEO
│   │
│   ├── pages/
│   │   ├── index.astro              # Página principal
│   │   ├── sitemap.xml.ts          # Generador de sitemap
│   │   └── robots.txt.ts           # Generador de robots.txt
│   │
│   ├── services/                     # Servicios de negocio (lógica)
│   │   ├── contactService.ts        # Servicio de contacto
│   │   ├── planService.ts           # Servicio de planes
│   │   ├── serviceService.ts        # Servicio de servicios
│   │   ├── technologyService.ts     # Servicio de tecnologías
│   │   ├── processService.ts        # Servicio de proceso
│   │   └── githubService.ts         # Servicio de GitHub API
│   │
│   ├── scripts/                      # Scripts del cliente (JavaScript)
│   │   ├── animations.js            # Animaciones en scroll
│   │   ├── hero-animations.js       # Animaciones del hero
│   │   └── parallax.js             # Efectos parallax (deshabilitado)
│   │
│   ├── styles/
│   │   └── global.css               # Estilos globales y variables CSS
│   │
│   └── types/
│       └── index.ts                 # Tipos TypeScript compartidos
│
├── astro.config.mjs                 # Configuración de Astro
├── tsconfig.json                    # Configuración de TypeScript
├── package.json                     # Dependencias y scripts
└── README.md                        # Esta documentación
```

---

## 🚀 Instalación y Configuración

### Requisitos Previos

- **Node.js**: Versión 18 o superior
- **npm**: Versión 9 o superior (o yarn/pnpm)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/WolfEnterprice/WolfEnterprice.git
   cd WolfEnterprice
   ```

2. **Instalar dependencias**
```bash
npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
npm run dev
   ```
   El sitio estará disponible en `http://localhost:4321`

4. **Construir para producción**
   ```bash
npm run build
   ```
   Los archivos estáticos se generarán en la carpeta `dist/`

5. **Preview de producción**
   ```bash
npm run preview
```

---

## 👨‍💻 Guía de Desarrollo

### Flujo de Trabajo Recomendado

1. **Crear una rama nueva**
   ```bash
   git checkout -b feature/nombre-de-la-feature
   ```

2. **Hacer cambios y commits**
   ```bash
   git add .
   git commit -m "Descripción clara de los cambios"
   ```

3. **Push y crear Pull Request**
   ```bash
   git push origin feature/nombre-de-la-feature
   ```

### Estructura de Commits

Usa mensajes de commit descriptivos:
- `feat: agregar nueva sección de testimonios`
- `fix: corregir validación de email en formulario`
- `style: mejorar espaciado en Hero`
- `refactor: reorganizar servicios de negocio`
- `docs: actualizar documentación de componentes`

---

## 🧩 Componentes

### Componentes Principales

#### 1. **Navigation.astro**
Barra de navegación principal con logo y menú de navegación.

**Características:**
- Logo de la empresa integrado
- Menú responsive con hamburguesa en mobile
- Navegación suave a secciones
- Sticky navigation (se fija al hacer scroll)

**Uso:**
```astro
<Navigation />
```

---

#### 2. **Hero.astro**
Sección principal de la landing page.

**Características:**
- Layout grid de 2 columnas (desktop) / 1 columna (mobile)
- Logo a la izquierda, contenido a la derecha
- Badge superior, título, botones CTA y subtítulo
- Features destacadas
- Diseño optimizado sin animaciones parallax

**Estructura:**
```astro
<Hero />
```

**Personalización:**
- Editar contenido en `src/components/Hero.astro`
- Ajustar estilos en la sección `<style>` del componente

---

#### 3. **Contact.astro**
Formulario de contacto con integración WhatsApp.

**Características:**
- Formulario con validación de email
- Vista previa en tiempo real del mensaje de WhatsApp
- Envío directo a WhatsApp con mensaje pre-formateado
- Información de contacto (email y tiempo de respuesta)

**Campos del formulario:**
- Nombre (requerido)
- Email (requerido, validado)
- Teléfono (requerido)
- Mensaje (requerido)

**Uso:**
```astro
<Contact />
```

**Configuración:**
- Número de WhatsApp: `src/services/contactService.ts`
- Email de contacto: `src/services/contactService.ts`

---

#### 4. **Services.astro**
Muestra los servicios ofrecidos.

**Datos:** `src/services/serviceService.ts`

**Agregar nuevo servicio:**
```typescript
{
  id: 'nuevo-servicio',
  title: 'Título del Servicio',
  description: 'Descripción del servicio',
  icon: 'icon-name' // Nombre del icono SVG
}
```

---

#### 5. **Plans.astro**
Muestra los planes de precios disponibles.

**Datos:** `src/services/planService.ts`

**Estructura de un plan:**
```typescript
{
  id: 'plan-id',
  name: 'Nombre del Plan',
  price: 850000,
  period: 'mes',
  features: ['Feature 1', 'Feature 2'],
  popular: true // Opcional: marca como popular
}
```

---

#### 6. **Technologies.astro**
Muestra las tecnologías utilizadas.

**Datos:** `src/services/technologyService.ts`

**Agregar nueva tecnología:**
```typescript
{
  id: 'tech-id',
  name: 'Nombre de la Tecnología',
  description: 'Descripción breve',
  icon: 'icon-name'
}
```

---

#### 7. **Process.astro**
Muestra el proceso de trabajo en pasos.

**Datos:** `src/services/processService.ts`

**Estructura de un paso:**
```typescript
{
  number: 1,
  title: 'Título del Paso',
  description: 'Descripción del paso'
}
```

---

#### 8. **Team.astro**
Muestra el equipo y proyectos desde GitHub.

**Características:**
- Integración con GitHub API
- Muestra repositorios públicos del usuario configurado
- Filtrado automático de proyectos relevantes

**Configuración:**
- Usuario de GitHub: `src/services/githubService.ts`
- Agregar proyectos manuales en el componente

---

### Componentes Auxiliares

- **Footer.astro**: Pie de página con información de contacto y redes
- **ContactModal.astro**: Modal para selección de método de contacto
- **FloatingNav.astro**: Navegación flotante para scroll rápido
- **Icons.astro**: Definición de iconos SVG reutilizables
- **ProjectCard.astro**: Tarjeta para mostrar proyectos

---

## 🔧 Servicios

Los servicios contienen la lógica de negocio separada de la presentación.

### ContactService (`src/services/contactService.ts`)

Gestiona la comunicación y validación de contactos.

**Métodos principales:**
```typescript
getWhatsAppUrl(message?: string): string
validateEmail(email: string): boolean
validatePhone(phone: string): boolean
getEmail(): string
getMailtoUrl(subject: string, body: string): string
```

**Configuración:**
```typescript
private readonly whatsappNumber: string = '+573137374108';
private readonly email: string = 'contacto@wolfenterprice.com';
```

---

### PlanService (`src/services/planService.ts`)

Gestiona los planes de precios.

**Métodos:**
```typescript
getAllPlans(): Plan[]
getPlanById(planId: string): Plan | undefined
```

---

### ServiceService (`src/services/serviceService.ts`)

Gestiona los servicios ofrecidos.

**Métodos:**
```typescript
getAllServices(): Service[]
getServiceById(serviceId: string): Service | undefined
```

---

### TechnologyService (`src/services/technologyService.ts`)

Gestiona las tecnologías utilizadas.

**Métodos:**
```typescript
getAllTechnologies(): Technology[]
```

---

### ProcessService (`src/services/processService.ts`)

Gestiona los pasos del proceso de trabajo.

**Métodos:**
```typescript
getProcessSteps(): ProcessStep[]
```

---

### GitHubService (`src/services/githubService.ts`)

Integración con GitHub API para mostrar proyectos.

**Métodos:**
```typescript
getUserRepos(username: string): Promise<Project[]>
getMultipleUsersRepos(usernames: string[]): Promise<Project[]>
```

**Configuración:**
```typescript
export const githubService = new GitHubService('DavidSolorza');
```

---

## 🎨 Estilos y Diseño

### Sistema de Diseño

El proyecto utiliza **CSS Variables** para un sistema de diseño consistente y fácil de mantener.

**Archivo principal:** `src/styles/global.css`

### Variables CSS Principales

#### Colores
```css
--color-primary: #4a9eff;        /* Azul principal */
--color-secondary: #00d4ff;       /* Azul secundario */
--color-accent: #bfff00;          /* Verde lima */
--color-teal: #00d4ff;            /* Teal */
--color-bg-primary: #0a0a0a;      /* Fondo principal (negro) */
--color-bg-secondary: #141414;    /* Fondo secundario */
--color-text-primary: #ffffff;     /* Texto principal */
--color-text-secondary: #b0b0b0;  /* Texto secundario */
```

#### Espaciado
```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 0.75rem;   /* 12px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 4rem;     /* 64px */
--spacing-3xl: 6rem;     /* 96px */
```

#### Tipografía
```css
--font-family-primary: 'Inter', sans-serif;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Responsive Design

El proyecto sigue un enfoque **Mobile First**:

- **Mobile**: < 480px
- **Tablet**: 481px - 1023px
- **Desktop**: ≥ 1024px

**Breakpoints principales:**
```css
@media (max-width: 480px) { /* Mobile */ }
@media (max-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

### Convenciones de Estilos

1. **Usar variables CSS** en lugar de valores hardcodeados
2. **Mobile First**: Escribir estilos base para mobile, luego media queries para pantallas más grandes
3. **BEM naming** (opcional): Para clases complejas
4. **Scoped styles**: Cada componente tiene sus propios estilos en `<style>`

---

## ⚙️ Configuración

### WhatsApp

**Archivo:** `src/services/contactService.ts`

```typescript
private readonly whatsappNumber: string = '+573137374108';
```

### Email de Contacto

**Archivo:** `src/services/contactService.ts`

```typescript
private readonly email: string = 'contacto@wolfenterprice.com';
```

### GitHub Username

**Archivo:** `src/services/githubService.ts`

```typescript
export const githubService = new GitHubService('DavidSolorza');
```

### Meta Tags y SEO

**Archivo:** `src/pages/index.astro`

```typescript
const pageTitle = 'WolfEnterprice - Desarrollo Web y Soluciones Digitales';
const pageDescription = 'Descripción para SEO...';
```

**Archivo:** `src/layouts/BaseLayout.astro`

- Open Graph image: `/icons/logo.png`
- Favicon: `/icons/logo.png`

---

## 📜 Scripts Disponibles

### Desarrollo

```bash
npm run dev        # Inicia servidor de desarrollo
npm start          # Alias de npm run dev
```

### Producción

```bash
npm run build      # Construye para producción
npm run preview    # Preview de la build de producción
```

### Astro CLI

```bash
npm run astro      # Ejecuta comandos de Astro CLI
```

---

## 📝 Convenciones de Código

### Estructura de Componentes Astro

```astro
---
// 1. Imports y configuración
import Component from '../components/Component.astro';
const data = getData();
---

<!-- 2. HTML/Markup -->
<section class="component">
  <h1>{data.title}</h1>
</section>

<!-- 3. Estilos scoped -->
<style>
  .component {
    /* Estilos aquí */
  }
</style>

<!-- 4. Scripts del cliente (opcional) -->
<script>
  // JavaScript aquí
</script>
```

### Naming Conventions

- **Componentes**: PascalCase (`Hero.astro`, `Contact.astro`)
- **Servicios**: camelCase con sufijo `Service` (`contactService.ts`)
- **Tipos**: PascalCase (`Plan`, `Service`, `Technology`)
- **Variables CSS**: kebab-case (`--color-primary`)
- **Clases CSS**: kebab-case (`.hero-wrapper`, `.contact-form`)

### TypeScript

- Usar tipos explícitos cuando sea posible
- Tipos compartidos en `src/types/index.ts`
- Interfaces para objetos complejos

### Comentarios

- Comentarios descriptivos en funciones complejas
- JSDoc para funciones públicas de servicios
- Comentarios en español para el equipo

---

## 🚢 Deployment

### Build de Producción

```bash
npm run build
```

Los archivos estáticos se generan en `dist/`.

### Archivos Generados

- `dist/index.html` - Página principal
- `dist/_astro/` - Assets compilados (CSS, JS)
- `dist/sitemap.xml` - Sitemap automático
- `dist/robots.txt` - Robots.txt

### Plataformas Recomendadas

- **Vercel**: Deploy automático desde GitHub
- **Netlify**: Deploy automático desde GitHub
- **GitHub Pages**: Hosting estático gratuito
- **Cloudflare Pages**: CDN global

### Variables de Entorno

Actualmente no se requieren variables de entorno. Toda la configuración está en los archivos de servicios.

---

## 📚 Recursos Adicionales

### Documentación de Astro

- [Astro Docs](https://docs.astro.build)
- [Astro Components](https://docs.astro.build/en/core-concepts/astro-components/)

### Herramientas Útiles

- **Astro Dev Tools**: Extensión de navegador para debugging
- **VS Code**: Extensiones recomendadas para Astro y TypeScript

---

## 🤝 Contribución

### Proceso de Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código

- Seguir las convenciones establecidas
- Escribir código limpio y comentado
- Probar cambios en desarrollo antes de hacer PR
- Actualizar documentación si es necesario

---

## 📞 Soporte

Para preguntas o problemas:

- **Email**: contacto@wolfenterprice.com
- **WhatsApp**: +57 313 737 4108
- **GitHub Issues**: [Crear un issue](https://github.com/WolfEnterprice/WolfEnterprice/issues)

---

## 📄 Licencia

Este proyecto es propiedad de **WolfEnterprice**.

---

**Última actualización**: Diciembre 2024
