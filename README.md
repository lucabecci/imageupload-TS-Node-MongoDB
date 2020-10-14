# API para imagenes.

*API para imágenes donde el usuario podrá crear, editar, borrar y ver sus imágenes. Solamente sera el backend.*

---

## 1. Comenzando

Para obtener el proyecto debemos:

```jsx
git clone https://github.com/lucabecci/imageupload-TS-Node-MongoDB/tree/main/src
//copiamos el directorio
```

## 2. Pre-requisitos

Que necesitamos para un buen funcionamiento del directorio:

- node.JS > 10.x
- npm > 6.x

## 3. Instalación

Para tener un entorno de desarrollo de este proyecto tenemos que: 

```jsx
cd imagesapp-mongo-node //entramos al directorio
npm install //instalamos las dependencias del proyecto
npm run dev //podemos correrlo con el script dev(se ejecuta con nodemon)
//o
npm start //podemos correrlo con el script start(se ejecuta con node)
```

## 4. Estructura del proyecto:

```python
|--dist
|--node_modules
|--src
    |--controllers
        photo.controller.ts
    |--database
        |--database.ts
    |--helpers
        |--photo.check.ts
    |--libs
        |--multer.ts
    |--models
        |--Photo.ts
    |--routes
        |--index.routes.ts
    |--app.ts
    |--index.ts
|--uploads
|--.env
|--.gitignore
|--.prettierignore
|--.prettier.json
|--commitlint.config.js
|--nodemon.json 
|--package-lock.json
|--package.json
|--tsconfig.json
```

## 4. Construido con:

Herramientas que utilice para crear esta API:

Produccion:

- [Express](https://expressjs.com) - Infraestructura de aplicaciones web Node.js.
- [Morgan](https://www.npmjs.com/package/morgan) - Es un middleware para registrador de solicitudes HTTP para node.js.
- [Uuid](https://www.npmjs.com/package/uuid) - Para la creación de UUID RFC4122.
- Ri[mraf](https://www.npmjs.com/package/rimraf) - El comando de UNIX rm -rf para node.
- M[ulter](https://www.npmjs.com/package/multer) - Middleware de node.js para el manejo multipart/form-data, que se usa principalmente para cargar archivos.
- [Mongoose](https://mongoosejs.com/) - Biblioteca basada en esquemas para modelar los datos de su aplicación.
- [Fs-extra](https://www.npmjs.com/package/fs-extra) - Agrega métodos de sistema de archivos que no están incluidos en el fs módulo nativo y agrega compatibilidad con promesas a los fs métodos.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Dotenv es un módulo de dependencia  que carga variables de entorno desde un .envarchivo a process.env.

Desarrollo: 

- [Nodemon](https://www.npmjs.com/package/nodemon) - Herramienta para actualizar la aplicación al recibir el cambio.
- [Ts-node](https://www.npmjs.com/package/ts-node) - Ejecución de TypeScript y REPL para node.js.
- [Typescript](https://www.typescriptlang.org/) - Superconjunto de JavaScript, que añade tipos estáticos y objetos basados en clases.
- [Husky](https://www.npmjs.com/package/husky) - Husky es una herramienta que puede prevenir el mal git commit, git push y más. También podemos utilizarla para realizar varias ejecuciones de scripts antes de hacer un commit o un push.
- [CommitLint](https://commitlint.js.org/#/) - Herramienta para utilizar una convención de commits, nuestro caso es Conventional Comits.
- [Prettier](https://prettier.io/) - Es una herramienta que sirve como  formateador de código.

## 5. Versionado

Para el versionado se utilizo [ConventionalCommits](https://www.conventionalcommits.org/en/v1.0.0/)

## 6. Autor

***Luca Becci -** trabajo y documentación.*

- [github](https://github.com/lucabecci)
- [twitter](https://twitter.com/lucabecci)