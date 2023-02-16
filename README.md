# api-mysql-express

*Proyecto basado en la creacion de una Base de Datos en MySql por medio del XAMPP*

**Tecnologias usadas:**

## ***1. Mysql / SQL***

## ***2. JS***

## ***3. Node.js***

## ***4. Express***
- Frameqork Express = marco de tp web para pdoer crear aplicaciones web, servidores web usando js y nodejs 

## ***5. Cliente REST : Postman***
- Entre otros puede haber 
  - REST Client
  - THUNDER Client
  - Insomnia
  
## ***6. BABEL***
### ¿Qué es Babel?
- Babel es un "compilador" (o transpilador) para JavaScript. Básicamente permite transformar código escrito con las últimas y novedosas características de JavaScript y transformarlo en un código que sea entendido por navegadores más antiguos.


## 7. ***Nodemon***
- Programa de utilidad que puede monitorear cualquier cambio en su fuente de directorio y reiniciar automáticamente su servidor o aplicaciones.

## 8. ***Morgan***
- Morgan: Morgan es un Middleware de nivel de solicitud HTTP. Es una gran herramienta que registra las requests junto con otra información dependiendo de su configuración y el ajuste preestablecido utilizado 
- Ver en consola las peticiones que hago 


---
## Dependencias del desarrollador o devDependencies:
    "@babel/cli": "^7.20.7",
    "@babel/core": "^7.20.12",
    "@babel/node": "^7.20.7",
    "@babel/preset-env": "^7.20.2",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.20"


## Dependenciencias o "dependencies" instaladas :
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "promise-mysql": "^5.2.0"


Debes crear un archivo **.env** con las variables de entorno para que el proyecto funcione:
1. HOST : *****
2. PASSWORD: *****
3. USER : *****
4. DATABASE : nombre de la BBDD

Estas variables de entorno estaran a disposicion y para poder hacer uso de ellas usamos la funcion **config()** de nuestro objeto {config} de nuestro paquete *"dotenv"*. Es por eso muy importante definir las variables de entorno en nuestro archivo .env

De esta forma ya tendremos nuestro archivo config con los valores necesarios para conectarme a la BBDD

---
---
# English Version

*Project based on the creation of a MySql Database using XAMPP.*

**Technologies used:**

## ***1. Mysql / SQL***

## ***2. JS***

## ***3. Node.js***

## ***4. Express***.
- Frameqork Express = framework for building web applications, web servers using js and nodejs 

## ***5. REST client : Postman***
- Among others there can be 
  - REST Client
  - THUNDER Client
  - Insomnia
  
## ***6. BABEL***
### What is Babel?
- Babel is a "compiler" (or transpiler) for JavaScript. It basically allows you to transform code written with the latest and newest JavaScript features and transform it into code that is understood by older browsers.


## 7. ***Nodemon***
- Utility program that can monitor any changes in your source directory and automatically restart your server or applications.

## 8. ***Morgan***
- Morgan: Morgan is an HTTP request level middleware. It is a great tool that logs requests along with other information depending on your configuration and the preset used. 
- View in cnsola the requests I make 


---
## Developer dependencies or devDependencies:
    "@babel/cli":"^7.20.7",
    "@babel/core": "^7.20.12",
    "@babel/node": "^7.20.7",
    "@babel/preset-env": "^7.20.2",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.20".


## Dependencies installed :
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "promise-mysql": "^5.2.0".


You must create an **.env** file with the environment variables for the project to work:

1. HOST : *****
2. PASSWORD: *****
3. USER : *****
4. DATABASE : database name

These environment variables will be available and to make use of them we use the **config()** function of our {config} object of our *"dotenv "* package. That's why it's very important to define the environment variables in our .env file.

This way we will have our config file with the necessary values to connect to the database.