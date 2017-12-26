/*Un closure es muy similar a una clase, la principal diferencia es que una clase tendrá un constructor que cumple con el mismo cometido que el closure.
Al crear un objeto a partir de una clase debemos usar el parametro "new" y si es un closure, al inicializar un nuevo objeto, se le pasa lo que le devuelve la función cierre.
*/
function invetario(nombre) {
	var _nombre = nombre;
	var _articulos = {};

	function add (nombre, cantidad){
		_articulos[nombre] = cantidad;
	}

	function borrar (nombre){
		delete _articulos[nombre];
	}

	function cantidad (nombre){
		return _articulos[nombre];
	}

	function nombre (){
		return _nombre;
	}

	return {
		add: add,
		borrar: borrar,
		cantidad: cantidad,
		nombre: nombre
	}
}


var libros = invetario("libros");
libros.add("AngularJS", 3);
libros.add("JavaScript", 10);
libros.add("NodeJs", 5);
libros.cantidad("AngularJS"); //3
libros.cantidad("JavaScript"); //10
libros.borrar("JavaScript");
libros.cantidad("JavaScript");//undefined


/*
Como clase
*/

function Inventarioclase (nombre) {
	this.nombre = nombre;
	this.articulos = [];

	this.add = function (nombre, cantidad) {
		this.articulos[nombre] = cantidad;
	}

	this.borrar = function (nombre) {
		delete this.articulos[nombre];
	}

	this.cantidad = function (nombre) {
		return this.articulos[nombre];
	}

	this.getNombre = function () {
		return this.nombre;
	}
}


var invetario_clase = new Inventarioclase("")