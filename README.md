
Notflix, the movie database. Search and lease.

Ejercicio para el curso Full Stack Developer de GeeksHubs donde se practíca la creación de un backend funcional de una tienda de alquiler de películas que maneje registro de usuarios y pedidos, y contenga una base de datos de las películas.

La base de datos utilizada para este proyecto es MongoDB.


## Pre-requisitos del proyecto para hacerlo funcionar en tu equipo local:

* Instalar **Nodejs** en nuestro equipo, descargándolo de su página oficial
https://nodejs.org/

* Clonar el proyecto en nuestro equipo con la consola:
```
$git clone 'url-del-repositorio'
```

* Instalar todas las dependecias con el siguiente comando:
```
npm install
```

* Arrancamos el servidor con el siguiente comando:
```
npm run start
```


## Tecnologías utilizadas en el proyecto:

* **express**: Instalamos express en nuestro proyecto:
```
npm install express
```
* **nodemon**: Instalamos nodemon en nuestro proyecto. También añadimos en nuestro **package.json** un script para poder ejecutarlo:
```
npm install nodemon
```
```
//AÑADIDO EN PACKAGE.JSON
"dev": "nodemon index.js"
```
```
//EJECUTAMOS EN TERMINAL
npm run dev
```
* **colors**: Instalamos colors en nuestro proyecto, para poder dar formato a los mensajes que aparezcan en consola.
```
npm install colors
```
* **morgan**: Instalamos morgan en nuestro proyecto, para poder mostrar mensajes por terminal al realizar peticiones al servidor.
```
npm install morgan
```
* **winston**: Instalamos winston en nuestro proyecto, creando la posibilidad de generar logs y guardarlos.
```
npm install wiston
```
* **cors**: Instalamos cors en nuestro proyecto, para tener un control de acceso a nuestra API:
```
npm install cors
```
* **jsonwebtoken**: Instalamos jsonwebtoken en nuestro proyecto para gestionar uso de tokens:
```
npm install jsonwebtoken
```
* **bcrypt**: Instalamos bcrypt en nuestro proyecto para encriptar contraseñas:
```
npm install bcrypt
```

```
La base de datos esta desplegada en Heroku y Atlas.
```
Para acceder a ella se puede usar el siguiente link:


##  https://notflix-database.herokuapp.com/


Con la ayuda de postman, podemos hacer cambios en nuestra base de datos.

Los comnados permitidos son:

**Para peliculas**:
```
Mostrar todas las películas. GET(.../movie/)
```
Buscar películas por ID. GET(.../movie/"id")
Buscar películas por título. GET(.../movie/"title")
Buscar películas por genero. GET(.../movie/"genre")
Buscar películas por reparto. GET(.../movie/"cast")
Buscar películas por ciudad. GET(.../movie/"location")
Buscar películas por disponibilidad. GET(.../movie/"available")
```
Crear película. POST(.../movie/"id")
Modificar película. PUT(.../movie/"id")
```
Borrar película. DELETE(.../movie/"id")
Borrar todas las películas. DELETE(.../movie/)


**Para usuarios**:
```
Mostrar todos los usuarios. GET(.../user/)
```
Buscar usuario por ID. GET(.../user/"id")
```
Registrar usuario. POST(.../user/register)
```
Loguearse como usuario. POST(.../user/login)
```
Borrar usuario. DELETE(.../user/"id")
```
También se ha añadido la funcion de administrador que solo se le permitirá a el hacer ciertos cambios en la base de datos.


**Para pedidos**:
```
Mostrar todos los pedidos. GET(.../user/)
```
Nuevo pedido. POST(.../order/)
```
Borrar pedido. DELETE(.../order/)

