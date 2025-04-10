# 🍕 API de Pizzas (Backend Node.js + Express + Jest)

API RESTful para prueba técnica de coding cloud, esta api debe traer datos de un archivo
JSON. El backend debe realizar pruebas mediante el uso de Jest.

## 📌 Características Principales

- Endpoints para CRUD de pizzas (GET, POST, PUT, DELETE)
- Datos persistentes en archivo JSON (simulación de DB)
- Estructura MVC modularizada
- Validación de datos integrada
- 100% testeada con Jest (cobertura >90%)

## 🚀 Instalación, Uso y Estructura

### Dependencias utilizadas
- Babel     |    7.23.3
- Cross-env |    7.0.3
- Jest      |    29.7.0
- Nodemon   |    3.1.0
- supertest |    6.3.4
- express   |    5.1.0"
- nodemon   |    3.1.9"
- supertest |    7.1.0

### Pasos para Configuración

1. Clonar repositorio:
   ```bash
   git clone https://github.com/neor4d/Prueba_tecnica.git

2. Instalar dependencias
    npm install

3. Realizar test antes de iniciar
    npm run test

4. Iniciar servidor
    npm run dev


### Estructura de Carpetas / Explicación

- Estructura Modelo Vista Controlador (MVC)

backend/
├── __tests__/
│   └── routes/
│       └── pizzaRoutes.test.js     ||  Test de Jest para las rutas y controladores de la api.
|
├── controller /                    ||  Carpeta contenedora de los controladores necesarios para la api.
│   └── pizzaControllers.js
|
├── data /                          ||  Carpeta que contiene el archivo json a manera de "Base de datos".
│   └── example-pizzas.json
|
├── routes /                        ||  Carpeta contenedora de los archivos que manejan las rutas de la api.
│   └── pizzaRoutes.js
|
├── utils /                         ||  Carpeta contenedora de los archivos que manejan las utilidades de la api.
│   └── jsonUtils.js                    || Maneja los datos del archivo JSON y los devuelve parseados.
|
├── app.js                          ||  Archivo principal donde inicia el servidor
├── jest.config.js
├── babel.config.js
└── package.json
└── README.md