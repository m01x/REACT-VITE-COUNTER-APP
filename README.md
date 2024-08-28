# REACT-VITE-COUNTER-APP

## Práctica de testing sobre una aplicación básica.

Se prueban distintos tipos de testeos con **Jest** sobre una base de pruebas en javascript... Más adelante lo realizaré con componentes JSX/TSX. Proyecto desarrollado con Yarn🐈‍⬛

## Instalación

**1) Instalar dependencias**

    yarn install

**2) Ejecutar aplicación**

    yarn dev

**3) Ejecutar pruebas unitarias**

    yarn test

_Considerar que configuré Jest para que utilizase watchAll, esto puede ser molesto cuando se realicen muchas pruebas... Puedes quitar el flag --watchAll del script "test"_
_Archivo package.json:_

    "dependencies": {
    "prop-types": "^15.8.1",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
    }

## Estructura de la prueba unitaria

Estoy aplicando la siguiente estructura de testing, se que pueden ser básicas pero las estoy practicando en mi tiempo libre 👌🏖️

    import { getUser, getUsuarioActivo } from  '../../src/base-pruebas/05funciones';
    describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
    const  testUser  = {
    uid: 'ABC123',
    username: 'El_Papi1502'
    };
    const  user  =  getUser();
    console.log(user);
    expect(testUser).toEqual(user);
    });
    test('getUsuarioActivo debe de retornar un objeto', () => {
    const  name  =  'Flavio';
    const  usuarioActivo  =  getUsuarioActivo(name);
    console.log(usuarioActivo);
    expect(usuarioActivo).toEqual({
    uid: 'ABC567',
    username: name});
    });
    });

Wow! se ve horrible el código por el editor que estoy usando 😴, igual, se documenta un ejemplo del test no. 5.

## TODO

- [ ] Finalizar pruebas unitarias de ejemplo (módulos base)
- [ ] Realizar pruebas unitarias en Componentes de React.

.md hecho con 💖por [stackedit.io/app](https://stackedit.io/app#)
