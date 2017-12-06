/*Las funciones en JavaScript son bloques de código ejecutable, a los que podemos pasar parámetros y operar con ellos.
Nos sirven para modular nuestros programas y estructurarlos en bloques que realicen una tarea concreta.

Al acabar su ejecución devuelven un valor con el parámetro "return".

Se declaran con la palabra reservada "function" seguida del nombre para ser invocadas, en caso no de colocarle nombre será considerada
anónima.
*/

function saludar(nombre){
	return ("Hola " + nombre + "!");
}

saludar("Edgar"); //Devuelve "Hola Edgar!" y se le pasa un único parámetro, entre paréntesis (...), que es nombre.
saludar();//si no pasamos ningún parámetro, obtendríamos el valor undefined

/*
También podemos acceder a los parámetros que se pasan por argumento a través del array arguments sin indicarlo en la definición de la función.
*/

function saludar2 (){
	var tipo = arguments[0];
	var nombre = arguments[1];
	return (tipo + ', ' + nombre + '!');
}

saludar2("Adios", "Edgar"); //Devuelve "Adios, Edgar!"


