# Backend Guide

# Endpoints de la API

## URL Base: `http://localhost:3000`

### Autenticación

- **Registro de Usuario:**
  - **POST** `/auth/register` - Crear una cuenta de usuario.
- **Login de Usuario:**
  - **POST** `/auth/login` - Iniciar sesión y obtener un token.
- **Logout de Usuario:**
  - **POST** `/auth/logout` - Cerrar sesión eliminando la cookie del token JWT.

### Usuarios
- **Obtener Todos los Usuarios:**
  - **GET** `/users/getAllUsers` - Obtener una lista de todos los usuarios registrados.
  - **POST** `/users/createUser` - Crear usuarios.  

 ### Calendario (Google calendar)
- **Lista de calendarios:**
  - **GET** `/calendar/v3/calendarList` - Obtener una lista de todos los calendarios de un usuario.
 
- **Calendarios:**
  - **GET** `/calendar/v3/calendars/:calendarId?` - Obtener un calendario de un usuario por la id del calendario.
  - **POST** `/calendar/v3/calendars` - Crea un calendario de un usuario.  
  **Request body:**
    ```json
      {
        "summary": string NOT NULL,
        "description": string NOT NULL,
        "location": string NOT NULL,
        "timeZone": string NOT NULL (format: Continent/Country/City),
      }
    ```  
- **Eventos:**
  - **GET** `/calendar/v3/events/:calendarId?` - Obtener una lista de los eventos un calendario de un usuario por la id del calendario (Calendario principal por defecto).  
  - **POST** `/calendar/v3/events/:calendarId/event` - Crea un evento en un calendario de un usuario por la id del calendario (Calendario principal por defecto).  
  **Request body:**
    ```json
      {
        "summary": string NOT NULL,
        "description": string NOT NULL,
        "location": string NOT NULL,
        "start": {
          "dateTime": string NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
          "timeZone": string NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
        },
        "end": {
          "dateTime": string NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
          "timeZone": string NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
        },
        "attendees": [],
      }
    ```  
  - **PUT** `/calendar/v3/events/:calendarId?/event/:eventId` - Actualiza un evento en un calendario de un usuario por la id del calendario y la id del evento (Calendario principal por defecto).  
    **Request body:**
    ```json
      {
        "summary": string NOT NULL,
        "description": string NOT NULL,
        "location": string NOT NULL,
        "start": {
          "dateTime": string NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
          "timeZone": string NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
        },
        "end": {
          "dateTime": string NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
          "timeZone": string NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
        },
      }
    ```  
  - **DELETE** `/calendar/v3/events/:calendarId?/event/:eventId` - Elimina un evento en un calendario de un usuario por la id del calendario y la id del evento (Calendario principal por defecto).  

# Estructura del Proyecto

- 📁 backend
  - 📁 prisma
    - 📄 schema.prisma
    - 📄 seed.js
  - 📁 src
    - 📁 controllers
      - 📄 userController.ts
    - 📁 middlewares
      - 📄
    - 📁 models
      - 📄
    - 📁 prisma
      - 📄 prisma.ts
    - 📁 routes
      - 📄 home.routes.ts
      - 📄 index.ts
      - 📄 user.routes.ts
    - 📁 schemas
      - 📄 userSchema.ts
    - 📁 utils
      - 📄
    - 📄 server.ts
  - 📄 .env
  - 📄 .gitignore
  - 📄 package-lock.json
  - 📄 package.json
  - 📄 README.md

# Tecnologías Utilizadas

### Backend

- **Node.js**: 🌟 Entorno de ejecución para JavaScript en el servidor.
- **Express**: 🚀 Framework web para Node.js que facilita la creación de aplicaciones y API robustas.
- **Prisma**: 🔗 ORM (Object-Relational Mapping) para Node.js y TypeScript que simplifica las consultas a la base de datos.
- **bcrypt**: 🔒 Biblioteca para el cifrado de contraseñas.
- **cors**: 🌐 Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **dotenv**: 📦 Biblioteca para cargar variables de entorno desde un archivo `.env`.
- **jsonwebtoken**: 🔑 Biblioteca para trabajar con JSON Web Tokens (JWT) para la autenticación.
- **morgan**: 📋 Middleware para el registro de solicitudes HTTP.

### ECMAScript 6

- **Modules**: 📦 Importación y exportación de módulos.
