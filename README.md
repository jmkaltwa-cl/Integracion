# Congreso Tech — Integración Frontend + Backend

Aplicación web del congreso universitario con integración completa entre React (Vite) y API REST (Express + MongoDB).

## Requisitos

- Node.js 18+
- MongoDB en ejecución (local o Atlas)

## Cómo ejecutar

### 1. Backend (puerto 4000)

```bash
cd backend
npm install
npm run dev
```

Debe mostrar: `MongoDB conectado correctamente` y `Servidor en puerto 4000`.

### 2. Frontend (puerto 5173)

En otra terminal:

```bash
npm install
npm run dev
```

Abrir en el navegador: **http://localhost:5173**

## Funcionalidades

- **Crear** inscripción desde el formulario del inicio
- **Ver** listado en *Ver inscripciones* (`/registros`)
- **Editar** y **Eliminar** desde cada tarjeta del listado

## Stack

- Frontend: React, Vite, Axios, React Router, Tailwind
- Backend: Express, Mongoose, CORS
- Base de datos: MongoDB
