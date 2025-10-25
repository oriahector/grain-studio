# Code Quality & Formatting

Este proyecto utiliza **ESLint** para análisis estático del código y **Prettier** para formateo automático.

## 🔍 ESLint - Análisis de Código

ESLint detecta problemas de código, errores potenciales y malas prácticas.

### Ejecutar ESLint

```bash
# Analizar todo el código
npm run lint

# Analizar solo la carpeta src
npm run lint -- src/
```

### Configuración

- **Archivo**: `eslint.config.js`
- **Archivos ignorados**: `dist/`, `node_modules/`, `.git/`
- **Reglas principales**:
  - ESLint recomendado
  - TypeScript ESLint recomendado (con type-checking)
  - No permitir `console.log` (solo `warn` y `error`)

## 🎨 Prettier - Formateo de Código

Prettier formatea automáticamente el código para mantener un estilo consistente.

### Ejecutar Prettier

```bash
# Formatear todos los archivos
npm run format

# Solo verificar si hay archivos sin formatear
npm run format -- --check src/
```

### Configuración

Archivo: `.prettierrc.json`

```json
{
  "semi": true, // Punto y coma al final de líneas
  "trailingComma": "es5", // Comas finales en objetos/arrays
  "singleQuote": true, // Comillas simples
  "printWidth": 80, // Ancho máximo de línea
  "tabWidth": 2, // 2 espacios de indentación
  "useTabs": false, // Usar espacios, no tabs
  "arrowParens": "always", // Paréntesis en arrow functions
  "bracketSpacing": true, // Espacios en objetos
  "jsxSingleQuote": false // Comillas dobles en JSX
}
```

### Archivos ignorados

Archivo: `.prettierignore`

Los siguientes archivos/carpetas NO se formatean:

- `dist/` - Build output
- `node_modules/` - Dependencias
- Archivos multimedia: `*.mp4`, `*.mov`, `*.gif`, `*.jpg`, `*.png`, `*.svg`
- Lock files: `pnpm-lock.yaml`, `package-lock.json`

## 🔧 Integración: ESLint + Prettier

La configuración incluye `eslint-config-prettier` que desactiva las reglas de ESLint que entran en conflicto con Prettier.

**Flujo recomendado**:

1. ESLint te avisa de problemas de código
2. Prettier formatea automáticamente
3. Sin conflictos entre ambas herramientas ✅

## 💡 Workflow Recomendado

### Antes de commitear:

```bash
# 1. Formatear el código
npm run format

# 2. Verificar que no hay errores de linting
npm run lint

# 3. Si hay errores, revisar y corregirlos manualmente
```

### O todo en uno:

```bash
npm run format && npm run lint
```

## ⚙️ Dependencias

- `eslint@^9.11.1` - Linter principal
- `@eslint/js@^9.11.1` - Configuración recomendada de ESLint
- `typescript-eslint@^8.8.1` - Soporte para TypeScript
- `prettier@^3.3.3` - Formateador de código
- `eslint-config-prettier@^9.x.x` - Integración ESLint + Prettier
