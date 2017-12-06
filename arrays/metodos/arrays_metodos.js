/*
Array es una clase de JavaScript, por lo tanto los objetos creados a partir de esta clase heredan todos los métodos de la clase padre. por ejemplo:
*/
var miArray2 = [3, 6, 1, 4];
miArray2.sort();//devuelve un nuevo array con los valores ordenados
miArray2.pop();//devuelve el ultimo elemento en el array y lo saca. Devuelve 6 y miArray tiene el valor [1, 3, 4]
miArray2.push(2);//inserta un nuevo elemento en el array, devuelve la nueva longitud del array.
miArray2.reverse();//invierte el array, quedando [ 2, 4, 3, 1 ]


/*join() sirve para crear un string con los elementos del array uniéndolos con el "separador" que le pasemos como parámetro a la función.*/
var valor = 3;
var template = [
	"<li>",
	valor,
	"</li>"
].join("");

//console.log(template); //devuelve <li>3</li>

/* Lo cual es mucho más eficiente en términos de procesamiento, que realizar lo siguiente, sobre todo si estas en uniones que realizan dentro de bucles.
*/

var valor2 = 3;
var template2 = "<li>" + valor2 + "</li>";


/*
map() permite aplicar una misma función a los elementos de una array
*/

//Conocer la raíz cuadrada de cada uno de los elementos del array.
var miArray3 = [2, 4, 6, 8];
var raices = miArray3.map(Math.sqrt);
//console.log(raices); //[ 1.4142135623730951, 2, 2.449489742783178, 2.8284271247461903 ] devuelve el array con los valores de sus raíces.

//algo más especifico:
var miArray4 = [2, 4, 6, 8];
var resultados = miArray4.map(function(elemento){
	return elemento *= 2
});

//redundando decimos que "elemento" es cada elemento que es iterado del array.

//console.log(resultados); //resultados: [ 4, 8, 12, 16 ]


/*filter() nos permite filtrar los elementos de un array dada una condición sin necesidad de crear un bucle para iterarlo.
Por ejemplo, dado un array con los números del 1 al 15, obtener un array con los números que son divisibles por 3:
*/

var miArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var resultados2 = miArray5.filter(function(elemento){
	return elemento %  3 === 0
});

//console.log(resultados2); //resultados: [ 3, 6, 9, 12, 15 ]


/*
slice() permite obtener una parte del array, pasándole como parámetro el índice a partir del que queremos cortar y el final.
Si no se indica el parámetro de fin, se hará el "corte" hasta el final del array, si no, se hará hasta la posición indicada y si se pasa
un número negativo, contará desde el final del array hacía atrás.
El método devuelve un nuevo array sin transformar sobre el que se está invocando la función.
*/

var miArray6 = [4, 8 , 15, 16, 23, 42];
miArray6.slice(2); //[ 15, 16, 23, 42 ]
miArray6.slice(2, 4);//[ 15, 16 ] (la posición de fin no es inclusiva, es decir no se toma encuenta)
miArray6.slice(2, -1); // [ 15, 16, 23 ]
miArray6.slice(2, -2); // [ 15, 16 ]