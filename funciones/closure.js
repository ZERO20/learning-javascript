/*
Podemos guardar una función en una variable y posteriormente invocarla con el operador paréntesis (). 
*/

var saludar = function(nombre){
	return "Hola " + nombre;
};

saludar("Edgar"); //"Hola Edgar"


/*
Si a la variable que guarda la función no la invocamos con el paréntesos, el resultado será el código de la función.
*/

saludar; //devuelve 'function(nombre) { return "Hola " + nombre };'