# 🌸 CLAUDE.md — Power BI Guide Project Context

> Este fichero es leído automáticamente por Claude Code al iniciar cada sesión.
> Contiene todo el contexto del proyecto para que no tengas que repetirlo nunca.

---

## 🎯 Descripción del Proyecto

**Nombre:** Power BI Guide  
**Tipo:** Web estática educativa  
**Canal asociado:** Kawaii Power BI  
**Audiencia:** Usuarias y usuarios de Power BI desde nivel principiante hasta avanzado  
**Objetivo:** Crear una guía de referencia completa sobre Power BI y Microsoft Fabric, técnica pero cercana, rigurosa pero amigable, con personalidad kawaii y enfoque en adopción digital.

---

## 🛠️ Stack Tecnológico

| Tecnología      | Uso                                                    |
|-----------------|--------------------------------------------------------|
| HTML5 semántico | Estructura de todas las páginas                        |
| CSS3            | Estilos con variables CSS para theming y paleta        |
| JavaScript vanilla | Lógica de UI, traducción, búsqueda y tema          |
| Prism.js (CDN)  | Syntax highlighting para bloques de código DAX y M     |
| i18next (CDN)   | Sistema de traducción ES/EN                            |

> ❌ Sin frameworks de backend. ❌ Sin React, Vue ni similares. ✅ Desplegable en GitHub Pages o Netlify sin configuración de servidor.

---

## 🌍 Idiomas

- 🇪🇸 **Español de España** — idioma principal y por defecto  
- 🇬🇧 **English** — idioma secundario, accesible desde el header

**Implementación:**
- Toggle o selector `ES | EN` visible en el header
- Cambio de idioma sin recarga de página (i18next)
- Preferencia guardada en `localStorage`
- Textos gestionados en archivos JSON:

```
/locales/
├── es.json   ← Español de España (por defecto)
└── en.json   ← English
```

> ⚠️ NUNCA hardcodear textos en el HTML. Siempre usar claves i18n referenciadas desde los JSON.

---

## 🎨 Paleta de Colores

### Colores de marca Kawaii Power BI
```css
--color-blush:   #FAEEEE;  /* Fondo general suave, backgrounds */
--color-coral:   #E74E37;  /* Acento principal, CTAs, links activos */
--color-rose:    #F3E5E5;  /* Cards, paneles, secciones */
--color-mauve:   #D9CBCB;  /* Bordes, separadores, elementos neutros */
--color-slate:   #929C9C;  /* Texto secundario, subtítulos, iconos */
```

### Colores complementarios
```css
--color-dark:    #2C2C2C;  /* Texto principal, headings */
--color-white:   #FFFFFF;  /* Contraste en cards y bloques */
--color-peach:   #F9A58B;  /* Hover states, highlights suaves */
--color-success: #5BAD92;  /* Nivel principiante, tips positivos */
--color-warning: #F2B84B;  /* Nivel intermedio, notas de atención */
--color-code-bg: #2E2E3A;  /* Fondo bloques de código */
```

### Temas
- ☀️ **Tema claro** — por defecto
- 🌙 **Tema oscuro** — toggle en el header, colores de marca adaptados
- Preferencia guardada en `localStorage`

---

## 🔤 Tipografía

```
"Plus Jakarta Sans" → Texto general y headings (moderna, redondeada, kawaii-profesional)
"Fira Code"         → Bloques de código DAX y M
```

Ambas se cargan desde Google Fonts.

---

## 🗂️ Arquitectura de Archivos

```
/power-bi-guide/
├── CLAUDE.md                        ← Este fichero (contexto para Claude Code)
├── index.html                       ← Landing page
├── /assets/
│   ├── /css/
│   │   ├── main.css                 ← Variables globales y estilos base
│   │   ├── themes.css               ← Tema claro y oscuro
│   │   ├── components.css           ← Cards, badges, bloques de código, notas
│   │   └── layout.css               ← Header, sidebar, grid, footer
│   ├── /js/
│   │   ├── main.js                  ← Inicialización general
│   │   ├── theme.js                 ← Toggle claro/oscuro
│   │   ├── i18n.js                  ← Sistema de traducción
│   │   └── search.js                ← Buscador local
│   └── /images/
│       └── logo.svg
├── /locales/
│   ├── es.json                      ← Textos en español de España
│   └── en.json                      ← Textos en inglés
├── /topics/
│   ├── dax.html                     ← Funciones DAX
│   ├── lenguaje-m.html              ← Lenguaje M para Power Query
│   ├── conceptos-powerbi.html       ← Conceptos de Power BI
│   ├── fabric.html                  ← Microsoft Fabric
│   ├── tmdl.html                    ← TMDL
│   ├── mejores-practicas.html       ← Mejores prácticas
│   ├── modelado.html                ← Modelado y fundamentos
│   ├── power-query.html             ← Conceptos de Power Query
│   ├── diseno-ux.html               ← Diseño y UX para dashboards
│   └── gobernanza.html              ← Gobernanza y seguridad
└── /components/
    ├── header.html                  ← Header reutilizable
    ├── sidebar.html                 ← Sidebar con navegación
    └── footer.html                  ← Footer reutilizable
```

---

## 📚 Topics de Contenido

| # | Topic | Archivo | Descripción |
|---|-------|---------|-------------|
| 1 | Funciones DAX | `dax.html` | Referencia DAX: categorías, sintaxis, ejemplos, patrones avanzados |
| 2 | Lenguaje M | `lenguaje-m.html` | Fundamentos y avanzado de M: transformaciones, funciones custom |
| 3 | Conceptos Power BI | `conceptos-powerbi.html` | Ecosistema Power BI: Desktop, Service, Mobile, licencias, arquitectura |
| 4 | Microsoft Fabric | `fabric.html` | Lakehouses, Warehouses, Dataflows Gen2, Eventhouse, capacidades |
| 5 | TMDL | `tmdl.html` | Qué es, estructura, uso, diferencias con TMSL, control de versiones |
| 6 | Mejores Prácticas | `mejores-practicas.html` | Nomenclatura, rendimiento, documentación, mantenimiento |
| 7 | Modelado | `modelado.html` | Modelo estrella, dimensiones, hechos, relaciones, cardinalidad |
| 8 | Power Query | `power-query.html` | Editor PQ, pasos aplicados, folding, optimización de consultas |
| 9 | Diseño y UX | `diseno-ux.html` | Accesibilidad, color, layout, storytelling con datos |
| 10 | Gobernanza | `gobernanza.html` | RLS, OLS, workspaces, roles, linaje, certificación de contenido |

---

## 🏷️ Sistema de Niveles

Cada sección de contenido debe indicar visualmente su nivel:

| Badge | Nivel | Color |
|-------|-------|-------|
| 🟢 Principiante | Conceptos básicos, primeros pasos | `--color-success` (#5BAD92) |
| 🟡 Intermedio | Casos de uso reales, profundización | `--color-warning` (#F2B84B) |
| 🔴 Avanzado | Patrones complejos, optimización | `--color-coral` (#E74E37) |

---

## 💬 Componentes de Notas

Usar siempre estos bloques para notas especiales, con clase CSS correspondiente:

```html
<!-- Tip kawaii -->
<div class="note note--tip">
  💡 <strong>Tip kawaii:</strong> texto del consejo
</div>

<!-- Advertencia -->
<div class="note note--warning">
  ⚠️ <strong>Ojo con esto:</strong> texto de la advertencia
</div>

<!-- Buena práctica -->
<div class="note note--practice">
  📌 <strong>Buena práctica:</strong> texto de la recomendación
</div>

<!-- Motivación final de sección -->
<div class="note note--next">
  🚀 <strong>¡Lo estás haciendo genial!</strong> texto motivador
</div>
```

---

## 🧩 Componentes Reutilizables

Header, sidebar y footer se cargan **dinámicamente con JavaScript** en cada página para no duplicar HTML. La función de carga está en `main.js`.

Estructura base de cualquier página HTML:

```html
<!DOCTYPE html>
<html lang="es" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[Título de la página] — Power BI Guide</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
  <!-- CSS -->
  <link rel="stylesheet" href="/assets/css/main.css" />
  <link rel="stylesheet" href="/assets/css/themes.css" />
  <link rel="stylesheet" href="/assets/css/components.css" />
  <link rel="stylesheet" href="/assets/css/layout.css" />
  <!-- Prism.js -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" />
</head>
<body>
  <div id="header-container"></div>
  <div class="layout">
    <aside id="sidebar-container"></aside>
    <main id="main-content">
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs" aria-label="breadcrumb">...</nav>
      <!-- Contenido de la página -->
    </main>
  </div>
  <div id="footer-container"></div>
  <button class="back-to-top" aria-label="Volver arriba">↑</button>
  <!-- Scripts -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/i18next/23.7.6/i18next.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
  <script src="/assets/js/main.js"></script>
  <script src="/assets/js/theme.js"></script>
  <script src="/assets/js/i18n.js"></script>
</body>
</html>
```

---

## ✅ Convenciones para Claude Code

1. **Indica siempre el path completo** del archivo que estás creando o modificando
2. **Comenta el código** en secciones relevantes (CSS, JS especialmente)
3. **Accesibilidad primero**: atributos ARIA, contraste correcto, navegación por teclado
4. **Ejemplos DAX y M**: reales, funcionales, explicados línea por línea
5. **Nunca hardcodear textos** en HTML — siempre claves i18n desde los JSON
6. **Componentes dinámicos**: header, sidebar y footer se inyectan via JS
7. **Consistencia visual**: nuevas páginas siguen siempre la estructura base definida aquí
8. **Antes de crear un fichero nuevo**, comprueba si hay uno existente que deba modificarse
9. **Si un archivo supera 300 líneas**, divídelo en módulos bien nombrados
10. **Al final de cada respuesta**, incluye una sección `📌 Pasos de implementación` si hay acciones adicionales

---

## 🗣️ Tono y Voz del Contenido

El tono del contenido educativo sigue el estilo del canal **Kawaii Power BI**:

- ✅ Cercano y cálido — como una amiga experta explicándote, nunca frío ni corporativo
- ✅ Kawaii con criterio — toques visuales y de lenguaje que hacen el aprendizaje ameno sin perder rigor
- ✅ Enfocado en adopción digital — mensajes que empoderan a quien lee
- ✅ Didáctico — de lo simple a lo complejo, con ejemplos reales

**Ejemplos de tono:**
- ❌ "Error en la fórmula" → ✅ "¡Ups! Algo no cuadra aquí 🧐 Revisa esto:"
- ❌ "Introducción" → ✅ "¿Por dónde empezamos? 🌸"
- ❌ "Advertencia" → ✅ "⚠️ Ojo con esto"
- ❌ "Sección completada" → ✅ "¡Lo estás haciendo genial! Sigue al siguiente nivel 🚀"

---

## 🚀 Objetivo Final

Una web estática **bilingüe (ES/EN)**, visualmente coherente con la marca Kawaii Power BI, técnicamente correcta y desplegable en GitHub Pages o Netlify. Un recurso de referencia que cualquier persona que quiera aprender Power BI pueda usar con confianza y disfrutar mientras aprende. 🌸
