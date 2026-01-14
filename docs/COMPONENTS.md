# 🧩 Documentación de Componentes - WolfEnterprice

Guía detallada de todos los componentes del proyecto.

---

## 📋 Índice de Componentes

1. [Navigation](#navigation)
2. [Hero](#hero)
3. [About](#about)
4. [Services](#services)
5. [Plans](#plans)
6. [Technologies](#technologies)
7. [Process](#process)
8. [Team](#team)
9. [Contact](#contact)
10. [Footer](#footer)
11. [Auxiliares](#componentes-auxiliares)

---

## 🧭 Navigation

**Archivo:** `src/components/Navigation.astro`

### Descripción

Barra de navegación principal con logo y menú de navegación. Se fija al hacer scroll (sticky).

### Características

- Logo de la empresa integrado
- Menú responsive con hamburguesa en mobile
- Navegación suave a secciones
- Sticky navigation
- Transiciones suaves

### Uso

```astro
<Navigation />
```

### Estructura HTML

```html
<nav class="nav">
  <div class="nav-container">
    <a href="/" class="nav-logo">
      <img src="/icons/logo.png" alt="Logo" />
    </a>
    <ul class="nav-menu">
      <li><a href="#hero">Inicio</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <!-- ... -->
    </ul>
  </div>
</nav>
```

### Personalización

**Cambiar logo:**
- Reemplazar `/icons/logo.png` en el componente

**Agregar/remover enlaces:**
- Editar el array de `navItems` en el componente

---

## 🎯 Hero

**Archivo:** `src/components/Hero.astro`

### Descripción

Sección principal de la landing page. Muestra el logo, título principal, CTAs y características destacadas.

### Características

- Layout grid de 2 columnas (desktop) / 1 columna (mobile)
- Logo a la izquierda, contenido a la derecha
- Badge superior con mensaje destacado
- Título principal con gradiente
- Botones CTA (Solicitar cotización, WhatsApp)
- Subtítulo descriptivo
- Features destacadas (3 items)
- Tagline final
- Sin animaciones parallax (fijo)

### Uso

```astro
<Hero />
```

### Estructura

```
Hero
├── Logo (izquierda)
└── Contenido (derecha)
    ├── Badge
    ├── Título
    ├── Botones CTA
    ├── Subtítulo
    ├── Features (3 items)
    └── Tagline
```

### Personalización

**Cambiar contenido:**
- Editar texto directamente en el componente
- Badge: línea 23
- Título: líneas 25-28
- Subtítulo: líneas 44-47
- Features: líneas 48-76

**Cambiar logo:**
- Ajustar tamaño en CSS: `.hero-logo-img`
- Cambiar imagen: línea 19

**Ajustar layout:**
- Grid columns: `.hero-wrapper` (línea 209)
- Espaciado: `gap` en `.hero-wrapper`

---

## 📖 About

**Archivo:** `src/components/About.astro`

### Descripción

Sección "Quiénes somos" que presenta la empresa y sus valores.

### Características

- Título y subtítulo
- Contenido descriptivo
- Diseño centrado y limpio

### Uso

```astro
<About />
```

### Personalización

- Editar contenido directamente en el componente

---

## 🛠️ Services

**Archivo:** `src/components/Services.astro`

### Descripción

Muestra los servicios ofrecidos por la empresa.

### Características

- Grid responsive de servicios
- Iconos SVG para cada servicio
- Título y descripción por servicio
- Datos desde `serviceService`

### Uso

```astro
<Services />
```

### Datos

**Archivo:** `src/services/serviceService.ts`

**Agregar nuevo servicio:**

```typescript
{
  id: 'nuevo-servicio',
  title: 'Título del Servicio',
  description: 'Descripción del servicio',
  icon: 'icon-name' // Nombre del icono en Icons.astro
}
```

### Estructura de Datos

```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
```

---

## 💰 Plans

**Archivo:** `src/components/Plans.astro`

### Descripción

Muestra los planes de precios disponibles.

### Características

- Grid responsive de planes
- Badge "Popular" para plan destacado
- Precio formateado en pesos colombianos
- Lista de features por plan
- Botón CTA por plan

### Uso

```astro
<Plans />
```

### Datos

**Archivo:** `src/services/planService.ts`

**Agregar nuevo plan:**

```typescript
{
  id: 'plan-id',
  name: 'Nombre del Plan',
  price: 850000,
  period: 'mes',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  popular: true // Opcional: marca como popular
}
```

### Estructura de Datos

```typescript
interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}
```

---

## 🚀 Technologies

**Archivo:** `src/components/Technologies.astro`

### Descripción

Muestra las tecnologías utilizadas por la empresa.

### Características

- Grid responsive de tecnologías
- Iconos SVG para cada tecnología
- Nombre y descripción breve
- Diseño tipo cards

### Uso

```astro
<Technologies />
```

### Datos

**Archivo:** `src/services/technologyService.ts`

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

## 🔄 Process

**Archivo:** `src/components/Process.astro`

### Descripción

Muestra el proceso de trabajo en pasos numerados.

### Características

- Pasos numerados (1-5)
- Título y descripción por paso
- Diseño vertical con números destacados
- Animaciones en scroll

### Uso

```astro
<Process />
```

### Datos

**Archivo:** `src/services/processService.ts`

**Estructura de un paso:**

```typescript
{
  number: 1,
  title: 'Título del Paso',
  description: 'Descripción del paso'
}
```

**Agregar nuevo paso:**

Editar `getProcessSteps()` en `processService.ts`:

```typescript
{
  number: 6,
  title: 'Nuevo Paso',
  description: 'Descripción del nuevo paso'
}
```

---

## 👥 Team

**Archivo:** `src/components/Team.astro`

### Descripción

Muestra el equipo y proyectos desde GitHub.

### Características

- Integración con GitHub API
- Muestra repositorios públicos
- Filtrado automático de proyectos relevantes
- Cards de proyectos con preview
- Información del equipo

### Uso

```astro
<Team />
```

### Configuración

**Usuario de GitHub:**

Editar `src/services/githubService.ts`:

```typescript
export const githubService = new GitHubService('DavidSolorza');
```

**Agregar proyectos manuales:**

En el componente `Team.astro`, agregar al array `allProjects`:

```typescript
const manualProject = {
  id: 999999,
  name: 'Nombre del Proyecto',
  description: 'Descripción',
  language: 'TypeScript',
  url: 'https://github.com/user/repo',
  updatedAt: new Date().toISOString(),
  previewImage: '/ruta/a/imagen.png' // Opcional
};
```

---

## 📧 Contact

**Archivo:** `src/components/Contact.astro`

### Descripción

Formulario de contacto con integración WhatsApp y vista previa en tiempo real.

### Características

- Formulario con validación de email
- Vista previa en tiempo real del mensaje de WhatsApp
- Envío directo a WhatsApp con mensaje pre-formateado
- Layout de 2 columnas (formulario + preview)
- Información de contacto (email y tiempo de respuesta)

### Uso

```astro
<Contact />
```

### Campos del Formulario

1. **Nombre** (requerido)
2. **Email** (requerido, validado)
3. **Teléfono** (requerido)
4. **Mensaje** (requerido)

### Formato del Mensaje WhatsApp

```
¡Hola! 👋

Mi nombre es *[Nombre]*.

[Mensaje]

📧 *Email:* [email]
📱 *Teléfono:* [teléfono]

---
_Mensaje enviado desde wolfenterprice
```

### Configuración

**Número de WhatsApp:**

`src/services/contactService.ts`:

```typescript
private readonly whatsappNumber: string = '+573137374108';
```

**Email de contacto:**

```typescript
private readonly email: string = 'contacto@wolfenterprice.com';
```

### Personalización

**Cambiar formato del mensaje:**

Editar función `generateMessage()` en `Contact.astro` (línea ~150).

**Cambiar layout:**

Ajustar CSS de `.contact-form-wrapper` (grid de 2 columnas).

---

## 🦶 Footer

**Archivo:** `src/components/Footer.astro`

### Descripción

Pie de página con información de contacto, redes sociales y logo.

### Características

- Logo de la empresa
- Información de contacto
- Enlaces a redes sociales
- Copyright
- Diseño responsive

### Uso

```astro
<Footer />
```

### Personalización

- Editar información de contacto directamente en el componente
- Agregar/remover redes sociales
- Cambiar año de copyright

---

## 🔧 Componentes Auxiliares

### FloatingNav

**Archivo:** `src/components/FloatingNav.astro`

Navegación flotante para scroll rápido entre secciones. Aparece al hacer scroll.

### ContactModal

**Archivo:** `src/components/ContactModal.astro`

Modal para selección de método de contacto (actualmente solo muestra WhatsApp).

### Icons

**Archivo:** `src/components/Icons.astro`

Definición de iconos SVG reutilizables usando `<symbol>`.

**Agregar nuevo icono:**

```html
<symbol id="icon-nombre" viewBox="0 0 24 24">
  <!-- SVG path aquí -->
</symbol>
```

**Usar icono:**

```html
<svg>
  <use href="#icon-nombre"></use>
</svg>
```

### ProjectCard

**Archivo:** `src/components/ProjectCard.astro`

Tarjeta reutilizable para mostrar proyectos.

**Props:**

```typescript
interface Props {
  project: {
    name: string;
    description: string;
    language: string;
    url: string;
    previewImage?: string;
  };
}
```

---

## 📝 Convenciones de Componentes

### Estructura Estándar

```astro
---
// 1. Imports
import Service from '../services/service';

// 2. Props (si aplica)
interface Props {
  title: string;
}

const { title } = Astro.props;

// 3. Datos
const data = Service.getData();
---

<!-- 4. HTML -->
<section class="component">
  <h2>{title}</h2>
  <!-- Contenido -->
</section>

<!-- 5. Estilos -->
<style>
  .component {
    /* Estilos scoped */
  }
</style>

<!-- 6. Scripts (opcional) -->
<script>
  // JavaScript del cliente
</script>
```

### Naming

- **Componentes**: PascalCase (`Hero.astro`)
- **Clases CSS**: kebab-case (`.hero-wrapper`)
- **IDs**: kebab-case (`#hero-section`)

---

**Última actualización**: Diciembre 2024

