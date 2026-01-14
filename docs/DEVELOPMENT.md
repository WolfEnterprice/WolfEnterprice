# 🛠️ Guía de Desarrollo - WolfEnterprice

Guía detallada para desarrolladores del equipo.

---

## 📋 Índice

1. [Configuración del Entorno](#configuración-del-entorno)
2. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
3. [Flujo de Trabajo](#flujo-de-trabajo)
4. [Agregar Nuevos Componentes](#agregar-nuevos-componentes)
5. [Agregar Nuevos Servicios](#agregar-nuevos-servicios)
6. [Modificar Estilos](#modificar-estilos)
7. [Integración con APIs](#integración-con-apis)
8. [Testing](#testing)
9. [Debugging](#debugging)
10. [Troubleshooting](#troubleshooting)

---

## 🔧 Configuración del Entorno

### Requisitos

- **Node.js**: v18.0.0 o superior
- **npm**: v9.0.0 o superior
- **Git**: Última versión
- **Editor**: VS Code recomendado (con extensiones de Astro y TypeScript)

### Extensiones VS Code Recomendadas

```json
{
  "recommendations": [
    "astro-build.astro-vscode",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss"
  ]
}
```

### Setup Inicial

```bash
# 1. Clonar repositorio
git clone https://github.com/WolfEnterprice/WolfEnterprice.git
cd WolfEnterprice

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:4321
```

---

## 🏗️ Arquitectura del Proyecto

### Principios de Diseño

1. **Separación de Responsabilidades**
   - Componentes: Solo presentación (UI)
   - Servicios: Lógica de negocio
   - Tipos: Definiciones TypeScript compartidas

2. **Mobile First**
   - Diseño responsive desde mobile hacia desktop
   - Media queries progresivas

3. **Performance First**
   - Código optimizado para Astro
   - Assets optimizados
   - Lazy loading cuando sea necesario

### Estructura de Carpetas

```
src/
├── components/     # Componentes reutilizables (UI)
├── layouts/        # Layouts base
├── pages/          # Páginas (rutas)
├── services/       # Lógica de negocio
├── scripts/        # JavaScript del cliente
├── styles/          # Estilos globales
└── types/           # Tipos TypeScript
```

---

## 🔄 Flujo de Trabajo

### 1. Crear una Nueva Feature

```bash
# Crear rama
git checkout -b feature/nombre-feature

# Hacer cambios
# ...

# Commit
git add .
git commit -m "feat: descripción de la feature"

# Push
git push origin feature/nombre-feature

# Crear Pull Request en GitHub
```

### 2. Hacer Fixes

```bash
git checkout -b fix/descripcion-del-fix
# ... hacer cambios
git commit -m "fix: descripción del fix"
git push origin fix/descripcion-del-fix
```

### 3. Actualizar Estilos

```bash
git checkout -b style/mejora-estilos
# ... hacer cambios
git commit -m "style: mejorar estilos de componente X"
git push origin style/mejora-estilos
```

---

## 🧩 Agregar Nuevos Componentes

### Paso 1: Crear el Archivo

Crear `src/components/NuevoComponente.astro`:

```astro
---
// 1. Frontmatter (TypeScript/JavaScript)
interface Props {
  title: string;
  description?: string;
}

const { title, description = '' } = Astro.props;
---

<!-- 2. HTML/Markup -->
<section class="nuevo-componente">
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</section>

<!-- 3. Estilos scoped -->
<style>
  .nuevo-componente {
    padding: var(--spacing-lg);
    background: var(--color-bg-secondary);
  }
</style>
```

### Paso 2: Usar el Componente

En `src/pages/index.astro` o en otro componente:

```astro
---
import NuevoComponente from '../components/NuevoComponente.astro';
---

<NuevoComponente 
  title="Título del Componente"
  description="Descripción opcional"
/>
```

### Paso 3: Agregar al README

Actualizar la documentación con el nuevo componente.

---

## 🔧 Agregar Nuevos Servicios

### Estructura de un Servicio

Crear `src/services/nuevoService.ts`:

```typescript
/**
 * Servicio de negocio para [descripción]
 * Implementa el principio de responsabilidad única (SRP)
 */
import type { TipoRequerido } from '../types/index';

class NuevoService {
  /**
   * Descripción del método
   * @param param - Descripción del parámetro
   * @returns Descripción del retorno
   */
  getData(param: string): TipoRequerido[] {
    return [
      // Datos aquí
    ];
  }

  /**
   * Otro método
   */
  getById(id: string): TipoRequerido | undefined {
    // Lógica aquí
  }
}

// Exportar instancia singleton
export const nuevoService = new NuevoService();
```

### Usar el Servicio en un Componente

```astro
---
import { nuevoService } from '../services/nuevoService';

const data = nuevoService.getData('param');
---

<div>
  {data.map(item => (
    <div>{item.name}</div>
  ))}
</div>
```

---

## 🎨 Modificar Estilos

### Usar Variables CSS

**Siempre usar variables CSS** en lugar de valores hardcodeados:

```css
/* ✅ Correcto */
.component {
  color: var(--color-primary);
  padding: var(--spacing-md);
  font-size: var(--font-size-lg);
}

/* ❌ Incorrecto */
.component {
  color: #4a9eff;
  padding: 16px;
  font-size: 18px;
}
```

### Agregar Nuevas Variables

En `src/styles/global.css`:

```css
:root {
  /* Nueva variable */
  --color-nuevo: #ff0000;
  --spacing-custom: 3rem;
}
```

### Estilos Scoped en Componentes

Cada componente tiene sus propios estilos:

```astro
<style>
  /* Estos estilos solo afectan a este componente */
  .component {
    /* Estilos aquí */
  }
</style>
```

### Responsive Design

```css
/* Mobile First */
.component {
  padding: var(--spacing-sm);
}

@media (min-width: 768px) {
  .component {
    padding: var(--spacing-md);
  }
}

@media (min-width: 1024px) {
  .component {
    padding: var(--spacing-lg);
  }
}
```

---

## 🔌 Integración con APIs

### Ejemplo: GitHub API

Ya implementado en `src/services/githubService.ts`:

```typescript
const projects = await githubService.getUserRepos('username');
```

### Agregar Nueva API

1. Crear servicio en `src/services/`:

```typescript
class NuevaAPIService {
  private readonly baseUrl = 'https://api.ejemplo.com';

  async getData(): Promise<Data[]> {
    const response = await fetch(`${this.baseUrl}/endpoint`);
    return response.json();
  }
}

export const nuevaAPIService = new NuevaAPIService();
```

2. Usar en componente:

```astro
---
const data = await nuevaAPIService.getData();
---

<div>
  {data.map(item => (
    <div>{item.name}</div>
  ))}
</div>
```

---

## 🧪 Testing

### Testing Manual

1. **Desarrollo Local**
   ```bash
   npm run dev
   ```
   Probar en `http://localhost:4321`

2. **Build de Producción**
   ```bash
   npm run build
   npm run preview
   ```
   Probar build antes de deploy

### Checklist de Testing

- [ ] Funciona en Chrome
- [ ] Funciona en Firefox
- [ ] Funciona en Safari
- [ ] Responsive en mobile (< 480px)
- [ ] Responsive en tablet (481px - 1023px)
- [ ] Responsive en desktop (≥ 1024px)
- [ ] Formularios validan correctamente
- [ ] Links funcionan
- [ ] Imágenes cargan
- [ ] No hay errores en consola

---

## 🐛 Debugging

### Herramientas de Desarrollo

1. **Astro Dev Tools**
   - Extensión de navegador
   - Inspeccionar componentes
   - Ver props y estado

2. **Chrome DevTools**
   - Console para errores JavaScript
   - Network para requests
   - Elements para inspeccionar HTML/CSS

3. **VS Code Debugger**
   - Breakpoints en TypeScript
   - Debug de servicios

### Errores Comunes

#### Error: Componente no encontrado

```bash
# Verificar import path
import Component from '../components/Component.astro';
```

#### Error: Variable CSS no encontrada

```bash
# Verificar que la variable existe en global.css
# Verificar que se usa :root
```

#### Error: TypeScript type error

```bash
# Verificar tipos en src/types/index.ts
# Verificar que se importan correctamente
```

---

## 🔍 Troubleshooting

### Problema: Cambios no se reflejan

**Solución:**
```bash
# Limpiar cache y rebuild
rm -rf dist .astro node_modules
npm install
npm run dev
```

### Problema: Estilos no se aplican

**Solución:**
1. Verificar que los estilos están en `<style>` del componente
2. Verificar que las variables CSS existen
3. Verificar que no hay conflictos de especificidad

### Problema: Build falla

**Solución:**
```bash
# Verificar errores en consola
npm run build

# Verificar tipos TypeScript
npm run astro check
```

### Problema: Imágenes no cargan

**Solución:**
1. Verificar que las imágenes están en `public/`
2. Usar rutas absolutas: `/images/imagen.png`
3. Verificar que el archivo existe

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [Astro Documentation](https://docs.astro.build)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

### Herramientas Útiles

- **Astro Playground**: Probar código online
- **Can I Use**: Compatibilidad de CSS/JS
- **CSS Validator**: Validar CSS

---

## 💡 Tips y Mejores Prácticas

1. **Siempre usar TypeScript** para type safety
2. **Comentar código complejo** para el equipo
3. **Usar variables CSS** para mantener consistencia
4. **Mobile First** en todos los diseños
5. **Performance**: Optimizar imágenes y assets
6. **Accesibilidad**: Usar semantic HTML y ARIA cuando sea necesario
7. **SEO**: Mantener estructura semántica y meta tags

---

**Última actualización**: Enero 2025

### Cambios Recientes

- ✅ Integración de Instagram en Footer (sección única, sin duplicados)
- ✅ Corrección de errores de build (variable `index` en Process, Plans y Team)
- ✅ Optimización de componentes (eliminación de parallax, reducción de espaciados)
- ✅ Mejoras en tipografía y responsive design
- ✅ Corrección de sección duplicada de Instagram en Footer
- ✅ Build sin errores y optimizado

