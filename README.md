# Enunciado parcial #2 Desarrollo de software en Equipo 2024-02

Se debe desarrollar una aplicación angular que permita visualizar Pokémons y sus detalles. 


La información de los Pokémons la vamos a traer utilizando el siguiente api: 

https://pokeapi.co/api/v2/pokemon

Si bien un Pokémon tiene muchas propiedades, en este ejercicio solo vamos a tener en cuenta los siguientes atributos:

id: number;
name: string;
height: number;
weight: number;
abilities : Array<AbilitiesDto>
sprites : Array<SpriteDto>
types: Array<TypesDto>

Para traer un pokemon usando el api, debemos realizar el siguiente request:

https://pokeapi.co/api/v2/pokemon/1 

En el código inicial existe un módulo “pokemon” que tiene la estructura anterior definida y el servicio que trae los primeros 20 pokémons.
Adicionalmente tiene un módulo “type” que contiene la estructura de los tipos de pokémon. 

Listar Pokemons (30%) 
Ud. debe crear un componente que liste los pokemons utilizando el componente “card” de bootstrap y desplegando la imagen que se encuentra en el primer elemento del  arreglo “sprites” y que se llama “front_default”.

Detalle del Pokémon (20%)
Ud. debe crear un componente que muestre el detalle del pokémon seleccionado por el usuario. Con toda la información en el pokémon. 

Vista de Tipo (20%):
En el componente de detalle anterior, cree una ruta sobre cada uno de los tipos del pokémon de tal forma que cuando el usuario seleccione un tipo, muestre una nueva vista con una lista de los nombres de los pokémons que contienen el valor del tipo seleccionado. 

Conteo de Pokémon por Tipo en el Listado (30%):
Implementar una función en la vista principal que muestre, en la parte de abajo de los pokémons,  la cantidad de pokémons de cada tipo presentes en el listado. La cantidad debe aparecer en un lugar visible, permitiendo al usuario conocer el número de pokémons de cada tipo que se encuentran actualmente en pantalla.

