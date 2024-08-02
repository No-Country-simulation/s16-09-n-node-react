# ProJet

## Descripción

Este proyecto es una aplicación web completa que incluye un backend desarrollado con Node.js, y un frontend construido con React. Proporciona funcionalidades para la gestión de tareas, usuarios, proyectos, y más.

## Tecnologías Utilizadas

### Backend

- **Node.js**: Plataforma de desarrollo de servidor.
- **Express**: Framework web para Node.js.
- **Prisma**: ORM (Object-Relational Mapping) para bases de datos.
- **PostgreSQL**: Sistema de gestión de bases de datos.
- **TypeScript**: Lenguaje de programación que se compila a JavaScript.

### Frontend

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.

## Despliegue

El proyecto ProJet ha sido desplegado en [Render](https://render.com). Puedes acceder a la aplicación en el siguiente enlace:

- **URL Backend de la aplicación**: [https://s16-09-n-node-react.onrender.com/api/v1/](https://s16-09-n-node-react.onrender.com/api/v1/)

- **URL Fronend de la aplicación**: [https://s16-09-n-node-react-1.onrender.com/](https://s16-09-n-node-react-1.onrender.com/)

- **URL de Figma**: [Figma s16-09-n-node-react](https://www.figma.com/design/wBm89UzjTzL0b7z2SdEyYz/SIMULACION---NO-COUNTRY?node-id=60-1237&t=BemgiDCEim0X4oS5-1)

### Backend

Para más detalles sobre el backend, consulta el [README del Backend](./backend/README.md).

### Frontend

Para más detalles sobre el frontend, consulta el [README del Frontend](./frontend/README.md).

## Scripts Disponibles

En la raíz del proyecto, puedes ejecutar los siguientes comandos:

#### Instalación de Dependencias

Primero Ejecuta el siguiente comando en la raíz del proyecto para instalar `npm-run-all` y otras dependencias globales necesarias:
```bash
  npm install
```
Esto instalará todas las dependencias listadas en el package.json de la raíz del proyecto. Luego Podras :

- **Instalar Dependencias de Ambos (Frontend y Backend):**
```bash
  npm run install:all
```
Este comando utiliza npm-run-all para instalar las dependencias tanto del frontend como del backend de manera simultánea.

- **Instalar Dependencias del Backend:**
```bash
  npm install --prefix backend
```
Esto instalará todas las dependencias necesarias para el backend en su directorio correspondiente.
- **Instalar Dependencias del Frontend:**
```bash
  npm install --prefix frontend
```
Esto instalará todas las dependencias necesarias para el frontend en su directorio correspondiente.

### Desarrollo

- **Iniciar Ambos (Frontend y Backend) en Paralelo:**
```bash
 npm run start:all
```
Este comando utiliza npm-run-all para ejecutar tanto el servidor del frontend como el del backend al mismo tiempo.

- **Iniciar el Backend**:
```bash
  npm run start:backend
```
Esto iniciará el servidor del backend en modo de desarrollo.
- **Iniciar el Frontend**:
```bash
 npm run start:frontend
```
Esto iniciará el servidor del frontend en modo de desarrollo.

#### Construcción

- **Construir Ambos (Frontend y Backend):**
```bash
npm run build:all
```
Ejecuta los comandos de construcción para el frontend y backend en secuencia.

- **Construir el Backend:**
```bash
npm run build:backend
```
Compila el código del backend en la carpeta dist.
- **Construir el Frontend:**
```bash
npm run build:frontend
```
Genera la versión optimizada del frontend en la carpeta dist.

#### Base de Datos

- **Sembrar la Base de Datos:**
```bash
npm run db:seed
```
Esto inicializará la base de datos con datos de prueba utilizando Prisma.
- **Eliminar Datos de la Base de Datos:**
```bash
npm run db:delete
```
Elimina los datos de prueba de la base de datos.

## Licencia

Este proyecto está licenciado bajo la MIT License. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
