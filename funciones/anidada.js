var a = "OLA";

function global(){
	var b = "K";

	function local(){
		var c = "ASE";
		return a + b + c;
	}

	return local;
}



global(); //Devuelve el código de la  función local.
global()(); //Devuelve la ejecución de la función local: "OLAKASE"

var closure = global();
closure(); //Devuelve lo mismo que global()(): "OLAKASE"


var miContador = (function(){
	var _contador = 0; //Por convención, a las variables "privadas" se las llama con un "_" al inicio.

	function incrementar(){
		return _contador++;
	}

	function decrementar(){
		return _contador --;
	}

	function valor(){
		return _contador;
	}

	return {
		incrementar: incrementar,
		decrementar: decrementar,
		valor: valor
	}
})();


miContador.valor(); //0
miContador.incrementar();
miContador.incrementar();
miContador.valor(); //2
miContador.decrementar();
miContador.valor(); //1