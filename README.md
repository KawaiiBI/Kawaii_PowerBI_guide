<div align="center">

<img src="https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" alt="Power BI"/>
<img src="https://img.shields.io/badge/Microsoft%20Fabric-0078D4?style=for-the-badge&logo=microsoft&logoColor=white" alt="Microsoft Fabric"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
<img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages"/>

<br/><br/>

# 🌸 Power BI Guide

### Una guía educativa completa sobre Power BI y Microsoft Fabric  
#### con tono cercano, kawaii y mucho cariño ✨

<br/>

[🌐 Ver la web en vivo](https://tu-usuaria.github.io/power-bi-guide/) · [📺 Canal de YouTube](https://youtube.com/@kawaipowerbi) · [💬 ¿Tienes dudas? Abre un issue](https://github.com/tu-usuaria/power-bi-guide/issues)

<br/>

</div>

---

## 🎀 ¿Qué es Power BI Guide?

**Power BI Guide** es una web educativa de referencia, bilingüe **(🇪🇸 ES / 🇬🇧 EN)**, para aprender Power BI y Microsoft Fabric desde cero hasta nivel avanzado. Nació del canal de YouTube [**Kawaii Power BI**](https://youtube.com/@kawaipowerbi) y comparte su misma filosofía:

> *Técnico, pero cercano. Riguroso, pero amigable. Serio, pero con alma kawaii.* 🌸

No es un manual aburrido. Es como si una amiga experta en datos se sentara contigo a explicarte las cosas con paciencia, ejemplos reales y un café caliente ☕.

---

## ✨ Características

- 🌍 **Bilingüe ES / EN** — cambio de idioma instantáneo sin recargar página, con preferencia guardada en localStorage
- 🌙 **Tema claro y oscuro** — toggle suave con persistencia entre visitas
- 🔍 **Buscador local** — sin servidor, indexado en JavaScript al cargar
- 💻 **Syntax highlighting** — bloques de código DAX y M con Prism.js y botón de copiar
- 📱 **Responsive** — diseñada para desktop, tablet y mobile
- ♿ **Accesible** — atributos ARIA, navegación por teclado, contraste WCAG
- ⚡ **100% estática** — sin backend, sin base de datos, desplegable en GitHub Pages
- 🎀 **Personalidad propia** — tono kawaii, notas visuales diferenciadas, badges de nivel

---

## 📚 Contenido

| Sección | Descripción | Niveles |
|---|---|---|
| 🔢 **Funciones DAX** | CALCULATE, contextos, inteligencia de tiempo... | 🟢 🟡 🔴 |
| 🔄 **Lenguaje M** | Power Query, transformaciones, patrones | 🟢 🟡 🔴 |
| 🧩 **Conceptos Power BI** | Fundamentos, visuals, publicación | 🟢 🟡 |
| 🏗️ **Modelado de Datos** | Relaciones, esquema estrella, cardinalidad | 🟢 🟡 🔴 |
| 🔗 **Power Query** | ETL, conectores, buenas prácticas | 🟢 🟡 🔴 |
| 🌐 **Microsoft Fabric** | Lakehouse, Pipelines, DirectLake | 🟡 🔴 |
| 📄 **TMDL** | Tabular Model Definition Language | 🟡 🔴 |
| 🎨 **Diseño y UX** | Dashboards, color, layout, accesibilidad | 🟢 🟡 🔴 |
| 🔒 **Gobernanza** | Seguridad, RLS, OLS, certificación | 🟡 🔴 |
| ⭐ **Mejores Prácticas** | Naming, optimización, rendimiento | 🟡 🔴 |

**Niveles:** 🟢 Principiante · 🟡 Intermedio · 🔴 Avanzado

---

## 🛠️ Stack tecnológico

```
HTML5 semántico
CSS3 con variables CSS (theming + dark mode)
JavaScript vanilla — sin frameworks
Prism.js — syntax highlighting para DAX y M
i18next (CDN) — sistema de traducción ES/EN
```

Sin dependencias de backend. Sin base de datos. Sin configuración de servidor.  
Solo abre `index.html` y funciona. 🌸

---

## 🗂️ Estructura del proyecto

```
power-bi-guide/
├── index.html                  ← Landing page
├── .nojekyll                   ← Necesario para GitHub Pages
├── assets/
│   ├── css/
│   │   ├── main.css            ← Variables y estilos globales
│   │   ├── themes.css          ← Tema claro / oscuro
│   │   ├── components.css      ← Cards, badges, bloques de código
│   │   └── layout.css          ← Sidebar, header, grid
│   ├── js/
│   │   ├── main.js             ← Inicialización general
│   │   ├── theme.js            ← Toggle claro/oscuro
│   │   ├── i18n.js             ← Sistema de traducción
│   │   └── search.js           ← Buscador local
│   └── images/
│       └── logo.svg
├── locales/
│   ├── es.json                 ← Textos en español de España
│   └── en.json                 ← Textos en inglés
├── topics/
│   ├── dax.html
│   ├── modelado.html
│   ├── fabric.html
│   └── ...
└── components/
    ├── header.html
    ├── sidebar.html
    └── footer.html
```

---

## 🚀 Cómo ejecutar en local

No necesitas instalar nada. Solo:

```bash
# Clona el repositorio
git clone https://github.com/tu-usuaria/power-bi-guide.git

# Entra en la carpeta
cd power-bi-guide

# Abre con Live Server (VS Code) o simplemente:
# → Haz doble clic en index.html
```

> 💡 **Tip kawaii:** Se recomienda usar la extensión **Live Server** de VS Code para que el cambio de idioma y la carga dinámica de componentes funcionen correctamente en local (algunas peticiones fetch necesitan un servidor HTTP, aunque sea local).

---

## 🌍 Despliegue en GitHub Pages

1. Sube el repositorio a GitHub
2. Ve a **Settings → Pages**
3. Source: **Deploy from branch** → `main` → `/ (root)`
4. Guarda y espera 1-2 minutos
5. 🎉 Tu web estará disponible en `https://tu-usuaria.github.io/power-bi-guide/`

---

## 🤝 Contribuciones

¿Encontraste un error? ¿Quieres sugerir contenido nuevo? ¡Eres bienvenida/o! 💕

1. Abre un **Issue** describiendo la mejora o el error
2. Si quieres contribuir directamente:
   ```bash
   git checkout -b mi-mejora
   # Haz tus cambios
   git commit -m "Descripción clara de la mejora"
   git push origin mi-mejora
   ```
3. Abre una **Pull Request** con una descripción clara de los cambios

Por favor, mantén el tono kawaii y cercano en cualquier contenido nuevo 🌸

---

## 📺 Canal de YouTube

Este proyecto es la extensión web del canal **Kawaii Power BI**, donde encontrarás:

- 📹 Tutoriales completos de Power BI y Microsoft Fabric
- 🎯 Shorts con tips rápidos
- 💡 Explicaciones visuales de conceptos complejos

👉 [**Suscríbete aquí**](https://youtube.com/@kawaipowerbi) y no te pierdas nada 🎀

---

## 📄 Licencia

[![CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-E74E37?style=for-the-badge&logo=creativecommons&logoColor=white)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

Este proyecto está protegido bajo la licencia **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)**.

Esto significa que:

- ✅ Puedes **ver y compartir** el contenido citando a la autora
- ❌ **No** puedes usarlo con fines comerciales
- ❌ **No** puedes modificarlo ni crear obras derivadas
- ❌ **No** puedes redistribuirlo como propio

© 2025 [Kawaii Power BI](https://youtube.com/@kawaipowerbi) · Todos los derechos reservados bajo los términos de la licencia indicada.  
Para usos especiales o colaboraciones, [contáctame](https://github.com/tu-usuaria/power-bi-guide/issues). 💕

---

<div align="center">

Hecho con 💕 y mucho café por **Kawaii Power BI**

*Aprender datos puede ser bonito* ✨

<br/>

⭐ **¿Te ha sido útil? ¡Dale una estrellita al repo!** ⭐

</div>
