# Backend ProJet

## Despliegue

El proyecto ProJet ha sido desplegado en [Render](https://render.com). Puedes acceder a la aplicación en el siguiente enlace:

- **URL de la aplicación**: [https://s16-09-n-node-react.onrender.com/api/v1/](https://s16-09-n-node-react.onrender.com/api/v1/)

### Documentación de la API

La documentación de la API generada con Swagger está disponible en el siguiente enlace:

- **Swagger Docs**: [https://s16-09-n-node-react.onrender.com/api/v1/docs/](https://s16-09-n-node-react.onrender.com/api/v1/docs/)

# Estructura del Proyecto

- 📁 backend
  - 📁 prisma
    - 📁 migrations
  - 📁 public
    - 📁 ico
    - 📁 img
  - 📁 src
    - 📁 api
      - 📁 cadenlar
      - 📁 compony
      - 📁 dopcument
      - 📁 event
      - 📁 invalid
      - 📁 meeting
      - 📁 milestone
      - 📁 project
      - 📁 role
      - 📁 skill
      - 📁 task
      - 📁 user
      - 📁 userProject
      - 📁 userSkill      
    - 📁 config
      - 📁 env
      - 📁 swagger
    - 📁 controllers
    - 📁 middlewares
    - 📁 models
    - 📁 routes
    - 📁 schemas
    - 📁 services
    - 📁 shared
    - 📁 utils
    - 📄 server.ts
  - 📄 .env.example
  - 📄 .gitignore
  - 📄 .prettierrc
  - 📄 Dockerfile
  - 📄 package-lock.json
  - 📄 package.json
  - 📄 README.md
  - 📄 tsconfig.json
  - 📄 tsup.config.ts

## Tecnologías Utilizadas

- **Node.js**: 🌟 Entorno de ejecución para JavaScript en el servidor.
- **Express**: 🚀 Framework web para Node.js que facilita la creación de aplicaciones y API robustas.
- **Prisma**: 🔗 ORM (Object-Relational Mapping) para Node.js y TypeScript que simplifica las consultas a la base de datos.
- **bcrypt**: 🔒 Biblioteca para el cifrado de contraseñas.
- **cookie-parser**: 🍪 Middleware para analizar cookies en solicitudes HTTP.
- **cors**: 🌐 Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **dotenv**: 📦 Biblioteca para cargar variables de entorno desde un archivo `.env`.
- **google-auth-library**: 🔐 Biblioteca para la autenticación y autorización de Google.
- **googleapis**: 📊 Cliente para la API de Google.
- **helmet**: 🛡️ Middleware para ayudar a asegurar aplicaciones Express.
- **jsonwebtoken**: 🔑 Biblioteca para trabajar con JSON Web Tokens (JWT) para la autenticación.
- **serve-favicon**: 🎨 Middleware para servir iconos de favicon.
- **swagger-jsdoc**: 📜 Generador de especificaciones Swagger a partir de comentarios en el código.
- **swagger-ui-express**: 🖥️ Middleware para servir la interfaz de usuario de Swagger.
- **swagger-themes**: 🎨 Temas para Swagger UI.
- **zod**: 🧩 Biblioteca para validación de esquemas en TypeScript y JavaScript.
- **@clerk/clerk-sdk-node**: 🔐 SDK de Clerk para la autenticación y gestión de usuarios.

## Dependencias de Desarrollo

- **@ianvs/prettier-plugin-sort-imports**: 🛠️ Plugin de Prettier para ordenar las importaciones.
- **@types/bcrypt**: 🛠️ Tipos de TypeScript para bcrypt.
- **@types/cookie-parser**: 🛠️ Tipos de TypeScript para cookie-parser.
- **@types/cors**: 🛠️ Tipos de TypeScript para cors.
- **@types/dotenv**: 🛠️ Tipos de TypeScript para dotenv.
- **@types/express**: 🛠️ Tipos de TypeScript para Express.
- **@types/helmet**: 🛠️ Tipos de TypeScript para helmet.
- **@types/jsonwebtoken**: 🛠️ Tipos de TypeScript para jsonwebtoken.
- **@types/morgan**: 🛠️ Tipos de TypeScript para morgan.
- **@types/node**: 🛠️ Tipos de TypeScript para Node.js.
- **@types/serve-favicon**: 🛠️ Tipos de TypeScript para serve-favicon.
- **@types/swagger-jsdoc**: 🛠️ Tipos de TypeScript para swagger-jsdoc.
- **@types/swagger-ui-express**: 🛠️ Tipos de TypeScript para swagger-ui-express.
- **morgan**: 📋 Middleware para el registro de solicitudes HTTP.
- **prisma**: 🗄️ Herramienta de ORM para bases de datos.
- **rimraf**: 🧹 Utilidad para eliminar archivos y carpetas.
- **tsc-alias**: 🔄 Herramienta para transformar alias de paths en TypeScript.
- **tsup**: 📦 Empaquetador de TypeScript.
- **tsx**: 🏎️ Ejecutador de scripts TypeScript.
- **typescript**: ✨ Lenguaje de programación basado en JavaScript que añade tipos estáticos.

### ECMAScript 6

- **Modules**: 📦 Importación y exportación de módulos.

## Cómo Empezar

Instrucciones para clonar el repositorio, instalar dependencias y ejecutar el proyecto.

```bash
git clone https://github.com/No-Country-simulation/s16-09-n-node-react
cd s16-09-n-node-react
cd backend
npm install
npm start
```