/*Se comporta como un array, no es más que un conjunto de caracteres, con índices que van desde el 0 para el primer 
carácter hasta el último.
*/
var cadena = "javascript";

cadena[2]; //devuelve "v" ya que se encuentra en el índice 2.
cadena.length; //devuelve 10
cadena.charCodeAt(2); //devuelve el caracter en formatod unicode de "v" que es el 118
cadena.indexOf("script"); //devuelve el índice donde comienza el string "script".
cadena.substring(4, 10); //devuelve la parte del string comprendida entre los indices 4 y 10 "script"

/*Para crear un string podemos hacerlo con notación de tipo o creando un objeto*/

var texto = "Hola mundo";

var texto = new String("Hola mundo");


/*Un string puede ser transformado a un array utilizando split() el cúal recibe un parametro delimitador que queramos que separe los elementos.
*/

var fecha = new Date(); //2017-12-06T00:07:51.218Z
fecha = fecha.toString(); //retorna una cadena representando el objeto fecha: Tue Dec 05 2017 18:09:52 GMT-0600 (CST)
fecha = fecha.split(" "); //[ 'Tue', 'Dec', '05', '2017', '18:15:13', 'GMT-0600', '(CST)' ] si el parametro no está presente devuelve un array con la cadena dada [ 'Tue Dec 05 2017 18:17:48 GMT-0600 (CST)' ] si se pone * como parámetro.
fecha[4]; //18:20:14