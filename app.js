// const {  writeLog, readLog} = require("./logger")
//  writeLog("Karen");
// readLog();

//Creo una variable que llame a la libreria express
const express = require('express');

//Variable me ejecuta la libreria
const app = express();

//Se debe instalar express con el comando
//npm install express --save

//Módulo para traer todas las rutas de mi proyecto
const path = require("path");

//Cuando la app de express reciba un get en el navegador en la ruta raiz("/")
//activa una función que recibe dos parametros que son el request(solicitud)
//y el response (respuesta) va a mandar un mensaje al browser con la función send
app.get('/', (req,res) => {
    //res.send("Hello world Karen");
    //res.sendFile("/Users/karengomez/Desktop/node-express-app/index.html");

    //__dirname es una constante que representa la ruta absoluta del proyecto
    res.sendFile(path.join(__dirname+"/index.html"));
});

const port=3002;
const hostname="localhost";
//Siempre va a ir al final de mi archivo por buena practica
//aqui ejecuto mi server para que este disponible
app.listen(port, hostname, () => {
    console.log(`App listening at http://${hostname}:${port}`);
});

//Instalación de nodemon usamos el comando
//npm install --save-dev nodemon
//en el package.json debo colocar un script
//para que se ejecute de manera automatica con el comando npm start
//agregar la siguiente linea en script
// "start": "nodemon nombre_archivo.js"