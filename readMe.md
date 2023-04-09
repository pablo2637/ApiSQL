#API_SQL

Cuenta con 2 **APIs**:
* Authors
* Entries

---
##Base de datos
El motor de base de datos utilizado es postgreSQL, que esta subido en **[elephantSQL](https://www.elephantsql.com/)**
\**(Datos de conexión al final)*

---
##API Authors:

####**getAuthorsC:**
* Devuelve: **todos los autores** o **un único autor si se pasa el email**
* Requiere: (opcional)
    * body: **email**
* Ruta: **/api/authors/**
* Método: **GET**

####**createAuthorC:** 
* Devuelve:
    * ok: **true** o **false**
    * response: **los datos del autor creado**
* Requiere: **name, surname, email e image**
* Ruta: **/api/authors/**
* Método: **POST**

####**updateAuthorC:** 
* Devuelve:
    * ok: **true** o **false**
    * response: **los datos del autor creado**
* Requiere: 
    * params: **id**
    * body: **name, surname, email e image**
* Ruta: **/api/authors/:id**
* Método: **PUT**

####**deleteAuthorC:** 
* Devuelve:
    * ok: **true** o **false**
    * msg: **confirmación de la eliminación**
* Requiere: **id**
* Ruta: **/api/authors/:id**
* Método: **DELETE**

---
##API Entries:
####**getEntriesC:**
* Devuelve:
  * ok: **true** o **false**
  * response: **todas las entradas** o **las entradas que coinciden con el email, si se proporciona uno**
* Requiere: (opcional)
    * body: **email**
* Ruta: **/api/entries/**
* Método: **GET**
  
####**createEntryC:** 
* Devuelve: 
    * ok: **true** o **false**
    * response: **los datos de la entrada creada**
* Requiere: **title, content, category e email**
* Ruta: **/api/entries/**
* Método: **POST**

####**updateEntryC:** 
* Devuelve: 
    * ok: **true** o **false**
    * response: **los datos de la entrada modificada**
* Requiere: 
    * params: **id**
    * body: **title, content, category e email**
* Ruta: **/api/entries/:id**
* Método: **PUT**

####**deleteEntryC:** 
* Devuelve: 
    * ok: **true** o **false**
    * msg: **confirmación de la eliminación**
* Requiere: **id**
* Ruta: **/api/entries/:id**
* Método: **DELETE**

---
##.env:
####Requiere:
* El puerto del servidor: **PORT**=3000
* La conexión a la BD:
    * **ELEPHANT_USER**=dtzlfmmg
    * **ELEPHANT_PASS**=wMLiJ10Jqh6wu0QitqHXgITlkhUvRfaP
    * **ELEPHANT_HOST**=surus.db.elephantsql.com
    * **ELEPHANT_DB**=dtzlfmmg