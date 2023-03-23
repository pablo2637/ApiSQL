--Crear tabla Author
CREATE TABLE authors (
  id_author serial NOT NULL PRIMARY KEY, 
  name varchar(45) NOT NULL, 
  surname varchar(45) NOT NULL, 
  email varchar(100) NOT NULL UNIQUE,
  image varchar(255)
);

--Crear tabla Entries
CREATE TABLE entries (
  id_entry serial NOT NULL PRIMARY KEY, 
  title varchar(100) NOT NULL, 
  content text NOT NULL, 
  date date DEFAULT CURRENT_DATE,
  id_author int,
  category varchar(15),
  FOREIGN KEY (id_author) REFERENCES authors(id_author)
);

--Datos prueba autores
INSERT INTO authors(name,surname,email,image)
VALUES
('ana','anacleta','ana@correo.es','https://randomuser.me/api/portraits/thumb/women/75.jpg'),
('maria','marieta','maria@correo.es','https://randomuser.me/api/portraits/thumb/women/60.jpg'),
('juan','juanito','juan@correo.es','https://randomuser.me/api/portraits/thumb/men/45.jpg'),
('pepe','pepin','pepe@correo.es','https://randomuser.me/api/portraits/thumb/men/72.jpg');

--Datos prueba entries
INSERT INTO entries(title,content,id_author,category)
VALUES 
('Noticia: SOL en Madrid','Contenido noticia 1',(SELECT id_author FROM authors WHERE email='ana@correo.es'),'Tiempo'),
('Noticia: Un panda suelto por la ciudad','El panda se comió todas las frutas de una tienda',(SELECT id_author FROM authors WHERE email='maria@correo.es'),'Sucesos'),
('El rayo gana la champions','Victoria por goleada en la final de la champions',(SELECT id_author FROM authors WHERE email='pepe@correo.es'),'Deportes'),
('Amanece Madrid lleno de arena','La calima satura Madrid de arena. Pérdidas millonarias',(SELECT id_author FROM authors WHERE email='maria@correo.es'),'Sucesos'),
('Descubren el motor de agua','Fin de la gasolina. A partir de ahora usaremos agua en nuestros coches',(SELECT id_author FROM authors WHERE email='juan@correo.es'),'Ciencia');
