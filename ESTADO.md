# 📍 ESTADO DEL PROYECTO — Power BI Guide

## ⚡ Info rápida
- **Ruta:** C:\workspace\powerbiguide
- **Stack:** HTML5 + CSS3 + JS Vanilla + Prism.js + i18next CDN
- **Última actualización:** 2026-05-24 (🔒 **Sección Gobernanza completada** — hub `topics/gobernanza.html` + 12 sub-páginas en `topics/gobernanza/`: fundamentos, rls, ols, workspaces, sensitivity-labels, certificacion, linaje, auditoria, deployment-pipelines, dlp, tenant-capacidades, coe-adopcion)

---

## ✅ Completado

**Fase 1 — Estructura base del proyecto** ✨
- ✅ Estructura de carpetas completa:
  - `assets/css/`
  - `assets/js/`
  - `assets/images/`
  - `locales/`
  - `topics/`
  - `components/`
- ✅ `index.html` — Página principal con estructura completa, meta tags, fonts, CDN scripts
- ✅ `assets/css/main.css` — Variables CSS, reset, tipografía, hero, topics grid, utilidades
- ✅ `assets/css/themes.css` — Sistema de temas claro/oscuro con variables y transiciones
- ✅ `assets/css/components.css` — Topic cards, badges de nivel, bloques de código, notas, breadcrumbs, hamburger
- ✅ `assets/css/layout.css` — Header fijo, sidebar, main content, footer, responsive design
- ✅ `assets/js/theme.js` — Gestión de tema con localStorage y detección de sistema
- ✅ `assets/js/main.js` — Carga de componentes, hamburger, copy buttons, back-to-top, generación de 10 topics cards
- ✅ `ESTADO.md` — Documento de seguimiento del proyecto
- ✅ `topics/dax.html` — Hub central DAX con 16 categorías enlazadas
- ✅ `topics/dax/` — Carpeta creada para sub-páginas de categorías DAX

**Capa visual y experiencia de usuario** 🌸✨
- ✅ `assets/js/cursor.js` — Efecto kawaii de cursor con partículas animadas (flores 🌸, estrellas ✨, corazones 💕) que siguen al ratón, explosión de partículas al hacer clic, throttling con requestAnimationFrame para optimización
- ✅ Sidebar izquierdo fijo (.site-sidebar) — 220px de ancho, con logo Kawaii BI, avatar circular de Sara, navegación principal (Inicio, DAX, Power Query M, Microsoft Fabric, Visualizaciones), enlaces sociales (LinkedIn, GitHub, Twitter) y footer con copyright
- ✅ Estilos CSS completos del sidebar — layout.css actualizado con .site-sidebar y todos sus elementos BEM, diseño responsive (oculto en móviles), hover effects, border-left activo en links
- ✅ Main content con margin-left ajustado — 220px para compensar el sidebar fijo
- ✅ Background logo en hero — pseudo-elemento ::before con logo Kawaii BI con opacidad 0.04-0.05, centrado, sin interacción
- ✅ Título con "by Kawaii BI" — span .title-by con font-size reducido y color slate
- ✅ cursor.js integrado en todas las páginas — index.html + 18 páginas de topics (17 DAX + 1 hub) con rutas relativas correctas
- ✅ **Correcciones de sidebar (2026-02-17)** 🔧:
  - Rutas de imágenes corregidas a nombres exactos de archivos:
    - Logo: `logo-kawaii-bi.jpg` → `Logo Kawaii.jpg`
    - Avatar: `avatar-sara.png` → `avatar Sara.png`
    - Background logo en CSS: rutas actualizadas en main.css y quien-soy.html
  - Nombre unificado: "Sara López" → "Sara Lozano Martí" en index.html y quien-soy.html
  - Iconos sociales actualizados de emojis a imágenes PNG:
    - LinkedIn: `logo linkedIN.png` (24x24px)
    - YouTube: `logo youtube.png` (24x24px)
    - GitHub: `logo github.png` (24x24px)
    - CSS actualizado en layout.css con hover effects (scale 1.1, opacity 0.8)
  - URLs sociales corregidas:
    - LinkedIn: `/in/saralopezBI` → `/in/saralozanomarti`
    - Twitter eliminado, reemplazado por YouTube: `@KawaiiBI`
    - GitHub: `kawaiibi` → `KawaiiBI` (mayúsculas)
  - Navegación expandida de 5 a 11 secciones en index.html y quien-soy.html:
    - ✅ 🏠 Inicio
    - ✅ ⚡ Funciones DAX (icono actualizado de 📊 a ⚡)
    - ✅ 🔄 Power Query (nuevo)
    - ✅ 〽️ Lenguaje M (nuevo)
    - ✅ 🗄️ Modelado (nuevo)
    - ✅ 📊 Conceptos Power BI (nuevo)
    - ✅ 🧵 Microsoft Fabric (icono actualizado de ☁️ a 🧵)
    - ✅ 📝 TMDL (nuevo)
    - ✅ 🎨 Diseño y UX (nuevo)
    - ✅ 🔒 Gobernanza (nuevo)
  - Archivos modificados: index.html, quien-soy.html, layout.css, main.css
  - **Nota**: Los archivos en topics/dax/*.html cargan el sidebar dinámicamente (`<aside id="sidebar"></aside>`), por lo que no requieren modificación directa

**Páginas institucionales** 🌸
- ✅ `quien-soy.html` — Página completa "¿Quién soy?" sobre Sara Lozano Martí
  - Hero con avatar circular (160px), nombre, 4 badges (Microsoft MVP Data Platform, Power BI & Fabric Consultant, Speaker, Kawaii BI Creator), frase destacada en coral
  - Background logo con opacidad 0.05 en pseudo-elemento ::before
  - Sección "Mi historia" con narrativa completa en primera persona (6 párrafos, tono kawaii)
  - Sección "Mis proyectos y comunidad" con grid de 6 cards:
    - 🌸 Kawaii BI — Canal de YouTube
    - 📅 Calendario de Eventos de Datos
    - 🎤 Sessionize — Most Active Speaker 2025
    - 🏅 Microsoft MVP Data Platform
    - 💼 LinkedIn
    - 🐙 GitHub — KawaiiBI
  - Cards con hover effect (translateY -4px, border coral, shadow)
  - Sección "¿Hablamos?" con texto de invitación y 2 botones (LinkedIn primario coral, YouTube outline)
  - Sidebar izquierdo integrado, header y footer dinámicos, cursor.js incluido
  - CSS personalizado en bloque `<style>` interno, responsive (grid 2→1 columnas en mobile)

**Sub-páginas DAX completadas** 🎉
- ✅ `topics/dax/visual-calcs.html` — Visual Calculations (11 funciones, novedad 2024)
- ✅ `topics/dax/window-functions.html` — WINDOW, OFFSET, INDEX, RANK, ROWNUMBER + auxiliares
- ✅ `topics/dax/grupos-calculo.html` — Calculation Groups, SELECTEDMEASURE, ISSELECTEDMEASURE
- ✅ `topics/dax/agregacion.html` — SUM, COUNT, AVERAGE, MIN, MAX y todas sus variantes (22 funciones)
- ✅ `topics/dax/filtro.html` — CALCULATE, ALL, FILTER, KEEPFILTERS, TREATAS (el tema MÁS importante de DAX)
- ✅ `topics/dax/fecha-hora.html` — DATE, DATEDIFF, EOMONTH, NETWORKDAYS, CALENDAR (24 funciones)
- ✅ `topics/dax/logicas.html` — IF, SWITCH, AND, OR, COALESCE, IFERROR + operadores de bits
- ✅ `topics/dax/matematicas.html` — DIVIDE, ABS, ROUND, SQRT, POWER, MOD, PI y 40 funciones más (47 funciones matemáticas y trigonométricas)
- ✅ `topics/dax/estadisticas.html` — MEDIAN, STDEV, VAR, PERCENTILE, QUARTILE, RANKX, TOPN, distribuciones y correlación (35 funciones estadísticas)
- ✅ `topics/dax/texto.html` — UPPER, LOWER, LEFT, RIGHT, MID, CONCATENATE, CONCATENATEX, SUBSTITUTE, REPLACE, TRIM, FORMAT, VALUE (23 funciones de texto)
- ✅ `topics/dax/tablas.html` — SUMMARIZECOLUMNS, ADDCOLUMNS, SELECTCOLUMNS, UNION, INTERSECT, EXCEPT, TOPN, GENERATE, TREATAS (35 funciones de manipulación de tablas)
- ✅ `topics/dax/tiempo.html` — TOTALYTD, SAMEPERIODLASTYEAR, DATEADD, PARALLELPERIOD, PREVIOUSYEAR, NEXTYEAR, time intelligence completa (40+ funciones de inteligencia de tiempo)
- ✅ `topics/dax/relaciones.html` — RELATED, RELATEDTABLE, USERELATIONSHIP, CROSSFILTER, navegación entre tablas y control de relaciones (4 funciones de relaciones)
- ✅ `topics/dax/informacion.html` — ISBLANK, ISNUMBER, HASONEVALUE, ISINSCOPE, ISFILTERED, USERNAME, USERPRINCIPALNAME, CONTAINS, INFO.VIEW.TABLES, INFO.VIEW.COLUMNS, INFO.VIEW.MEASURES, INFO.VIEW.RELATIONSHIPS, INFO.MEASURES, INFO.COLUMNS + 9 funciones INFO.* más — funciones de diagnóstico, contexto y metadatos del modelo (32 funciones de información)
- ✅ `topics/dax/info-view.html` — INFO.VIEW.TABLES, INFO.VIEW.COLUMNS, INFO.VIEW.MEASURES, INFO.VIEW.RELATIONSHIPS — página dedicada completa sobre auto-documentación de modelos semánticos con las 4 funciones INFO.VIEW (octubre 2024) más comparativa con las 50+ funciones INFO.* de DAX Query View
- ✅ `topics/dax/financieras.html` — PV, FV, NPV, IRR, PMT, IPMT, PPMT, RATE, SLN, DB, VDB, PRICE, YIELD, funciones financieras completas (50+ funciones para análisis financiero)
- ✅ `topics/dax/padre-hijo.html` — PATH, PATHITEM, PATHITEMREVERSE, PATHLENGTH, PATHCONTAINS, jerarquías padre-hijo y aplanado de estructuras organizacionales (5 funciones para jerarquías)

**Estructura visual unificada (14 páginas reescritas — ¡100% COMPLETADO!)** 🎉✨
- ✅ Las siguientes 14 páginas han sido **completamente reescritas** con estructura HTML y CSS correctas:
  - ✅ `topics/dax/estadisticas.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/texto.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/tablas.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/tiempo.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/relaciones.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/informacion.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/financieras.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/padre-hijo.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/filtro.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/fecha-hora.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/logicas.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/matematicas.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/window-functions.html` — CSS externo + BEM naming + buscador integrado
  - ✅ `topics/dax/grupos-calculo.html` — CSS externo + BEM naming + buscador integrado
- **10 correcciones aplicadas a cada archivo:**
  1. HEAD con 5 CSS externos (main.css, themes.css, components.css, layout.css, dax-search.css)
  2. BODY con estructura .layout-wrapper > #sidebar + #main-content > .topic-page
  3. Breadcrumb con BEM (.breadcrumb__link, .breadcrumb__current)
  4. Topic-header con BEM (.topic-header__icon, __title, __subtitle, __levels)
  5. DAX search compact bar integrado
  6. Sections con .category-header y BEM
  7. Function-card con BEM simplificado
  8. Code-blocks con .code-block__copy
  9. Notes con double-dash modifiers (.note--tip, .note--warning, etc.)
  10. Scripts completos (prism, theme.js, main.js, dax-search.js)

**Buscador de funciones DAX** 🔍
- ✅ `assets/js/dax-search.js` — Índice completo de 375+ funciones DAX (añadidas 15 funciones INFO.VIEW e INFO.* nuevas) + clase DaxSearch con búsqueda fuzzy, scoring inteligente, navegación por teclado (↑↓ Enter Esc), auto-inicialización y detección de página actual
- ✅ `assets/css/dax-search.css` — Estilos completos del buscador con variante hero (página hub), variante compacta sticky (sub-páginas), badges de nivel, highlights de coincidencias, responsive design y modo oscuro
- ✅ `topics/dax.html` — Buscador hero prominente integrado en el hub central DAX con diseño gradient y estadísticas
- ✅ `topics/dax/agregacion.html` — Buscador compacto sticky integrado (prototipo completado, falta aplicar a las otras 15 sub-páginas)

---

**Sección Lenguaje M — 100% completada y unificada** 🎉 (2026-02-22)
- ✅ `topics/lenguaje-m.html` — Hub central con 12 categorías enlazadas
- ✅ `topics/lenguaje-m/tabla.html` — Funciones de Tabla (Table.*): 10 funciones completas *(referencia de diseño)*
- ✅ `topics/lenguaje-m/lista.html` — Funciones de Lista (List.*): 13 funciones completas
- ✅ `topics/lenguaje-m/texto.html` — Funciones de Texto (Text.*): 16 funciones completas *(estructura unificada)*
- ✅ `topics/lenguaje-m/numero.html` — Funciones de Número (Number.*): 12 funciones completas *(estructura unificada)*
- ✅ `topics/lenguaje-m/fecha-hora.html` — Fecha y Hora (Date.*, DateTime.*, Time.*, Duration.*): 20+ funciones *(estructura unificada)*
- ✅ `topics/lenguaje-m/logicas.html` — Expresiones lógicas (if/then/else, try/otherwise, and/or/not): patrones completos *(estructura unificada)*
- ✅ `topics/lenguaje-m/record.html` — Funciones de Record (Record.*): 10 funciones completas *(estructura unificada)*
- ✅ `topics/lenguaje-m/transformacion.html` — Combiner.*, Splitter.*, Comparer.*, Replacer.*, Value.* *(estructura unificada)*
- ✅ `topics/lenguaje-m/tipo.html` — Sistema de tipos, nullable, Type.*, anotaciones, conversión *(estructura unificada)*
- ✅ `topics/lenguaje-m/conectores.html` — Conectores: Excel, CSV, JSON, Web.Contents, SQL, SharePoint, Folder *(estructura unificada)*
- ✅ `topics/lenguaje-m/binario.html` — Binary.*, compresión, codificación Base64, File.Contents *(estructura unificada)*
- ✅ `topics/lenguaje-m/especiales.html` — #shared, #table, Expression.Evaluate, Character.*, Environment.*, diagnóstico *(estructura unificada)*
- **Patrón de rutas:** `../../assets/images/`, `../dax.html`, `../lenguaje-m.html` (is-active), `../../quien-soy.html`
- **Estructura HTML unificada** (idéntica a tabla.html): `<html lang="es">` + `<aside class="site-sidebar">` + `<div class="page-wrapper"><main class="main-content">` + `.breadcrumb` + `.topic-header` + `.category-header` + `.function-card` + scripts desde `cdn.jsdelivr.net`
- **Transformación aplicada con** `fix_m_pages.py` (BeautifulSoup4) sobre las 10 sub-páginas: 2026-02-22

**Buscador de funciones M — 100% completado y unificado** 🔍 (2026-02-23)
- ✅ `assets/js/m-search.js` — 170+ funciones M indexadas en 12 categorías, clase `MSearch` idéntica a `DaxSearch`
- ✅ `topics/lenguaje-m.html` — Buscador hero con diseño idéntico al de DAX (gradiente blush→rose, centrado)
- ✅ 12 sub-páginas (`topics/lenguaje-m/*.html`) — Buscador compacto integrado en todas
- **Reutiliza** `assets/css/dax-search.css` sin duplicar CSS
- **Categorías indexadas:** Tabla (19), Lista (21), Texto (26), Número (21), Fecha y Hora (31), Lógicas (11), Record (15), Transformación (17), Tipo (8), Conectores (14), Binario (11), Especiales (11)
- **Lógica de navegación:** URLs relativas a `topics/` → desde hub usar tal cual, desde sub-página prepend `../`
- **Clases CSS idénticas a DAX:** `.dax-search-hero`, `.dax-search-hero-title`, `.dax-search-hero-subtitle`, `.dax-search-input-group`, `.dax-search-stats` — CSS coral eliminado

**Estandarización de cabeceras — 100% completada** 🎉 (2026-02-26)
- ✅ **28 sub-páginas corregidas** (16 DAX + 12 M) con orden de cabecera unificado
- **Orden definitivo en todas las sub-páginas:**
  1. `<nav class="breadcrumb">` — posición 0
  2. `<header class="topic-header">` — posición 1
  3. Buscador compacto (`.dax-search-compact-bar` en DAX / `[data-m-search]` en M) — posición 2
  4. `<nav class="toc">` — posición 3
  5. Contenido educativo — posición 4+
- **Archivos reordenados:** 23 sub-páginas (search estaba antes del topic-header)
- **Search añadido:** `visual-calcs.html` (DAX) y `lista.html` (M) no tenían buscador → añadido
- **3 archivos ya correctos** (filtro.html, fecha-hora.html, window-functions.html): sin cambios
- Procesado con `fix_headers.py` (BeautifulSoup4), eliminado tras su uso

**Corrección de estilos de cabecera — 100% completada** ✨ (2026-02-26)
- ✅ **12 sub-páginas de Lenguaje M** — topic-header corregido (CSS + HTML)
  - **CSS:** Reemplazado estilo "caja" (`display:flex` + `background:var(--color-rose)` + `border`) por estilo centrado idéntico al de DAX (`text-align:center`, `border-bottom`, sin fondo)
  - **HTML:** `<div class="topic-header">` → `<header class="topic-header">`, eliminado div wrapper anónimo interno, `<div class="topic-header__icon">` → `<span class="topic-header__icon">`
- ✅ `topics/dax/visual-calcs.html` — añadido `dax-search.css` al `<head>` (faltaba)
- Procesado con `fix_styles.py` (BeautifulSoup4), eliminado tras su uso

**Espaciado buscador↔TOC unificado** ✨ (2026-02-26)
- ✅ `assets/css/dax-search.css` — añadido `margin-bottom: 24px` a:
  - `.dax-search-compact-bar` (buscador en sub-páginas DAX)
  - `.dax-search-wrapper--compact` (buscador en sub-páginas M) — regla nueva
- Un único cambio en CSS global aplica a las 28 sub-páginas sin tocar HTML

**Sección Modelado de Datos — 100% completada** 🎉 (2026-02-27)
- ✅ `topics/modelado.html` — Hub central con 12 categorías enlazadas, sidebar correcto, intro con stats
- ✅ `topics/modelado/fundamentos.html` — Hechos vs dimensiones, granularidad, cardinalidad, normalización
- ✅ `topics/modelado/relaciones.html` — Tipos 1:N/1:1/N:N, dirección de filtro, bidireccionalidad, USERELATIONSHIP
- ✅ `topics/modelado/esquema-estrella.html` — Patrón gold standard, diagrama ASCII, vs snowflake, implementación paso a paso
- ✅ `topics/modelado/columnas-vs-medidas.html` — Diferencias fundamentales, tabla comparativa, cuándo usar cada una
- ✅ `topics/modelado/tablas-fechas.html` — CALENDAR/CALENDARAUTO, columnas necesarias, marcar tabla, calendario fiscal
- ✅ `topics/modelado/tablas-calculadas.html` — Sintaxis DAX, tablas de desconexión, parámetros what-if, cuándo evitarlas
- ✅ `topics/modelado/optimizacion.html` — Motor VertiPaq, cardinalidad, Import vs DQ, Performance Analyzer, checklist
- ✅ `topics/modelado/rls.html` — RLS estático y dinámico, USERNAME/UPN, cómo probar, OLS
- ✅ `topics/modelado/agregaciones.html` — Tablas de resumen, configuración, precedencia de consultas
- ✅ `topics/modelado/modelos-compuestos.html` — Modos Import/DQ/Dual, islas de datos, patrón recomendado
- ✅ `topics/modelado/patrones-avanzados.html` — Role-playing dims, SCD tipos 1/2/3, snapshots, factless, bridge tables
- ✅ `topics/modelado/errores-comunes.html` — Los 10 errores más frecuentes con diagnóstico y solución
- **Estructura:** topic-header centrado (igual que DAX/M subpáginas), sidebar `is-active` en Modelado, rutas `../../`, sin buscador de funciones (contenido conceptual)
- **Total:** 13 páginas (1 hub + 12 sub-páginas), cobertura principiante → avanzado completa

**Sección Gobernanza — 100% completada** 🎉 (2026-05-24)
- ✅ `topics/gobernanza.html` — Hub central con 12 categorías, sidebar correcto, intro con stats
- ✅ `topics/gobernanza/fundamentos.html` — Pilares, modelos centralizado/federado/descentralizado, roles, anti-patrones
- ✅ `topics/gobernanza/rls.html` — RLS estático, dinámico, jerárquico con PATH, USERPRINCIPALNAME, cómo probar, limitaciones
- ✅ `topics/gobernanza/ols.html` — Tabular Editor, comparación con RLS, casos de uso, limitaciones
- ✅ `topics/gobernanza/workspaces.html` — Tipos de workspace, 4 roles (Admin/Member/Contributor/Viewer), Apps, estructura del tenant
- ✅ `topics/gobernanza/sensitivity-labels.html` — MIP, herencia, protección al exportar, aplicación en masa con API/PowerShell
- ✅ `topics/gobernanza/certificacion.html` — Promoted vs Certified vs Discover, proceso de revisión, Data Hub
- ✅ `topics/gobernanza/linaje.html` — Vista de linaje, Impact Analysis, Purview, workflow de cambios seguros
- ✅ `topics/gobernanza/auditoria.html` — Activity Log, Unified Audit Log, extracción con PowerShell, dashboard de adopción
- ✅ `topics/gobernanza/deployment-pipelines.html` — Dev/Test/Prod, dataset rules, parámetros M, comparación entre etapas, Pipelines vs Git
- ✅ `topics/gobernanza/dlp.html` — Sensitive Information Types, acciones, configuración por fases, combo con MIP labels
- ✅ `topics/gobernanza/tenant-capacidades.html` — Admin Portal, SKUs (Pro/PPU/Premium/F), asignación de workspaces, tenant settings clave, Capacity Metrics App
- ✅ `topics/gobernanza/coe-adopcion.html` — CoE, Power BI Adoption Roadmap, 5 niveles de madurez, Champions, métricas, plan de 90 días
- **Estructura:** topic-header centrado, sidebar `is-active` en Gobernanza, rutas `../../`, sin buscador de funciones (contenido conceptual)
- **Total:** 13 páginas (1 hub + 12 sub-páginas), cobertura principiante → avanzado

**Eliminación de Mejores Prácticas** 🗑️ (2026-03-02)
- ✅ `topics/mejores-practicas.html` — página eliminada (decisión de reducir scope del proyecto)
- ✅ `topics/mejores-practicas/` — carpeta eliminada
- ✅ Sidebar limpiado en **46 páginas HTML** (3 formatos distintos: una línea, dos líneas, atributos invertidos)
- ✅ Card eliminada de `assets/js/main.js` (grid de la home)
- ✅ Enlace de texto eliminado en `topics/modelado.html`
- ✅ Enlace de texto eliminado en `topics/modelado/errores-comunes.html`
- ✅ Enlace de texto eliminado en `topics/modelado/patrones-avanzados.html`
- **Navegación del sidebar:** de 11 a **10 secciones** (eliminada ✨ Mejores Prácticas)

**Sidebar unificado — 100% completado** 🎉 (2026-02-22)
- ✅ `topics/dax.html` — Sidebar reescrito con estructura BEM de quien-soy.html, rutas `../`, `is-active` en Funciones DAX
- ✅ `topics/power-query.html` — Página nueva creada con sidebar correcto, rutas `../`, `is-active` en Power Query
- ✅ 16 sub-páginas de `topics/dax/` — Sidebar reemplazado en masa con script Python, rutas `../../`, `is-active` en Funciones DAX:
  - agregacion, filtro, fecha-hora, logicas, matematicas, estadisticas, texto, tablas, tiempo, relaciones, informacion, financieras, padre-hijo, visual-calcs, window-functions, grupos-calculo
- ✅ `index.html` — Sidebar ya era correcto (verificado, sin cambios necesarios)
- **Patrón de rutas establecido:**
  - Raíz (`/`): `assets/images/`, `topics/dax.html`, `quien-soy.html`
  - Nivel topics (`topics/`): `../assets/images/`, `dax.html`, `../quien-soy.html`
  - Nivel dax (`topics/dax/`): `../../assets/images/`, `../dax.html`, `../../quien-soy.html`

---

## 🔄 En progreso

_Ninguna tarea en progreso actualmente_ 🎉

---

## ⏳ Pendiente (en orden de prioridad)

**Alta prioridad — Infraestructura funcional**
- [ ] Fase 2 — Componentes dinámicos (components/header.html, sidebar.html, footer.html)
- [ ] Fase 3 — Ficheros de traducción (locales/es.json + locales/en.json)
- [ ] Fase 4 — Sistema i18n (assets/js/i18n.js + integración en componentes)
- [ ] Fase 5 — Buscador local general (assets/js/search.js para todos los topics)

**Baja prioridad — Otros topics principales**
- [ ] Fase 6 — Resto de páginas de topics:
  - ✅ topics/power-query.html — COMPLETADO
  - ✅ topics/lenguaje-m.html — COMPLETADO (hub + 12 sub-páginas)
  - ✅ topics/modelado.html — COMPLETADO (hub + 12 sub-páginas completas)
  - [ ] topics/conceptos-powerbi.html
  - [ ] topics/fabric.html
  - [ ] topics/tmdl.html
  - ✅ topics/diseno-ux.html — COMPLETADO (hub + 12 sub-páginas pendientes)
  - ✅ topics/gobernanza.html — COMPLETADO (hub + 12 sub-páginas completas)

---

## 🐛 Problemas conocidos
_Ninguno por ahora_

---

## 📝 Decisiones tomadas

**Arquitectura general**
- Componentes header, sidebar y footer se cargan dinámicamente con fetch() en main.js
- Los textos nunca van hardcodeados en HTML, siempre via atributos data-i18n y los JSON de locales/
- Tema oscuro se activa añadiendo clase dark-theme al elemento <html>
- Preferencias de tema e idioma se guardan en localStorage
- El sidebar en mobile se muestra/oculta con clase sidebar--open
- **Las 10 cards de topics se generan dinámicamente en main.js** con la función generateTopicsGrid(), no hardcodeadas en index.html
- theme.js usa IIFE para encapsular código y evitar contaminar scope global
- theme.js detecta preferencia del sistema con prefers-color-scheme si no hay tema guardado
- main.js carga los 3 componentes HTML en paralelo con Promise.all() para mejor rendimiento
- El sidebar se cierra automáticamente al hacer click en un link (UX móvil)

**Estructura de contenido DAX**
- topics/dax.html funciona como HUB CENTRAL enlazando a 16 categorías de funciones
- Cada categoría DAX tiene su propia sub-página en topics/dax/ con estructura completa y autónoma
- Todas las sub-páginas DAX incluyen los mismos estilos CSS inline (no dependen de CSS externo adicional)
- Rutas relativas desde sub-páginas: ../../assets/ para recursos, ../dax.html para volver al hub
- TOC (tabla de contenidos) al inicio de cada sub-página para navegación rápida
- Ejemplos de código con botón "Copiar" integrado
- Uso de Prism.js para syntax highlighting de DAX (aproximado con language-javascript)
- Notas kawaii diferenciadas por tipo: tip (💡), warning (⚠️), best-practice (🏆), next (🚀)
- Badges de nivel en cada function-card: Principiante, Intermedio, Avanzado
- Tono kawaii y didáctico en todas las explicaciones, con analogías visuales
- Sección final "Siguiente paso" en cada sub-página enlazando al tema lógicamente siguiente

**Buscador de funciones DAX**
- Índice completo de 375+ funciones DAX organizadas en el archivo dax-search.js con metadatos (name, url, category, categoryIcon, description, level, isNew)
- Búsqueda en tiempo real con debounce de 150ms para optimizar rendimiento
- Algoritmo de scoring por relevancia: exacto (100) > empieza por (80) > contiene (60) > descripción (40) > categoría (20)
- Normalización de texto (case-insensitive, ignora puntos y espacios) para flexibilidad en la búsqueda
- Funciones nuevas (isNew: true) obtienen +5 puntos de bonus en el scoring
- Navegación completa por teclado: ↑↓ para navegar, Enter para abrir, Esc para cerrar/limpiar, Tab para cerrar sin limpiar
- Dos variantes de diseño: hero (página hub con gradient y stats) y compacta sticky (sub-páginas)
- URLs relativas ajustadas automáticamente según la página actual (detectCurrentPage)
- Accesibilidad completa: roles ARIA (combobox, listbox, option), aria-expanded, aria-selected, focus management
- Dropdown con resultados limitados a 8 (configurable), ordenados por score descendente y alfabéticamente en caso de empate
- Highlights de coincidencias con `<mark>` para resaltar la parte del nombre que coincide con el query
- Badges de nivel (🟢 Principiante, 🟡 Intermedio, 🔴 Avanzado) y badge "2024" para funciones nuevas
- Estado vacío amigable con sugerencias cuando no hay resultados
- Hint de navegación por teclado siempre visible al pie del dropdown
- Auto-inicialización con data-dax-search="true" para facilitar integración en múltiples páginas

---

## 📊 Estadísticas del progreso DAX

**Hub central:** ✅ Completado (topics/dax.html con 16 categorías)

**Sub-páginas completadas: 17 de 17 (100%) ✨🎉**
1. ✅ Visual Calculations — 11 funciones (RUNNINGSUM, MOVINGAVERAGE, FIRST, LAST, NEXT, PREVIOUS, etc.)
2. ✅ Window Functions — 6 funciones principales + auxiliares (WINDOW, OFFSET, INDEX, RANK, ROWNUMBER, ORDERBY, PARTITIONBY, MATCHBY)
3. ✅ Grupos de Cálculo — 6 funciones (SELECTEDMEASURE, ISSELECTEDMEASURE, SELECTEDMEASURENAME, SELECTEDMEASUREFORMATSTRING, NAMEOF)
4. ✅ Agregación — 22 funciones (SUM, SUMX, COUNT familia, DISTINCTCOUNT, AVERAGE, MIN, MAX, PRODUCT, APPROXIMATEDISTINCTCOUNT)
5. ✅ Filtro y Contexto — 20+ funciones (CALCULATE, ALL familia, REMOVEFILTERS, KEEPFILTERS, FILTER, VALUES, SELECTEDVALUE, TREATAS)
6. ✅ Fecha y Hora — 24 funciones (DATE, TIME, YEAR, MONTH, DAY, DATEDIFF, EDATE, EOMONTH, NETWORKDAYS, CALENDAR, etc.)
7. ✅ Lógicas — 13+ funciones (IF, IF.EAGER, SWITCH, AND, OR, NOT, IFERROR, COALESCE, TRUE, FALSE, BITAND, BITOR, etc.)
8. ✅ Matemáticas y Trigonométricas — 47 funciones (DIVIDE, ABS, SIGN, MOD, ROUND familia, SQRT, POWER, EXP, LN, LOG, PI, DEGREES, RADIANS, SIN, COS, TAN + hiperbólicas, RAND, RANDBETWEEN, FACT, GCD, LCM, COMBIN, PERMUT)
9. ✅ Estadísticas — 35 funciones (MEDIAN, MEDIANX, MODE, STDEV familia, VAR familia, PERCENTILE familia, QUARTILE, RANKX, TOPN, SAMPLE, distribuciones: NORM, T, CHISQ, POISSON, EXPON, BETA, CORRELX, CONFIDENCE, LINEST, LINESTX, GEOMEAN, GEOMEANX)
10. ✅ Texto — 23 funciones (UPPER, LOWER, PROPER, LEFT, RIGHT, MID, LEN, REPT, SEARCH, FIND, EXACT, CONCATENATE, CONCATENATEX, SUBSTITUTE, REPLACE, TRIM, CLEAN, FORMAT, TEXT, VALUE, FIXED, UNICHAR, UNICODE, CONTAINSSTRING, COMBINEVALUES, TOCSV, TOJSON)
11. ✅ Manipulación de Tablas — 35 funciones (DATATABLE, ROW, GENERATESERIES, ADDCOLUMNS, SELECTCOLUMNS, SUMMARIZE, SUMMARIZECOLUMNS, GROUPBY, UNION, INTERSECT, EXCEPT, NATURALINNERJOIN, NATURALLEFTOUTERJOIN, CROSSJOIN, TOPN, TOPNSKIP, GENERATE, GENERATEALL, CURRENTGROUP, ROLLUP, ISSUBTOTAL, TREATAS, SUBSTITUTEWITHINDEX)
12. ✅ Inteligencia de Tiempo — 40+ funciones (TOTALYTD, TOTALQTD, TOTALMTD, DATESYTD, DATESQTD, DATESMTD, SAMEPERIODLASTYEAR, PREVIOUSYEAR, PREVIOUSQUARTER, PREVIOUSMONTH, NEXTYEAR, NEXTQUARTER, NEXTMONTH, DATEADD, PARALLELPERIOD, DATESBETWEEN, DATESINPERIOD, OPENINGBALANCEYEAR, CLOSINGBALANCEYEAR, FIRSTDATE, LASTDATE, FIRSTNONBLANK, LASTNONBLANK)
13. ✅ Relaciones — 4 funciones (RELATED, RELATEDTABLE, USERELATIONSHIP, CROSSFILTER)
14. ✅ Información — 32 funciones (ISBLANK, ISNUMBER, ISTEXT, ISLOGICAL, ISDATE, ISEMPTY, ISERROR, HASONEVALUE, HASONEFILTER, ISFILTERED, ISCROSSFILTERED, ISINSCOPE, ISATLEVEL, USERNAME, USERPRINCIPALNAME, CUSTOMDATA, CONTAINS, CONTAINSROW, ISONORAFTER, INFO.VIEW.TABLES, INFO.VIEW.COLUMNS, INFO.VIEW.MEASURES, INFO.VIEW.RELATIONSHIPS, INFO.MEASURES, INFO.COLUMNS, INFO.TABLES, INFO.RELATIONSHIPS, INFO.PARTITIONS, INFO.HIERARCHIES, INFO.ROLES, INFO.CALCULATIONGROUPS, INFO.CALCULATIONITEMS, INFO.KPIS, INFO.FUNCTIONS)
15. ✅ Financieras — 50+ funciones (PV, FV, NPV, XNPV, RATE, IRR, XIRR, PMT, IPMT, PPMT, NPER, CUMIPMT, CUMPRINC, SLN, SYD, DB, DDB, VDB, ACCRINT, ACCRINTM, RECEIVED, DISC, INTRATE, COUPDAYBS, COUPDAYS, COUPDAYSNC, COUPNCD, COUPNUM, COUPPCD, PRICE, PRICEDISC, PRICEMAT, YIELD, YIELDDISC, YIELDMAT, EFFECT, NOMINAL, DOLLARDE, DOLLARFR)
16. ✅ Padre-Hijo — 5 funciones (PATH, PATHITEM, PATHITEMREVERSE, PATHLENGTH, PATHCONTAINS)
17. ✅ INFO.VIEW (Metadatos) — 4 funciones principales (INFO.VIEW.TABLES, INFO.VIEW.COLUMNS, INFO.VIEW.MEASURES, INFO.VIEW.RELATIONSHIPS) + comparativa completa con 50+ funciones INFO.* de DAX Query View — página dedicada a auto-documentación de modelos semánticos (novedad octubre 2024)

**Sub-páginas pendientes: 0 de 17 (0%) — ¡TODAS COMPLETADAS!** 🎊

**Total documentado:** 375+ funciones DAX en 17 categorías completas

---

## 🔍 Buscador de funciones DAX — Estado de implementación

**Motor de búsqueda:** ✅ 100% completado
- Índice de 375+ funciones con metadatos completos (añadidas 15 funciones INFO el 2026-02-17)
- Búsqueda fuzzy con scoring inteligente (exacto, empieza, contiene, descripción, categoría)
- Normalización de texto (case-insensitive, ignora puntos/espacios)
- Debounce de 150ms para optimización
- Límite de 8 resultados ordenados por relevancia

**Navegación y UX:** ✅ 100% completado
- Navegación por teclado completa (↑↓ Enter Esc Tab)
- Highlights de coincidencias con `<mark>`
- Badges de nivel y "2024" para funciones nuevas
- Estado vacío con sugerencias
- Hint de teclado siempre visible
- Botón de limpiar con animación

**Accesibilidad:** ✅ 100% completado
- Roles ARIA (combobox, listbox, option)
- Atributos aria-expanded, aria-selected
- Focus management correcto
- Labels y descripciones para screen readers

**Diseño y estilos:** ✅ 100% completado
- Variante hero para página hub (gradient, stats, centrado)
- Variante compacta sticky para sub-páginas
- Responsive design (mobile, tablet, desktop)
- Modo oscuro preparado
- Animaciones suaves (slideDown, hover, active)

**Integración en páginas:** ✅ 100% completado (17 de 17 sub-páginas) 🎉
- ✅ topics/dax.html — Hub central con buscador hero
- ✅ topics/dax/visual-calcs.html — Buscador compacto integrado
- ✅ topics/dax/agregacion.html — Prototipo de buscador compacto
- ✅ topics/dax/estadisticas.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/texto.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/tablas.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/tiempo.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/relaciones.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/informacion.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/financieras.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/padre-hijo.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/filtro.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/fecha-hora.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/logicas.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/matematicas.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/window-functions.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/grupos-calculo.html — Buscador compacto integrado (estructura reescrita)
- ✅ topics/dax/info-view.html — Buscador compacto integrado (página nueva dedicada a INFO.VIEW)

**Funcionalidad:** ✅ 100% operativo
- Auto-inicialización con data-dax-search="true"
- Detección automática de página actual (hub vs sub-página)
- Ajuste de URLs relativas según contexto
- Navegación directa a funciones con scroll al anchor

---

## 📋 Estructura de ficheros objetivo

\`\`\`
/power-bi-guide/
├── CLAUDE.md
├── ESTADO.md
├── index.html
├── quien-soy.html ✅
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── themes.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   └── dax-search.css ✅
│   ├── js/
│   │   ├── main.js
│   │   ├── theme.js
│   │   ├── i18n.js
│   │   ├── search.js
│   │   ├── dax-search.js ✅
│   │   └── cursor.js ✅
│   └── images/
│       ├── Logo Kawaii.jpg ✅
│       ├── avatar Sara.png ✅
│       ├── logo linkedIN.png ✅
│       ├── logo youtube.png ✅
│       └── logo github.png ✅
├── locales/
│   ├── es.json
│   └── en.json
├── components/
│   ├── header.html
│   ├── sidebar.html
│   └── footer.html
└── topics/
    ├── dax.html (HUB CENTRAL)
    ├── dax/
    │   ├── visual-calcs.html ✅
    │   ├── window-functions.html ✅
    │   ├── grupos-calculo.html ✅
    │   ├── agregacion.html ✅
    │   ├── filtro.html ✅
    │   ├── fecha-hora.html ✅
    │   ├── logicas.html ✅
    │   ├── matematicas.html ✅
    │   ├── estadisticas.html ✅
    │   ├── texto.html ✅
    │   ├── tablas.html ✅
    │   ├── tiempo.html ✅
    │   ├── relaciones.html ✅
    │   ├── informacion.html ✅
    │   ├── info-view.html ✅ (NUEVO — 2026-02-17)
    │   ├── financieras.html ✅
    │   └── padre-hijo.html ✅
    ├── power-query.html
    ├── lenguaje-m.html
    ├── modelado.html
    ├── conceptos-powerbi.html
    ├── fabric.html
    ├── tmdl.html
    ├── diseno-ux.html
    └── gobernanza.html
\`\`\`
