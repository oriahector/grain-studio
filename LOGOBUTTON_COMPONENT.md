# 🔘 Componente LogoButton - Botón del Logo

## ✅ ¿Qué es?

`LogoButton.tsx` es un componente reutilizable que muestra el **logo de Grain Studio** con texto, funcional como botón clickeable.

---

## 📦 Ubicación

```
src/components/ui/LogoButton.tsx
```

---

## 🎯 Propiedades

```typescript
interface LogoButtonProps {
  onClick?: () => void;      // Función click (opcional)
  size?: 'sm' | 'md' | 'lg'; // Tamaño (default: 'md')
  className?: string;        // Clases adicionales
}
```

---

## 📏 Tamaños

### **Small**
- Texto: `text-base md:text-lg`
- Compacto, ideal para sidebars o espacios reducidos

```typescript
<LogoButton size="sm" onClick={handleClick} />
```

### **Medium** (Default)
- Texto: `text-lg md:text-2xl`
- Tamaño estándar, ideal para navbar

```typescript
<LogoButton onClick={handleClick} />
// o
<LogoButton size="md" onClick={handleClick} />
```

### **Large**
- Texto: `text-2xl md:text-3xl`
- Grande, ideal para hero sections

```typescript
<LogoButton size="lg" onClick={handleClick} />
```

---

## 💡 Ejemplos de Uso

### Básico
```typescript
<LogoButton onClick={handleLogoClick} />
```

### Con tamaño pequeño
```typescript
<LogoButton size="sm" onClick={handleLogoClick} />
```

### Con tamaño grande
```typescript
<LogoButton size="lg" onClick={handleLogoClick} />
```

### Con clases personalizadas
```typescript
<LogoButton 
  onClick={handleLogoClick}
  className="mb-4"
/>
```

### Sin onClick (solo visual)
```typescript
<LogoButton />
```

---

## 🔗 Dónde se Usa

### **NavBar** (Ubicación actual)
```typescript
// src/components/ui/NavBar.tsx (línea ~52)
<LogoButton onClick={handleLogoClick} size="md" />
```

**Función:**
- Botón clickeable del logo
- Navega al top de la página
- Tamaño responsive

---

## 🎨 Estructura Visual

```
┌────────────────────────────┐
│  [Icon] Grain [Icon] Studio│
│                            │
│  Texto responsive + hover  │
└────────────────────────────┘
```

**Componentes:**
- ✅ Logo SVG (grain.svg)
- ✅ Texto "Grain"
- ✅ Icono del logo
- ✅ Texto "Studio"
- ✅ Hover state (opacity-80)

---

## 🎯 Características

| Característica | Implementado |
|----------------|------------|
| Tres tamaños | ✅ |
| Responsive | ✅ |
| Hover states | ✅ |
| Accesible | ✅ |
| Type-safe | ✅ |
| Extensible | ✅ |

---

## 📝 Estructura del Componente

```typescript
interface LogoButtonProps {
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZE_CLASSES = {
  sm: 'text-base md:text-lg',
  md: 'text-lg md:text-2xl',
  lg: 'text-2xl md:text-3xl',
};

export function LogoButton({
  onClick,
  size = 'md',
  className,
}: LogoButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'flex cursor-pointer items-center gap-2 uppercase tracking-wide transition-opacity hover:opacity-80 focus:outline-none',
        SIZE_CLASSES[size],
        className
      )}
      aria-label="Grain Studio - Go to top"
    >
      <span>Grain</span>
      <img src="images/grain.svg" alt="Grain Studio logo" className="h-2 w-2 object-contain" />
      <span>Studio</span>
    </button>
  );
}
```

---

## ✨ Ventajas

- ✅ **Reutilizable** - Se puede usar en múltiples lugares
- ✅ **Responsive** - Tamaño adaptable según dispositivo
- ✅ **Accesible** - aria-label descriptivo
- ✅ **Flexible** - Soporta múltiples tamaños
- ✅ **Consistente** - Mismo estilo en toda la app
- ✅ **Mantenible** - Cambios centralizados

---

## 📊 Antes vs Después

### Antes (HTML inline)
```typescript
// En NavBar.tsx
<button
  type="button"
  onClick={handleLogoClick}
  className="flex cursor-pointer items-center gap-2 text-lg uppercase tracking-wide transition-opacity hover:opacity-80 md:text-2xl focus:outline-none"
  aria-label="Grain Studio - Go to top"
>
  <span>Grain</span>
  <img
    src="images/grain.svg"
    alt="Grain Studio logo"
    className="h-2 w-2 object-contain"
  />
  <span>Studio</span>
</button>

// Código largo y difícil de mantener ❌
```

### Después (Componente reutilizable)
```typescript
// En NavBar.tsx
<LogoButton onClick={handleLogoClick} size="md" />

// Código limpio y reutilizable ✅
```

---

## 🔧 Cómo Extender

### Agregar un nuevo tamaño
```typescript
const SIZE_CLASSES = {
  sm: 'text-base md:text-lg',
  md: 'text-lg md:text-2xl',
  lg: 'text-2xl md:text-3xl',
  xl: 'text-3xl md:text-4xl',  // ← Nueva
};
```

Luego usar:
```typescript
<LogoButton size="xl" onClick={handleClick} />
```

### Cambiar el logo
```typescript
<img 
  src="images/grain.svg"    // ← Cambiar esta ruta
  alt="Grain Studio logo" 
  className="h-2 w-2 object-contain" 
/>
```

### Agregar variantes de color
```typescript
interface LogoButtonProps {
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';  // ← Nueva
  className?: string;
}

const VARIANT_CLASSES = {
  light: 'text-white hover:text-gray-200',
  dark: 'text-gray-900 hover:text-gray-700',
};
```

---

## 🚀 Casos de Uso Futuros

Puedes usar `LogoButton` en:
- Navbar principal (actual)
- Sidebar
- Footer
- Modal headers
- Secciones hero
- Menús desplegables
- Cualquier lugar que necesite el logo clickeable

---

## ✅ Build Results

```bash
✓ ESLint: 0 errores
✓ TypeScript: 0 errores
✓ Build: Exitoso (597ms)
✓ 439 módulos transformados
```

---

## 📚 Componentes Relacionados

- **Button.tsx** - Botones genéricos
- **Pill.tsx** - Etiquetas/tags
- **NavBar.tsx** - Usa LogoButton (actual)

---

## 💡 Tip

El componente es **completamente flexible**:
- Funciona con o sin `onClick`
- Soporta múltiples tamaños
- Fácil de personalizarlo
- Tipo-seguro con TypeScript

¡Usa `<LogoButton />` en cualquier lugar que necesites! 🚀

