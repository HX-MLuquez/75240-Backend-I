drop database red_social_b;

-- Crear la base de datos
CREATE DATABASE red_social_b;

-- Conectarse a la base de datos
\c red_social_b;

-- Crear la tabla usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Crear la tabla fotos
CREATE TABLE fotos (
    id SERIAL PRIMARY KEY,
    usuario_id INT,
    url VARCHAR(255) NOT NULL,
    fecha_subida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE RESTRICT
);

-- Insertar usuarios
INSERT INTO usuarios (nombre, email) VALUES ('Juan Pérez', 'juan@example.com');
INSERT INTO usuarios (nombre, email) VALUES ('Ana García', 'ana@example.com');
INSERT INTO usuarios (nombre, email) VALUES ('Luis Martínez', 'luis@example.com');

-- Insertar fotos
INSERT INTO fotos (usuario_id, url) VALUES (1, 'foto1.jpg');
INSERT INTO fotos (usuario_id, url) VALUES (1, 'foto2.jpg');
INSERT INTO fotos (usuario_id, url) VALUES (2, 'foto3.jpg');
INSERT INTO fotos (usuario_id, url) VALUES (2, 'foto4.jpg');
INSERT INTO fotos (usuario_id, url) VALUES (3, 'foto5.jpg');

-- Intentar eliminar un usuario con fotos relacionadas
DELETE FROM usuarios WHERE id = 3;
-- ! ERROR
-- Se producirá un error porque el usuario tiene fotos relacionadas.

SELECT * FROM usuarios;

SELECT * FROM fotos;

SELECT * FROM usuarios JOIN fotos ON usuarios.id = fotos.usuario_id;

DELETE FROM fotos WHERE usuario_id = 3;

SELECT * FROM usuarios LEFT JOIN fotos ON usuarios.id = fotos.usuario_id;


DELETE FROM usuarios WHERE id = 3;
--* ahora OK