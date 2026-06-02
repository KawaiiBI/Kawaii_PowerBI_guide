/* ===================================================================
   THEME.JS — Power BI Guide 🌸
   Gestión del tema claro/oscuro con persistencia en localStorage
   =================================================================== */

(function() {
  'use strict';

  // Constantes
  const STORAGE_KEY = 'pbi-theme';
  const DARK_CLASS = 'dark-theme';

  /**
   * Obtiene el tema guardado en localStorage
   * @returns {string|null} El tema guardado ('light' o 'dark') o null si no existe
   */
  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  /**
   * Detecta el tema preferido del sistema operativo
   * @returns {string} 'dark' si el sistema prefiere tema oscuro, 'light' en caso contrario
   */
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /**
   * Aplica el tema especificado al documento
   * @param {string} theme - El tema a aplicar ('light' o 'dark')
   */
  function applyTheme(theme) {
    const html = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');

    if (theme === 'dark') {
      html.classList.add(DARK_CLASS);
      if (toggleBtn) {
        toggleBtn.innerHTML = '☀️ Claro';
      }
    } else {
      html.classList.remove(DARK_CLASS);
      if (toggleBtn) {
        toggleBtn.innerHTML = '🌙 Oscuro';
      }
    }

    // Guardar preferencia en localStorage
    localStorage.setItem(STORAGE_KEY, theme);
  }

  /**
   * Inicializa el tema al cargar la página
   * Usa el tema guardado o el del sistema si no hay preferencia guardada
   */
  function initTheme() {
    const storedTheme = getStoredTheme();
    const theme = storedTheme || getSystemTheme();
    applyTheme(theme);
  }

  /**
   * Configura el event listener para el botón de toggle
   */
  function setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const html = document.documentElement;
        const currentTheme = html.classList.contains(DARK_CLASS) ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
      });
    }
  }

  // Inicializar tema inmediatamente
  initTheme();

  // Configurar toggle cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupThemeToggle);
  } else {
    setupThemeToggle();
  }

})();
