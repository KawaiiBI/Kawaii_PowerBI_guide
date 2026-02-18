/* ===================================================================
   MAIN.JS — Power BI Guide 🌸
   Inicialización de la aplicación y funcionalidades principales
   =================================================================== */

/**
 * Carga un componente HTML externo y lo inserta en el DOM
 * @param {string} id - ID del elemento donde insertar el componente
 * @param {string} url - URL del archivo HTML a cargar
 * @returns {Promise<void>}
 */
async function loadComponent(id, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error cargando ${url}: ${response.status}`);
    }
    const html = await response.text();
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = html;

      // Si es el sidebar, marcar el link activo
      if (id === 'sidebar') {
        markActiveNavLink();
      }
    }
  } catch (error) {
    console.error(`Error al cargar componente ${id}:`, error);
  }
}

/**
 * Marca el enlace activo en el sidebar según la URL actual
 */
function markActiveNavLink() {
  const links = document.querySelectorAll('.sidebar-nav__link');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    // Remover clase active de todos
    link.classList.remove('active');

    // Añadir clase active al que corresponda
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href)) {
      link.classList.add('active');
    }
  });
}

/**
 * Inicializa el menú hamburguesa para móvil
 */
function initHamburger() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');

  if (!hamburgerBtn || !sidebar) return;

  // Toggle sidebar al hacer click en hamburguesa
  hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--open');
    hamburgerBtn.classList.toggle('active');
  });

  // Cerrar sidebar al hacer click fuera de él
  if (mainContent) {
    mainContent.addEventListener('click', () => {
      if (sidebar.classList.contains('sidebar--open')) {
        sidebar.classList.remove('sidebar--open');
        hamburgerBtn.classList.remove('active');
      }
    });
  }

  // Cerrar sidebar al hacer click en un link
  const sidebarLinks = sidebar.querySelectorAll('.sidebar-nav__link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('sidebar--open');
      hamburgerBtn.classList.remove('active');
    });
  });
}

/**
 * Inicializa los botones de copiar código
 */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.code-block__copy');

  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const codeBlock = button.closest('.code-block');
      const codeElement = codeBlock.querySelector('pre code');

      if (!codeElement) return;

      try {
        await navigator.clipboard.writeText(codeElement.textContent);

        // Feedback visual
        const originalText = button.textContent;
        button.textContent = '✓ Copiado';
        button.classList.add('copied');

        // Revertir después de 2 segundos
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('copied');
        }, 2000);
      } catch (error) {
        console.error('Error al copiar código:', error);
      }
    });
  });
}

/**
 * Inicializa el botón de volver arriba
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');

  if (!backToTopBtn) return;

  // Mostrar/ocultar según scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // Scroll suave al top
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Genera el grid de cards de topics en la página principal
 */
function generateTopicsGrid() {
  const topicsGrid = document.getElementById('topics-grid');

  if (!topicsGrid) return;

  const topics = [
    {
      id: 'dax',
      icon: '⚡',
      title: 'Funciones DAX',
      description: 'Domina las fórmulas DAX desde cero: CALCULATE, iteradores, inteligencia de tiempo y mucho más.',
      levels: ['beginner', 'intermediate', 'advanced'],
      url: 'topics/dax.html'
    },
    {
      id: 'power-query',
      icon: '🔄',
      title: 'Power Query',
      description: 'Conecta, transforma y consolida datos con Power Query. La base de todo buen modelo.',
      levels: ['beginner', 'intermediate'],
      url: 'topics/power-query.html'
    },
    {
      id: 'lenguaje-m',
      icon: '🧩',
      title: 'Lenguaje M',
      description: 'Lleva Power Query al siguiente nivel programando transformaciones con el lenguaje M.',
      levels: ['intermediate', 'advanced'],
      url: 'topics/lenguaje-m.html'
    },
    {
      id: 'modelado',
      icon: '🏗️',
      title: 'Modelado de Datos',
      description: 'Aprende a diseñar modelos estrella, gestionar relaciones y optimizar para rendimiento.',
      levels: ['beginner', 'intermediate', 'advanced'],
      url: 'topics/modelado.html'
    },
    {
      id: 'conceptos-powerbi',
      icon: '📊',
      title: 'Conceptos Power BI',
      description: 'Entiende el ecosistema completo: Desktop, Service, datasets, informes y más.',
      levels: ['beginner'],
      url: 'topics/conceptos-powerbi.html'
    },
    {
      id: 'fabric',
      icon: '🪡',
      title: 'Microsoft Fabric',
      description: 'Explora la plataforma unificada de datos de Microsoft: Lakehouses, pipelines, OneLake y más.',
      levels: ['intermediate', 'advanced'],
      url: 'topics/fabric.html'
    },
    {
      id: 'tmdl',
      icon: '📝',
      title: 'TMDL',
      description: 'Gestiona modelos semánticos como código con el Tabular Model Definition Language.',
      levels: ['advanced'],
      url: 'topics/tmdl.html'
    },
    {
      id: 'mejores-practicas',
      icon: '✅',
      title: 'Mejores Prácticas',
      description: 'Convenciones de nomenclatura, organización de medidas y estándares de calidad profesional.',
      levels: ['beginner', 'intermediate', 'advanced'],
      url: 'topics/mejores-practicas.html'
    },
    {
      id: 'diseno-ux',
      icon: '🎨',
      title: 'Diseño y UX',
      description: 'Crea dashboards hermosos y usables: jerarquía visual, accesibilidad y experiencia de usuario.',
      levels: ['beginner', 'intermediate'],
      url: 'topics/diseno-ux.html'
    },
    {
      id: 'gobernanza',
      icon: '🔒',
      title: 'Gobernanza y Seguridad',
      description: 'Row-Level Security, permisos, workspaces, linaje de datos y buenas prácticas de gobierno.',
      levels: ['intermediate', 'advanced'],
      url: 'topics/gobernanza.html'
    },
    {
      id: 'quien-soy',
      icon: '👩‍💻',
      title: '¿Quién soy?',
      description: 'Conoce a Sara Lozano Martí, Microsoft MVP Data Platform, consultora de Power BI y creadora de Kawaii BI. Mi historia, proyectos y comunidad.',
      levels: ['special'],
      url: 'quien-soy.html'
    }
  ];

  // Mapeo de niveles a badges
  const levelLabels = {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
    special: '💕 Sobre mí'
  };

  // Generar HTML para cada topic
  const html = topics.map(topic => {
    const badgesHTML = topic.levels.map(level =>
      `<span class="badge badge--${level}">${levelLabels[level]}</span>`
    ).join('');

    return `
      <a href="${topic.url}" class="topic-card" aria-label="${topic.title}">
        <div class="topic-card__icon">${topic.icon}</div>
        <div class="topic-card__title">${topic.title}</div>
        <div class="topic-card__description">${topic.description}</div>
        <div class="topic-card__levels">
          ${badgesHTML}
        </div>
      </a>
    `;
  }).join('');

  topicsGrid.innerHTML = html;
}

/**
 * Inicializa la aplicación
 * @returns {Promise<void>}
 */
async function init() {
  try {
    // Cargar componentes dinámicos en paralelo
    await Promise.all([
      loadComponent('main-header', 'components/header.html'),
      loadComponent('sidebar', 'components/sidebar.html'),
      loadComponent('main-footer', 'components/footer.html')
    ]);

    // Inicializar funcionalidades
    initHamburger();
    initCopyButtons();
    initBackToTop();
    generateTopicsGrid();

    // Activar Prism.js si está disponible
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
  } catch (error) {
    console.error('Error al inicializar la aplicación:', error);
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
