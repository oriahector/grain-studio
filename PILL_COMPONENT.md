# 🏷️ Componente Pill - Etiquetas Reutilizables

## ✅ ¿Qué es?

`Pill.tsx` es un componente reutilizable para mostrar **etiquetas/tags** con soporte para múltiples variantes de color y tamaño.

---

## 📦 Ubicación

```
src/components/ui/Pill.tsx
```

---

## 🎯 Propiedades

```typescript
interface PillProps {
  label?: string | null; // Texto a mostrar
  variant?: 'light' | 'dark'; // Esquema de colores (default: 'light')
  size?: 'sm' | 'md'; // Tamaño (default: 'sm')
  className?: string; // Clases adicionales
}
```

---

## 🎨 Variantes de Color

### **Light** (Valor por defecto)

- Borde blanco (`border-white`)
- Texto blanco (`text-white`)
- Fondo transparente

**Uso:** Tarjetas en galería Works, fondos oscuros

```typescript
<Pill label="Web Development" variant="light" />
```

**Resultado:**

```
┌─────────────────┐
│ WEB DEVELOPMENT │  ← border-white, text-white
└─────────────────┘
```

### **Dark**

- Borde azul klein (`border-klein`)
- Texto azul klein (`text-klein`)
- Fondo transparente

**Uso:** Modal de Works, fondos claros

```typescript
<Pill label="Web Development" variant="dark" />
```

**Resultado:**

```
┌─────────────────┐
│ WEB DEVELOPMENT │  ← border-klein, text-klein
└─────────────────┘
```

---

## 📏 Tamaños

### **Small** (Valor por defecto)

- Padding: `px-2 py-0.5`
- Font size: `text-xs`
- Compacto

```typescript
<Pill label="Tag" size="sm" />
```

### **Medium**

- Padding: `px-3 py-1`
- Font size: `text-sm`
- Más espacioso

```typescript
<Pill label="Tag" size="md" />
```

---

## 💡 Ejemplos de Uso

### Básico

```typescript
<Pill label="Photography" />
```

### Con variante oscura

```typescript
<Pill label="UGC Content" variant="dark" />
```

### Con tamaño medio

```typescript
<Pill label="Design" size="md" />
```

### Con clases personalizadas

```typescript
<Pill
  label="Featured"
  variant="light"
  className="mt-2"
/>
```

### Condicional (puede ser null)

```typescript
<Pill label={item.tag} variant="light" />
{/* Si item.tag es undefined, devuelve null */}
```

---

## 🔗 Dónde se Usa

### 1. **Works Gallery** (Tarjetas)

```typescript
// src/sections/Works.tsx (línea ~109)
<Pill label={item.tag} variant="light" size="sm" />
```

**Salida:**

- Etiqueta blanca en fondo oscuro
- Tarjetas de trabajos

### 2. **Works Modal**

```typescript
// src/sections/Works.tsx (línea ~131)
<Pill label={selected?.tag} variant="dark" size="sm" />
```

**Salida:**

- Etiqueta azul Klein en fondo blanco
- Panel de información del proyecto

---

## 🎯 Características

| Característica         | Implementado |
| ---------------------- | ------------ |
| Dos variantes de color | ✅           |
| Dos tamaños            | ✅           |
| Manejo de undefined    | ✅           |
| Flexible y extensible  | ✅           |
| Type-safe              | ✅           |
| Responsive             | ✅           |

---

## 📝 Estructura del Componente

```typescript
interface PillProps {
  label?: string | null;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
}

const VARIANT_CLASSES = {
  light: 'border-white text-white',
  dark: 'border-klein text-klein',
};

const SIZE_CLASSES = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
};

export function Pill({ label, variant, size, className }: PillProps) {
  if (!label) return null;

  return (
    <span className={clsx(
      'inline-flex w-fit items-center gap-1 rounded-full border bg-transparent font-semibold uppercase tracking-wider',
      VARIANT_CLASSES[variant],
      SIZE_CLASSES[size],
      className
    )}>
      {label}
    </span>
  );
}
```

---

## 🔧 Cómo Extender

### Agregar una nueva variante

```typescript
const VARIANT_CLASSES = {
  light: 'border-white text-white',
  dark: 'border-klein text-klein',
  accent: 'border-green-500 text-green-500', // ← Nueva
};
```

Luego usar:

```typescript
<Pill label="Success" variant="accent" />
```

### Agregar un nuevo tamaño

```typescript
const SIZE_CLASSES = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-2', // ← Nueva
};
```

Luego usar:

```typescript
<Pill label="Large Tag" size="lg" />
```

---

## ✨ Ventajas

- ✅ **Reutilizable** - Se puede usar en múltiples lugares
- ✅ **Consistente** - Mismo estilo en toda la app
- ✅ **Flexible** - Soporta variantes y tamaños
- ✅ **Type-safe** - TypeScript con tipos estrictos
- ✅ **Accesible** - Bien estructurado semánticamente
- ✅ **Mantenible** - Cambios centralizados

---

## 📊 Antes vs Después

### Antes (Sin componente)

```typescript
// En Works.tsx (línea ~109)
<span className="inline-flex items-center gap-1 rounded-full border border-white bg-transparent px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white md:text-xs">
  {item.tag}
</span>

// En Modal (línea ~132)
<span className="inline-flex w-fit items-center gap-1 rounded-full border border-klein bg-transparent px-2 py-0.5 text-xs uppercase tracking-wider text-klein">
  {selected?.tag}
</span>

// Código duplicado, difícil de mantener ❌
```

### Después (Con componente)

```typescript
// En Works.tsx
<Pill label={item.tag} variant="light" size="sm" />

// En Modal
<Pill label={selected?.tag} variant="dark" size="sm" />

// Código limpio, reutilizable ✅
```

---

## 🚀 Casos de Uso Futuros

Puedes usar `Pill` en:

- Filtros de categorías
- Badges de estado
- Tags de skills
- Etiquetas de prioridad
- Indicadores de estado
- Chips de selección
