"""
Añade el buscador compacto de funciones M a todas las subpáginas de lenguaje-m/
Inserta:
  1. <link> a dax-search.css en el <head>
  2. Widget compacto justo después del </nav> del breadcrumb
  3. <script src> de m-search.js antes de </body>
"""
import os
import re

SUBPAGES_DIR = r"C:\workspace\powerbiguide\topics\lenguaje-m"

FILES = [
    "tabla.html", "lista.html", "texto.html", "numero.html",
    "fecha-hora.html", "logicas.html", "record.html",
    "transformacion.html", "tipo.html", "conectores.html",
    "binario.html", "especiales.html"
]

CSS_LINK = '  <link rel="stylesheet" href="../../assets/css/dax-search.css">'

COMPACT_WIDGET = """
        <!-- Buscador compacto de funciones M -->
        <div data-m-search="true" class="dax-search-wrapper dax-search-wrapper--compact">
          <div class="dax-search-input-row">
            <span class="dax-search-icon" aria-hidden="true">🔍</span>
            <input
              type="search"
              class="dax-search-input"
              placeholder="Buscar otra función M..."
              aria-label="Buscar funciones del Lenguaje M"
              aria-autocomplete="list"
              aria-expanded="false"
              autocomplete="off"
              spellcheck="false"
            />
            <button class="dax-search-clear" aria-label="Limpiar búsqueda" hidden>✕</button>
          </div>
          <div class="dax-search-results" role="listbox" aria-label="Resultados de búsqueda"></div>
        </div>
"""

SCRIPT_LINE = '  <script src="../../assets/js/m-search.js"></script>'

def process_file(filename):
    path = os.path.join(SUBPAGES_DIR, filename)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    changed = False

    # 1. Añadir CSS link si no existe ya
    if 'dax-search.css' not in content:
        # Insertar después de layout.css
        content = content.replace(
            '  <link rel="stylesheet" href="../../assets/css/layout.css">',
            '  <link rel="stylesheet" href="../../assets/css/layout.css">\n' + CSS_LINK
        )
        changed = True

    # 2. Añadir widget compacto después del </nav> del breadcrumb (primera ocurrencia)
    if 'data-m-search="true"' not in content:
        # El breadcrumb termina con </nav> seguido de espacios/saltos y luego topic-header
        # Insertamos el widget justo antes del topic-header
        content = content.replace(
            '\n        <!-- Cabecera -->',
            COMPACT_WIDGET + '\n        <!-- Cabecera -->'
        )
        changed = True

    # 3. Añadir script m-search.js antes de </body> si no existe
    if 'm-search.js' not in content:
        content = content.replace(
            '</body>',
            SCRIPT_LINE + '\n</body>'
        )
        changed = True

    if changed:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  OK: {filename}")
    else:
        print(f"  SKIP (ya actualizado): {filename}")

print("Añadiendo buscador compacto M a subpáginas...")
for f in FILES:
    process_file(f)
print("\nListo!")
