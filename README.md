# SPA con React, TypeScript y Fetch

Este proyecto es una **Single Page Application (SPA)** construida desde cero con **React + TypeScript** sin usar React Router, que **navega entre rutas internas y carga contenido HTML dinámico usando `fetch()`**.

## Tecnologías usadas

- React (sin enrutador)
- TypeScript
- Vite
- HTML/CSS
- Fetch API

## ¿Cómo funciona?

- Utiliza el **estado global `path`** para manejar la ruta actual.
- Al cambiar de ruta (con clicks o historial del navegador), se hace un `fetch()` al HTML correspondiente ubicado en `/pages/ruta.html`.
- El contenido cargado se inyecta dinámicamente en el DOM usando `dangerouslySetInnerHTML`.
- Si ocurre un error (por ejemplo, ruta inválida o fetch fallido), se muestra un mensaje amigable con el componente `ContentError`.

## Navegación

Desde el componente `Header`, los enlaces modifican el `path` y llaman a `window.history.pushState()` para evitar recargar la página. Luego el hook `useSpaApp` detecta el cambio y actualiza el contenido visible.

## Instalación y ejecución

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/Gonzalez-Nahuel/react-spa-fetch
   cd spa-react-fetch
   ```
2. Instalá las dependencias:
   ```bash
   npm install
   ```
3. Ejecutá la app:
   ```bash
   npm run dev
   ```
