# 📐 Guía de Márgenes Estándar - Grain Studio

## ✅ Sistema de Márgenes Implementado

Todas las secciones ahora tienen **márgenes horizontales estandarizados** usando la clase `.section-container`.

### 🎯 Qué es `.section-container`?

```css
.section-container {
  @apply mx-auto max-w-7xl px-4 md:px-6 lg:px-8;
}
```

**Traducción:**

- `mx-auto` - Centrado horizontalmente
- `max-w-7xl` - Ancho máximo: 80rem (1280px)
- `px-4` - Padding lateral en mobile: 1rem (16px)
- `md:px-6` - Padding lateral en tablet: 1.5rem (24px)
- `lg:px-8` - Padding lateral en desktop: 2rem (32px)

### 📊 Breakpoints

| Dispositivo      | Padding | Total Width\* |
| ---------------- | ------- | ------------- |
| Mobile (< 768px) | 1rem    | 100% - 2rem   |
| Tablet (768px)   | 1.5rem  | 1280px - 3rem |
| Desktop (1024px) | 2rem    | 1280px - 4rem |

\*Con padding incluido

---

## 🏗️ Dónde se Aplicó

### ✅ Con `section-container`

```
Hero.tsx
├── Hero Title Section ✅
└── Hero Video Section ✅

Works.tsx ✅
Services.tsx ✅
Contact.tsx ✅
Footer.tsx ✅
NavBar.tsx ✅
```

### ❌ SIN `section-container` (Full Width)

```
Clients.tsx
├── Marquee (full width)
└── Tooltip (posicionado absolutamente)
```

---

## 📝 Ejemplos de Implementación

### Antes (Inconsistente)

```typescript
// Hero
className = 'px-6 py-20 md:px-0';

// Services
className = 'md:container-px mx-auto';

// Contact
className = 'container-px py-32';

// Footer
className = 'container-px py-3';
```

### Después (Estándar)

```typescript
// Todas las secciones
<section className="section ...">
  <div className="section-container">
    {/* Contenido */}
  </div>
</section>
```

---

## 🎨 Cómo se Ve

```
┌─────────────────────────────────────────┐
│  Navbar (full width con section-container) │
├─────────────────────────────────────────┤
│                                         │
│  Padding Padding                        │
│  ┌───────────────────────────────────┐ │
│  │                                   │ │
│  │  HERO CONTENT (max-w-7xl)        │ │
│  │                                   │ │
│  └───────────────────────────────────┘ │
│                                         │
│  Padding Padding                        │
├─────────────────────────────────────────┤
│           CLIENTS (full-width)          │  ← Sin padding
├─────────────────────────────────────────┤
│  Padding Padding                        │
│  ┌───────────────────────────────────┐ │
│  │  WORKS/SERVICES/CONTACT CONTENT   │ │
│  └───────────────────────────────────┘ │
│                                         │
│  Padding Padding                        │
├─────────────────────────────────────────┤
│  Padding Padding                        │
│  ┌───────────────────────────────────┐ │
│  │  FOOTER CONTENT (section-container)│ │
│  └───────────────────────────────────┘ │
│                                         │
│  Padding Padding                        │
└─────────────────────────────────────────┘
```

---

## 🔄 Características del Sistema

### ✅ Responsive

- **Mobile:** Máximo padding para usar espacio eficientemente
- **Tablet:** Padding medio
- **Desktop:** Más padding, ancho limitado a 1280px

### ✅ Flexible

- Fácil de cambiar `max-w-7xl` a otro tamaño
- Fácil de ajustar el padding
- Usa Tailwind utilities

### ✅ Consistente

- Todas las secciones tienen el mismo margen
- Excepto Clients que necesita full-width
- Fácil de mantener y actualizar

### ✅ Accesible

- Mejor legibilidad con ancho máximo
- Menos saltos de línea en desktop
- Mejor experiencia en móvil

---

## 📐 Cálculos de Ancho

### Desktop (1280px+)

```
Total width: 1280px (max-w-7xl)
- Left padding: 32px (lg:px-8)
- Right padding: 32px (lg:px-8)
= Content width: 1216px
```

### Tablet (768px - 1280px)

```
Total width: 100% del viewport
- Left padding: 24px (md:px-6)
- Right padding: 24px (md:px-6)
= Content width: 100% - 48px
```

### Mobile (< 768px)

```
Total width: 100% del viewport
- Left padding: 16px (px-4)
- Right padding: 16px (px-4)
= Content width: 100% - 32px
```

---

## 🎯 Cómo Usar en Nuevas Secciones

```typescript
// Paso 1: Crear sección
<section id="mi-seccion" className="section bg-white py-20">

  // Paso 2: Agregar section-container
  <div className="section-container">

    {/* Contenido aquí */}
    <h2>Mi Contenido</h2>

  </div>
</section>

// ✅ Automáticamente:
// - Centrado
// - Márgenes estandarizados
// - Responsive
// - Consistente con el resto
```

---

## ⚙️ Personalización

### Cambiar el ancho máximo

En `main.css`:

```css
.section-container {
  @apply mx-auto max-w-6xl px-4 md:px-6 lg:px-8;
  /* max-w-7xl → max-w-6xl */
}
```

### Cambiar padding

```css
.section-container {
  @apply mx-auto max-w-7xl px-2 md:px-4 lg:px-6;
  /* Más compacto */
}
```

### Crear variantes

```css
.section-container-wide {
  @apply mx-auto max-w-full px-4 md:px-6 lg:px-8;
}

.section-container-compact {
  @apply mx-auto max-w-6xl px-2 md:px-4 lg:px-6;
}
```

---

## 📊 Comparativa

### Antes (Inconsistente)

| Sección  | Padding | Ancho |
| -------- | ------- | ----- |
| Hero     | Varía   | Varía |
| Works    | Varía   | Varía |
| Services | Varía   | Varía |
| Clients  | Full    | Full  |
| Contact  | Varía   | Varía |
| Footer   | Varía   | Varía |

### Después (Estándar)

| Sección  | Padding  | Ancho     |
| -------- | -------- | --------- |
| Hero     | Estándar | max-w-7xl |
| Works    | Estándar | max-w-7xl |
| Services | Estándar | max-w-7xl |
| Clients  | Full     | Full ✅   |
| Contact  | Estándar | max-w-7xl |
| Footer   | Estándar | max-w-7xl |

---

## ✨ Beneficios

- ✅ **Consistencia** - Todas las secciones iguales
- ✅ **Profesionalismo** - Espaciado estándar de la industria
- ✅ **Legibilidad** - Ancho máximo para leer
- ✅ **Responsive** - Funciona en todos los dispositivos
- ✅ **Mantenibilidad** - Fácil de actualizar
- ✅ **Flexibilidad** - Clients puede ser full-width
- ✅ **Performance** - Sin cambios en el rendimiento

---

## 🚀 Próximos Pasos

Si necesitas:

1. Variar el ancho máximo por sección
2. Crear secciones con full-width
3. Ajustar el padding responsivo
4. Crear nuevas variantes

Solo necesitas modificar `main.css` y reutilizar la clase.
