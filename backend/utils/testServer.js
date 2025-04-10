// Se levanta un servidor de prueba, este servidor de prueba
// trabaja con JEST y SuperTest, se hace para verificar la
// conexión al servidor y la base de datos; y depurar errores.

import express from 'express';
import supertest from 'supertest';

function testServer(route) {

    // Inversión de control: Principio de diseño que permite controlar
    // el flujo de ejecución de un módulo o clase. En este caso en lugar de
    // que el servidor decida la ruta, la ruta decidirá con que servidor trabajará

    const app = express();
    route(app);

    //Se envuelve el servidor dentro del supertest
    return supertest(app);

}

module.exports = testServer;