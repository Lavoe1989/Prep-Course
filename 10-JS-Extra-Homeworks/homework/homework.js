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
  var result = Object.keys(objeto).map(function (key) {
          
    // Using Number() to convert key to number type
    // Using obj[key] to retrieve key value
      return [(key), objeto[key]] ;
  });
  return result;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let arr = [];
  let letras_contadas = {};
  for (let i = 0; i < string.length; i++){
    arr.push(string.charAt(i));
  }
  arr.forEach(function (letras) {
    if (letras in letras_contadas){
      letras_contadas[letras]++;
    } else {
      letras_contadas[letras] = 1;
    }
  })
  return letras_contadas;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let minisculas = [];
    let mayusculas = [];
    for (let i = 0; i < s.length; i++){
      if(s.charAt(i) === s.charAt(i).toUpperCase()){
        mayusculas.push(s.charAt(i));
      } else {
        minisculas.push(s.charAt(i));
      }
    }
    return mayusculas.join('') + minisculas.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espejo = '';
   for(let i = str.length -1; i >= 0; i--) {
     espejo += str[i];
   };
  return espejo.split(' ').reverse().join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let a=numero.toString();
    var espejo = [];
    for(let i = 0; i < a.length; i++) {
      espejo.push(a[i]);
    };
    let b= espejo.reverse().join('');
    if(b === a)
    { 
      return "Es capicua"
    } else {
      return "No es capicua"
    }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cad = [];
    for(let i=0; i<cadena.length; i++){
      if(!(cadena[i]==='a' || cadena[i]==='b' || cadena[i]==='c')){
        cad.push(cadena[i]); 
      }
    }
    
    return cad.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arra=arr.sort(function(a, b) {
    //Los queremos ordenados del mas corto al mas largo, por lo tanto usamos...
    return a.length - b.length
    //En caso contrario, usariamos return b.length - a.length
  });

  return arra;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arreglo11=[...arreglo1.map(d => d)];
    let arreglo22=[...arreglo2.map(d => d)];

    return Array.from(new Set([...arreglo11].filter(e => new Set(arreglo22).has(e))));
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

