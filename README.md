# 🐶 PetShop Manager

**PetShop Manager** es un Sistema de Gestión Integral para PetShop, diseñado para centralizar la administración de productos, ventas, compras, proveedores y gastos.

## 🚀 Características principales
- **Inventario**: Registro de productos, control de stock en tiempo real.  
- **Ventas y Compras**: Facturas, cálculo de impuestos, actualización automática de inventario.  
- **Proveedores y Gastos**: Base de datos de proveedores y egresos.  
- **Dashboard**: Resumen de ventas del mes.  
- **Autenticación**: Login con soporte para múltiples dispositivos y sesiones activas hasta que el usuario cierre sesión.  

---

## 📂 Estructura del proyecto
```
web/
├─ backend/   → Servidor Node.js + Express + SQLite
├─ frontend/  → Aplicación React + Vite
└─ README.md
```

---

## 🔧 Instalación y ejecución en local

### 1. Backend
```bash
cd backend
npm install
npm start
```
- Servirá la API en `http://localhost:4000/api`.

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```
- Abrir en `http://localhost:5173`.

---

## 🌐 Despliegue en Producción

### Backend (Render)
1. Sube este repo a GitHub.  
2. En [Render](https://render.com):  
   - New → Web Service.  
   - Root Directory → `backend/`.  
   - Build Command → `npm install`.  
   - Start Command → `node server.js`.  
   - Agregar variables de entorno (`.env.example`).  

Render generará una URL como:
```
https://mi-backend.onrender.com
```

### Frontend (GitHub Pages)
1. Edita `frontend/src/api.js` con la URL del backend:  
   ```js
   const API = axios.create({
     baseURL: "https://mi-backend.onrender.com/api"
   });
   ```
2. Construye el proyecto:  
   ```bash
   npm run build
   ```
3. Sube la carpeta `dist/` a la rama `gh-pages`.  
4. Activa **GitHub Pages** en tu repo.  

Tu frontend quedará en:  
```
https://ezekill34.github.io/web
```

---

## 👤 Autor
Proyecto desarrollado por **ezekill34**.  
