#!/usr/bin/env python3
"""
Transforma las 10 subpáginas de Lenguaje M para que tengan
la misma estructura que tabla.html.
"""
from pathlib import Path
from bs4 import BeautifulSoup, Tag
import re

BASE = Path(r"C:\workspace\powerbiguide\topics\lenguaje-m")

# ── Inline CSS idéntico al de tabla.html ──────────────────────────────────────
INLINE_STYLE = """
  <style>
    /* Topic header */
    .topic-header {
      display: flex;
      align-items: flex-start;
      gap: 1.25rem;
      margin-bottom: 2rem;
      padding: 1.75rem;
      background: var(--color-rose);
      border-radius: var(--border-radius);
      border: 1.5px solid var(--color-mauve);
    }
    .topic-header__icon { font-size: 3rem; line-height: 1; flex-shrink: 0; }
    .topic-header__title { font-size: 1.875rem; font-weight: 700; margin-bottom: 0.25rem; }
    .topic-header__subtitle { color: var(--color-slate); font-size: 0.9375rem; margin-bottom: 0.75rem; line-height: 1.6; }
    .topic-header__levels { display: flex; gap: 0.375rem; flex-wrap: wrap; }

    /* Category header */
    .category-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin: 2.5rem 0 1.25rem;
      padding: 0.875rem 1.25rem;
      background: var(--color-rose);
      border-radius: var(--border-radius-sm);
      border-left: 4px solid var(--color-coral);
    }
    .category-header__icon { font-size: 1.5rem; }
    .category-header__title { font-size: 1.25rem; font-weight: 700; margin: 0; }

    /* Function cards */
    .function-card {
      background: var(--color-white);
      border: 1.5px solid var(--color-mauve);
      border-radius: var(--border-radius);
      padding: 1.75rem;
      margin-bottom: 1.5rem;
      scroll-margin-top: 80px;
      transition: border-color 0.2s;
    }
    .function-card:hover { border-color: var(--color-coral); }

    .function-card__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid var(--color-blush);
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .function-card__title {
      font-size: 1.375rem;
      font-weight: 800;
      color: var(--color-coral);
      margin: 0;
      font-family: 'Fira Code', monospace;
    }

    .function-card h4 {
      font-size: 0.9375rem;
      font-weight: 700;
      color: var(--color-dark);
      margin: 1.25rem 0 0.625rem;
    }

    .function-card p { font-size: 0.9375rem; line-height: 1.7; color: var(--color-dark); }

    .function-card__params ul { list-style: none; padding: 0; margin: 0; }
    .function-card__params li {
      padding: 0.5rem 0 0.5rem 1.5rem;
      position: relative;
      line-height: 1.6;
      font-size: 0.9rem;
      border-bottom: 1px solid var(--color-blush);
    }
    .function-card__params li:last-child { border-bottom: none; }
    .function-card__params li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: var(--color-coral);
      font-weight: 700;
    }
    .function-card__params code {
      background: var(--color-blush);
      padding: 0.1em 0.4em;
      border-radius: 4px;
      font-family: 'Fira Code', monospace;
      font-size: 0.85em;
      color: var(--color-coral);
    }

    /* TOC */
    .toc {
      background: var(--color-rose);
      border-radius: var(--border-radius);
      padding: 1.25rem 1.5rem;
      margin-bottom: 2rem;
      border: 1.5px solid var(--color-mauve);
    }
    .toc__title { font-size: 1rem; font-weight: 700; margin: 0 0 0.75rem; }
    .toc__list { display: flex; flex-wrap: wrap; gap: 0.5rem; list-style: none; padding: 0; margin: 0; }
    .toc__list a {
      font-size: 0.8125rem;
      color: var(--color-coral);
      text-decoration: none;
      padding: 0.25rem 0.625rem;
      background: var(--color-white);
      border-radius: 999px;
      border: 1px solid var(--color-mauve);
      transition: background 0.15s, color 0.15s;
      font-family: 'Fira Code', monospace;
    }
    .toc__list a:hover { background: var(--color-coral); color: white; }

    /* Table (tipo.html) */
    .type-table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem; }
    .type-table th { background: var(--color-rose); color: var(--color-dark); font-weight: 600; padding: 0.6rem 1rem; text-align: left; }
    .type-table td { padding: 0.55rem 1rem; border-bottom: 1px solid var(--color-mauve); }
    .type-table tr:last-child td { border-bottom: none; }
    .type-table code { font-family: 'Fira Code', monospace; font-size: 0.85em; }
  </style>"""

# ── Sidebar idéntico al de tabla.html ─────────────────────────────────────────
SIDEBAR_HTML = """  <!-- SIDEBAR: Navegación principal -->
  <aside class="site-sidebar">
    <div class="site-sidebar__profile">
      <img src="../../assets/images/avatar Sara.png" alt="Sara Lozano Martí" class="site-sidebar__avatar" />
      <p class="site-sidebar__name">Sara Lozano Martí</p>
      <p class="site-sidebar__subtitle">Power BI Expert</p>
    </div>
    <nav class="site-sidebar__nav" aria-label="Navegación principal">
      <ul>
        <li><a href="../../index.html" class="site-sidebar__link">
          <span class="site-sidebar__icon">🏠</span> Inicio
        </a></li>
        <li><a href="../dax.html" class="site-sidebar__link">
          <span class="site-sidebar__icon">⚡</span> Funciones DAX
        </a></li>
        <li><a href="../power-query.html" class="site-sidebar__link">
          <span class="site-sidebar__icon">🔄</span> Power Query
        </a></li>
        <li><a href="../lenguaje-m.html" class="site-sidebar__link is-active">
          <span class="site-sidebar__icon">〽️</span> Lenguaje M
        </a></li>
        <li><a href="../modelado.html" class="site-sidebar__link">
          <span class="site-sidebar__icon">🗄️</span> Modelado
        </a></li>
        <li><a href="../conceptos-powerbi.html" class="site-sidebar__link">
          <span class="site-sidebar__icon">📊</span> Conceptos Power BI
        </a></li>
        <li><a href="../fabric.html" class="site-sidebar__link">
          <span class="site-sidebar__icon">🧵</span> Microsoft Fabric
        </a></li>
        <li><a href="../tmdl.html" class="site-sidebar__link">
          <span class="site-sidebar__icon">📝</span> TMDL
        </a></li>
        <li><a href="../mejores-practicas.html" class="site-sidebar__link">
          <span class="site-sidebar__icon">🏆</span> Mejores Prácticas
        </a></li>
        <li><a href="../diseno-ux.html" class="site-sidebar__link">
          <span class="site-sidebar__icon">🎨</span> Diseño y UX
        </a></li>
        <li><a href="../gobernanza.html" class="site-sidebar__link">
          <span class="site-sidebar__icon">🔒</span> Gobernanza
        </a></li>
      </ul>
    </nav>
    <div class="site-sidebar__divider"></div>
    <div class="site-sidebar__footer">
      <a href="../../quien-soy.html" class="site-sidebar__link site-sidebar__link--highlight">
        <span class="site-sidebar__icon">👩‍💻</span> ¿Quién soy?
      </a>
      <div class="site-sidebar__social">
        <a href="https://www.linkedin.com/in/saralozanomarti" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="../../assets/images/logo linkedIN.png" alt="LinkedIn" class="site-sidebar__social-icon" />
        </a>
        <a href="https://www.youtube.com/@KawaiiPowerBI" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <img src="../../assets/images/logo youtube.png" alt="YouTube" class="site-sidebar__social-icon" />
        </a>
        <a href="https://github.com/KawaiiBI" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="../../assets/images/logo github.png" alt="GitHub" class="site-sidebar__social-icon" />
        </a>
      </div>
      <div class="site-sidebar__logo-bottom">
        <img src="../../assets/images/Logo Kawaii.jpg" alt="Kawaii BI" class="site-sidebar__logo-img" />
      </div>
      <p class="site-sidebar__copyright">
        Power BI Guide 🌸<br>
        © 2026 Kawaii BI
      </p>
    </div>
  </aside>"""

# ── Scripts idénticos a los de tabla.html ─────────────────────────────────────
SCRIPTS_HTML = """  <button id="back-to-top" class="back-to-top" aria-label="Volver arriba" title="Volver arriba">↑</button>

  <script src="https://cdn.jsdelivr.net/npm/i18next@23/dist/umd/i18next.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1/prism.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-javascript.min.js"></script>
  <script src="../../assets/js/theme.js"></script>
  <script src="../../assets/js/i18n.js"></script>
  <script src="../../assets/js/main.js"></script>
  <script src="../../assets/js/cursor.js"></script>"""

# ── Iconos para encabezados de sección ────────────────────────────────────────
SECTION_ICON_MAP = {
    "mayúsculas": "🔠", "minúsculas": "🔠",
    "longitud": "📏", "limpieza": "🧹",
    "búsqueda": "🔍",
    "reemplazar": "✏️",
    "dividir": "✂️", "combinar": "🔗",
    "extraer": "🎯",
    "relleno": "📐",
    "conversión": "🔄", "convertir": "🔄",
    "formato": "🎨",
    "redondeo": "🔢",
    "matemáticas": "➕", "matemática": "➕",
    "aleatorio": "🎲",
    "constantes": "π",
    "crear": "🆕",
    "partes": "🔬",
    "operaciones": "⚙️",
    "datetime": "🕐",
    "duration": "⏳",
    "time": "⏰",
    "if": "🧠", "lógic": "🧠",
    "operadores": "⚙️",
    "try": "🛡️",
    "nulos": "⭕",
    "logical": "✅",
    "patrones": "🔮",
    "acceder": "📦", "acceso": "📦",
    "campos": "🗂️",
    "modificar": "✏️",
    "combinar": "🔗",
    "combiner": "🔗",
    "splitter": "✂️",
    "comparer": "⚖️",
    "replacer": "✏️",
    "value": "🏷️",
    "tipos primitivos": "🏷️", "tipo": "🏷️",
    "nullable": "⭕",
    "type.": "🔬",
    "anotaciones": "📋",
    "tabla": "📊",
    "archivos": "📁", "archivo": "📁",
    "web": "🌐", "api": "🌐",
    "base": "🗄️", "sql": "🗄️",
    "sharepoint": "☁️",
    "carpeta": "📂",
    "parametri": "⚙️",
    "binarios": "💾", "binario": "💾",
    "leer": "📖",
    "transformar": "🔄",
    "compresión": "🗜️",
    "codificación": "🔐",
    "#shared": "🌐",
    "#table": "📊",
    "expression": "🧪",
    "character": "🔤",
    "entorno": "⚙️",
    "diagnóstico": "🔭",
    "introducción": "🌸",
    "funciones": "⚙️",
}

def get_icon(section_title: str) -> str:
    title_lower = section_title.lower()
    for key, icon in SECTION_ICON_MAP.items():
        if key in title_lower:
            return icon
    return "📌"

# ── Metadatos por archivo ──────────────────────────────────────────────────────
PAGE_META = {
    "texto.html": {
        "title": "Funciones de Texto (Text.*) — Lenguaje M | Power BI Guide by Kawaii BI",
        "meta": "Text.Upper, Text.Lower, Text.Split, Text.Replace y más funciones de texto del Lenguaje M de Power Query.",
        "icon": "📝",
        "h1": "Funciones de Texto (Text.*)",
        "subtitle": "Manipula, limpia y transforma cadenas de texto con las funciones Text.* de Power Query M.",
        "bc": "Funciones de Texto",
        "badges": [("badge--beginner", "Principiante"), ("badge--intermediate", "Intermedio")],
    },
    "numero.html": {
        "title": "Funciones de Número (Number.*) — Lenguaje M | Power BI Guide by Kawaii BI",
        "meta": "Number.Round, Number.Abs, Number.Sqrt, Number.From y más funciones numéricas del Lenguaje M.",
        "icon": "🔢",
        "h1": "Funciones de Número (Number.*)",
        "subtitle": "Opera, redondea y transforma valores numéricos con las funciones Number.* de Power Query M.",
        "bc": "Funciones de Número",
        "badges": [("badge--beginner", "Principiante"), ("badge--intermediate", "Intermedio"), ("badge--advanced", "Avanzado")],
    },
    "fecha-hora.html": {
        "title": "Funciones de Fecha y Hora — Lenguaje M | Power BI Guide by Kawaii BI",
        "meta": "Date.*, DateTime.*, Time.* y Duration.* para trabajar con fechas y horas en Power Query M.",
        "icon": "📅",
        "h1": "Funciones de Fecha y Hora",
        "subtitle": "Trabaja con fechas, horas y duraciones usando Date.*, DateTime.*, Time.* y Duration.* en Power Query M.",
        "bc": "Funciones de Fecha y Hora",
        "badges": [("badge--beginner", "Principiante"), ("badge--intermediate", "Intermedio"), ("badge--advanced", "Avanzado")],
    },
    "logicas.html": {
        "title": "Expresiones Lógicas — Lenguaje M | Power BI Guide by Kawaii BI",
        "meta": "if/then/else, try/otherwise, and/or/not y manejo de errores en el Lenguaje M de Power Query.",
        "icon": "🧠",
        "h1": "Expresiones Lógicas",
        "subtitle": "Controla el flujo de tus consultas M con if/then/else, try/otherwise, operadores lógicos y patrones avanzados.",
        "bc": "Expresiones Lógicas",
        "badges": [("badge--beginner", "Principiante"), ("badge--intermediate", "Intermedio"), ("badge--advanced", "Avanzado")],
    },
    "record.html": {
        "title": "Funciones de Record (Record.*) — Lenguaje M | Power BI Guide by Kawaii BI",
        "meta": "Record.Field, Record.FieldNames, Record.Combine y más funciones para trabajar con records en M.",
        "icon": "📦",
        "h1": "Funciones de Record (Record.*)",
        "subtitle": "Trabaja con estructuras clave-valor en Power Query M. Los records son la base de las filas de una tabla.",
        "bc": "Funciones de Record",
        "badges": [("badge--intermediate", "Intermedio"), ("badge--advanced", "Avanzado")],
    },
    "transformacion.html": {
        "title": "Funciones de Transformación — Lenguaje M | Power BI Guide by Kawaii BI",
        "meta": "Combiner.*, Splitter.*, Comparer.* y Replacer.* — las piezas modulares del Lenguaje M.",
        "icon": "🔧",
        "h1": "Funciones de Transformación",
        "subtitle": "Combina, divide, compara y reemplaza con los módulos Combiner.*, Splitter.*, Comparer.* y Replacer.*.",
        "bc": "Funciones de Transformación",
        "badges": [("badge--intermediate", "Intermedio"), ("badge--advanced", "Avanzado")],
    },
    "tipo.html": {
        "title": "Sistema de Tipos — Lenguaje M | Power BI Guide by Kawaii BI",
        "meta": "Tipos primitivos, nullable, Type.*, anotaciones de tipo y conversión explícita en el Lenguaje M.",
        "icon": "🏷️",
        "h1": "Sistema de Tipos",
        "subtitle": "Entiende el sistema de tipos de M: tipos primitivos, nullable, conversión explícita y las funciones Type.*.",
        "bc": "Sistema de Tipos",
        "badges": [("badge--intermediate", "Intermedio"), ("badge--advanced", "Avanzado")],
    },
    "conectores.html": {
        "title": "Conectores de Datos — Lenguaje M | Power BI Guide by Kawaii BI",
        "meta": "Excel.Workbook, Csv.Document, Web.Contents, Sql.Database y más conectores del Lenguaje M.",
        "icon": "🔌",
        "h1": "Conectores de Datos",
        "subtitle": "Conecta Power Query a cualquier fuente de datos: Excel, CSV, Web, SQL, SharePoint y APIs REST.",
        "bc": "Conectores de Datos",
        "badges": [("badge--beginner", "Principiante"), ("badge--intermediate", "Intermedio"), ("badge--advanced", "Avanzado")],
    },
    "binario.html": {
        "title": "Funciones Binarias (Binary.*) — Lenguaje M | Power BI Guide by Kawaii BI",
        "meta": "Binary.*, compresión, codificación Base64 y File.Contents en el Lenguaje M de Power Query.",
        "icon": "💾",
        "h1": "Funciones Binarias (Binary.*)",
        "subtitle": "Trabaja con datos en formato binario usando Binary.*. Esencial para archivos, APIs, compresión y codificaciones.",
        "bc": "Funciones Binarias",
        "badges": [("badge--intermediate", "Intermedio"), ("badge--advanced", "Avanzado")],
    },
    "especiales.html": {
        "title": "Funciones Especiales — Lenguaje M | Power BI Guide by Kawaii BI",
        "meta": "#shared, #table, Expression.Evaluate, Character.* y las características más avanzadas del Lenguaje M.",
        "icon": "✨",
        "h1": "Funciones Especiales",
        "subtitle": "Las características más avanzadas de M: #shared, Expression.Evaluate, #table, Character.* y patrones expertos.",
        "bc": "Funciones Especiales",
        "badges": [("badge--intermediate", "Intermedio"), ("badge--advanced", "Avanzado")],
    },
}


def render_tag_html(tag) -> str:
    """Render a BS4 tag to string, preserving pre/code whitespace."""
    return str(tag)


def extract_toc_items(soup) -> list:
    """Extract TOC links from the existing toc nav."""
    items = []
    toc = soup.find(class_="toc")
    if toc:
        for li in toc.find_all("li"):
            a = li.find("a")
            if a:
                items.append((a.get("href", "#"), a.get_text(strip=True)))
    return items


def extract_content_blocks(soup) -> list:
    """
    Return a list of dicts:
      { type: 'category', icon, title, id }  →  <div class="category-header">
      { type: 'card', html }                 →  <article class="function-card">
      { type: 'note', html }                 →  standalone note (not inside card, not note--next)
    """
    blocks = []
    sections = soup.find_all("section", class_="function-section")

    if sections:
        for sec in sections:
            h2 = sec.find("h2")
            sec_title = h2.get_text(strip=True) if h2 else "Funciones"
            sec_id = sec.get("id", "")

            blocks.append({
                "type": "category",
                "icon": get_icon(sec_title),
                "title": sec_title,
                "id": sec_id,
            })

            # Walk direct children in order
            for child in sec.children:
                if not isinstance(child, Tag):
                    continue
                cls = child.get("class", [])
                if child.name == "article" and "function-card" in cls:
                    blocks.append({"type": "card", "html": render_tag_html(child)})
                elif "note" in cls and "note--next" not in cls:
                    blocks.append({"type": "note", "html": render_tag_html(child)})
    else:
        # Fallback: find all function-cards anywhere
        for card in soup.find_all("article", class_="function-card"):
            blocks.append({"type": "card", "html": render_tag_html(card)})

    return blocks


def build_toc_html(items: list) -> str:
    if not items:
        return ""
    links = "\n".join(
        f'            <li><a href="{href}">{text}</a></li>'
        for href, text in items
    )
    return f"""
        <nav class="toc" aria-label="Índice de funciones">
          <p class="toc__title">📌 Funciones en esta página:</p>
          <ul class="toc__list">
{links}
          </ul>
        </nav>"""


def build_content_html(blocks: list) -> str:
    parts = []
    for block in blocks:
        if block["type"] == "category":
            id_attr = f' id="{block["id"]}"' if block.get("id") else ""
            parts.append(
                f'\n        <div class="category-header"{id_attr}>\n'
                f'          <span class="category-header__icon">{block["icon"]}</span>\n'
                f'          <h2 class="category-header__title">{block["title"]}</h2>\n'
                f'        </div>'
            )
        elif block["type"] in ("card", "note"):
            # Fix: ensure language class is language-javascript
            html = re.sub(
                r'class="language-\w+"',
                'class="language-javascript"',
                block["html"]
            )
            parts.append("\n        " + html)
    return "".join(parts)


def transform_file(filename: str) -> None:
    filepath = BASE / filename
    if not filepath.exists():
        print(f"  SKIP (no encontrado): {filename}")
        return

    meta = PAGE_META.get(filename)
    if not meta:
        print(f"  SKIP (sin metadatos): {filename}")
        return

    soup = BeautifulSoup(filepath.read_text(encoding="utf-8"), "html.parser")

    # Extract pieces
    toc_items = extract_toc_items(soup)
    content_blocks = extract_content_blocks(soup)

    # note--next (last note at page end)
    last_note = soup.find(class_="note--next")
    last_note_html = ("\n\n        " + render_tag_html(last_note)) if last_note else ""

    # Badges HTML
    badges_html = "\n".join(
        f'              <span class="{cls}">{label}</span>'
        for cls, label in meta["badges"]
    )

    toc_html = build_toc_html(toc_items)
    content_html = build_content_html(content_blocks)

    new_html = f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="{meta['meta']}">
  <title>{meta['title']}</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">

  <!-- Prism.js -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1/themes/prism-okaidia.min.css">

  <!-- Estilos CSS -->
  <link rel="stylesheet" href="../../assets/css/main.css">
  <link rel="stylesheet" href="../../assets/css/themes.css">
  <link rel="stylesheet" href="../../assets/css/components.css">
  <link rel="stylesheet" href="../../assets/css/layout.css">
{INLINE_STYLE}
</head>
<body>

{SIDEBAR_HTML}

  <!-- CONTENIDO PRINCIPAL -->
  <div class="page-wrapper">
    <main class="main-content">
      <div class="topic-page">

        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="Ruta de navegación">
          <span class="breadcrumb__item"><a href="../../index.html">🏠 Inicio</a></span>
          <span class="breadcrumb__separator" aria-hidden="true">›</span>
          <span class="breadcrumb__item"><a href="../lenguaje-m.html">Lenguaje M</a></span>
          <span class="breadcrumb__separator" aria-hidden="true">›</span>
          <span class="breadcrumb__item">{meta['bc']}</span>
        </nav>

        <!-- Cabecera -->
        <div class="topic-header">
          <div class="topic-header__icon">{meta['icon']}</div>
          <div>
            <h1 class="topic-header__title">{meta['h1']}</h1>
            <p class="topic-header__subtitle">{meta['subtitle']}</p>
            <div class="topic-header__levels">
{badges_html}
            </div>
          </div>
        </div>
{toc_html}
{content_html}
{last_note_html}

      </div>
    </main>
  </div>

{SCRIPTS_HTML}
</body>
</html>
"""

    filepath.write_text(new_html, encoding="utf-8")
    print(f"  OK: {filename}")


# ── Main ───────────────────────────────────────────────────────────────────────
FILES = [
    "texto.html",
    "numero.html",
    "fecha-hora.html",
    "logicas.html",
    "record.html",
    "transformacion.html",
    "tipo.html",
    "conectores.html",
    "binario.html",
    "especiales.html",
]

print("Transformando subpáginas de Lenguaje M...")
for f in FILES:
    try:
        transform_file(f)
    except Exception as e:
        import traceback
        print(f"  ERROR en {f}: {e}")
        traceback.print_exc()

print("\nListo!")
