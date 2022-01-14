// No cambies los nombres de las funciones.
  
function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arreglo = [];
  for (const x in objeto)
  arreglo.push(new Array(x, objeto[x]));
return arreglo;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /*
    var objeto = {}; 
    for(var i ;i < string.lenght; i++){ 
      //si el elemento objeto[strign[i] no existe, entonces tomará el valor 0 y luego le sumará 1
        objeto[string[i]] = ( objeto[string[i]] || 0 ) + 1; // Incrementa el valor si el elemento ya existe
    }
    return objeto;
*/
var cont=[];                                  //inicializar el contador
var ncad=string.split('');                        //dividir la cadena en caracteres
for (var i = 0; i < string.length; i++) {     //recorrer la cadena
  letra=ncad[i].charCodeAt();                 //pasar cada letra a código ascii
  //antes de sumarlo verificar si ya existe en cont, de no ser así inicializarlo
  cont[letra]==undefined ? cont[letra]=1 : cont[letra]++  
};
total={};                                     //para guardar el resultado
for (var i in cont)                           //recorrer el contador
  total[String.fromCharCode(i)]=cont[i];      //pasar el caracter de ascii a string y pasarle la cantidad
return total;
}
console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"));

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
	let cadenaUpp = "";	
  let cadenaLow = "";
    for (var i = 0; i < s.length; i++) 
    	{     //recorrer la cadena
      	let caracter = s[i].charAt();                 
	  	if (caracter === caracter.toUpperCase())
          cadenaUpp = cadenaUpp + caracter;
      	else
        cadenaLow = cadenaLow + caracter;
    	};
    return cadenaUpp + cadenaLow;
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let palabras = str.split(" ");
  let alreves = [];
  for (var i=0;i<palabras.length;i++)
  {
    alreves.push(palabras[i].split("").reverse().join(""));
   }
    return alreves.join(" ");
  /*
  let alreves = "";
  for (let i=0; i<palabras.length; i++)
  	{
     let cadapalabra="";
     let j=palabras[i].length;
     for (j; j>=0; j--)
        {
        cadapalabra += palabras[i].charAt(j);
        }
      if (i===0)
	     alreves += cadapalabra; 
      else
	     alreves += " " + cadapalabra; 
    }
  return alreves;
  */
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numero1 = numero.toString();
  let numero2 = numero1.split("").reverse().join("");
  if (numero1==numero2)
    return "Es capicua";
  else
    return "No es capicua";
  /*const numeroString = numero.toString();
  for (let i=0; i<Math.trunc(numeroString.length/2);i++)
  {
    if (numeroString[i]!==numeroString[numeroString.length-i-1])
      return "No es capicua";
  }
  return "Es capicua";  */
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
let cadenanueva = "";
for (let i=0; i<cadena.length; i++)
  	{
    if (cadena[i]!="a" && cadena[i]!="b" && cadena[i]!="c")
        cadenanueva += cadena[i];
  	}
  return cadenanueva;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
let arreglo = arr.sort(function (a,b) 
{
  return a.length - b.length
});
return arreglo;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo =[]
  for (i=0; i<arreglo1.length; i++)
    for (j=0; j<arreglo2.length; j++)
      if (arreglo1[i]===arreglo2[j])
        {
          arreglo.push(arreglo1[i]);
        }
  return arreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

