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

### Calendario interno compartido

- **POST** `/calendar` - Crear un calendario interno compartido.  
  **Request body:**

```json
    {
      "name": string NOT NULL
    }
```

- **GET** `/calendar/:calendarId` - Obtener un calendario interno compartido por la id del calendario.
- **GET** `/calendar/calendarList` - Obtener una lista de todos los calendarios internos compartidos.

### Evento

- **POST** `/event/:calendarId` - Crear un evento en un calendario interno compartido por la id del calendario.  
  **Request body:**

```json
    {
      "name": string NOT NULL,
      "date": date NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
    }
```

- **GET** `/event/:eventId` - Obtener un evento de un calendario interno compartido por la id del evento.
- **GET** `/event/eventList/:calendarId` - Obtener una lista de todos los eventos de un calendario interno compartido por la id del calendario.
- **PUT** `/event/update/:eventId` - Actualizar un evento de un calendario interno compartido por la id del evento.

```json
    {
      "name": string,
      "date": date (format: YYYY-MM-DDT00:00:00-00:00),
    }
```

- **DELETE** `/event/delete/:eventId` - Eliminar un evento de un calendario interno compartido por la id del evento.

### Reunión

- **POST** `/meeting/:calendarId` - Crear una reunión en un calendario interno compartido por la id del calendario.  
  **Request body:**

```json
     {
       "name": string NOT NULL,
       "description": string,
       "link": string NOT NULL,
       "dateTime": date (format: YYYY-MM-DDT00:00:00-00:00),
       "projectId": string
     }
```

- **GET** `/meeting/:meetingId` - Obtener una reunión de un calendario interno compartido por la id de la reunión.
- **GET** `/meeting/meetingList/:calendarId` - Obtener una lista de todas las reuniones de un calendario interno compartido por la id del calendario.
- **PUT** `/meeting/update/:meetingId` - Actualizar una reunión de un calendario interno compartido por la id de la reunión.  
  **Request body:**

```json
     {
       "name": string,
       "description": string,
       "link": string,
       "dateTime": date (format: YYYY-MM-DDT00:00:00-00:00)
     }
```

- **DELETE** `/meeting/delete/:meetingId` - Elimina una reunión de un calendario interno compartido por la id de la reunión.

### Calendario (Google calendar)

**Colocar el archivo .json de credenciales de google calendar en la ruta 'backend/data/secret-key.json'**

- **Lista de calendarios:**

  - **GET** `/calendar/v3/calendarList` - Obtener una lista de todos los calendarios de un usuario.

- **Calendarios:**
  - **GET** `/calendar/v3/calendars/:calendarId?` - Obtener un calendario de un usuario por la id del calendario.
  - **POST** `/calendar/v3/calendars` - Crear un calendario de un usuario.  
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
  - **POST** `/calendar/v3/events/:calendarId/event` - Crear un evento en un calendario de un usuario por la id del calendario (Calendario principal por defecto).  
    **Request body:**
    ```json
      {
        "summary": string NOT NULL,
        "description": string NOT NULL,
        "location": string NOT NULL,
        "start": {
          "dateTime": date NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
          "timeZone": string NOT NULL (format: Continent/Country/City),
        },
        "end": {
          "dateTime": date NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
          "timeZone": string NOT NULL (format: Continent/Country/City),
        },
      }
    ```
  - **PUT** `/calendar/v3/events/:calendarId?/event/:eventId` - Actualizar un evento en un calendario de un usuario por la id del calendario y la id del evento (Calendario principal por defecto).  
    **Request body:**
    ```json
      {
        "summary": string NOT NULL,
        "description": string NOT NULL,
        "location": string NOT NULL,
        "start": {
          "dateTime": date NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
          "timeZone": string NOT NULL (format: Continent/Country/City),
        },
        "end": {
          "dateTime": date NOT NULL (format: YYYY-MM-DDT00:00:00-00:00),
          "timeZone": string NOT NULL (format: Continent/Country/City),
        },
      }
    ```
  - **DELETE** `/calendar/v3/events/:calendarId?/event/:eventId` - Eliminar un evento en un calendario de un usuario por la id del calendario y la id del evento (Calendario principal por defecto).

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
