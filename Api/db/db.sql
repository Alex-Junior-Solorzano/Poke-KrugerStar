CREATE DATABASE pokemon

CREATE TABLE usuario(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) UNIQUE,
    contraseña VARCHAR(255) ,
    rol VARCHAR(255),
    email VARCHAR(255) UNIQUE
);

CREATE TABLE poke(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) UNIQUE,
    descripcion VARCHAR(255)UNIQUE,
    imagen VARCHAR(255)UNIQUE,
    tipo VARCHAR(255),
    evolucion VARCHAR(255), 
    altura VARCHAR(255), 
    peso VARCHAR(255)
);

INSERT INTO poke(nombre, descripcion, imagen, tipo, evolucion, altura, peso) VALUES ('Bulbasaur','Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.', '001', 'Planta - Veneno', 'Ivysaur', '0,7 m', '6,9 kg'); 
INSERT INTO poke(nombre, descripcion, imagen, tipo, evolucion, altura, peso) VALUES ('Charmander','Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.', '004', 'Fuego', 'Charmelion', '0,6 m', '8,5 kg') ;
INSERT INTO poke(nombre, descripcion, imagen, tipo, evolucion, altura, peso) VALUES ('Squirtle','Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.', '007', 'Agua', 'Wartortle', '0,5 m', '9,0 kg') ;
INSERT INTO poke(nombre, descripcion, imagen, tipo, evolucion, altura, peso) VALUES ('Caterpie','Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos.', '010', 'Bicho', 'Metapod', '0,3 m', '2,9 kg') ;
INSERT INTO poke(nombre, descripcion, imagen, tipo, evolucion, altura, peso) VALUES ('Pidgey','Su docilidad es tal que suelen defenderse levantando arena en lugar de contraatacar.', '016', 'Normal - Bolador', 'Pidgeotto', '0,3 m', '1,8 kg') ;
INSERT INTO poke(nombre, descripcion, imagen, tipo, evolucion, altura, peso) VALUES ('Rattata','Es propenso a hincar los incisivos en cualquier cosa que se le ponga por delante. Si se ve alguno, seguramente haya cuarenta cerca.', '019', 'Normal', 'Raticate', '0,3 m', '3,5 kg') ;
INSERT INTO poke(nombre, descripcion, imagen, tipo, evolucion, altura, peso) VALUES ('Spearow','A la hora de proteger su territorio, compensa su incapacidad para volar a gran altura con una increíble velocidad.', '021', 'Normal - Volador', 'Fearow', '0,3 m', '2,0 kg') ;
INSERT INTO poke(nombre, descripcion, imagen, tipo, evolucion, altura, peso) VALUES ('Ekans','La longitud de este Pokémon aumenta con el tiempo. Por la noche, se enrosca en las ramas de los árboles para descansar.', '023', 'Veneno', 'Arbok', '2,0 m', '6,9 kg') ;
INSERT INTO poke(nombre, descripcion, imagen, tipo, evolucion, altura, peso) VALUES ('Pikachu','Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.', '025', 'Eléctrico', 'Raichu', '0,4 m', '6,,0 kg') ;
INSERT INTO poke(nombre, descripcion, imagen, tipo, evolucion, altura, peso) VALUES ('Sandshrew','Le gusta revolcarse por la arena seca para eliminar todo rastro de suciedad y humedad en la piel.', '027', 'Tierra', 'Sandslash', '0,6 m', '12,0 kg') ;
INSERT INTO poke(nombre, descripcion, imagen, tipo, evolucion, altura, peso) VALUES ('Nidoran♀','Posee un olfato más fino que los Nidoran♂. Usa los bigotes para percibir la dirección del viento y buscar comida a sotavento de sus depredadores.', '029', 'Veneno', 'Nidorina', '0,4 m', '7,0 kg') ;
INSERT INTO poke(nombre, descripcion, imagen, tipo, evolucion, altura, peso) VALUES ('Clefairy','Se dice que la felicidad llegará a quien vea un grupo de Clefairy bailando a la luz de la luna llena.', '035', 'Hada', 'Clefable', '0,6 m', '7,5 kg') ;


