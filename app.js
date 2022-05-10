
// Controles de los eventos de la pagina

function escribiendo(){
    alert("Esta escribiendo");
}


// Desde aqui estoy obteniendo el valor del texto

let texto ;

texto = document.getElementById("textoobtenido").value;

// Tomaremos dicho contenido y lo enviaremos a un array

let textoPorpalabras = texto.split(' ')

console.log(textoPorpalabras.length);

function cifrar(){
    for(let k = 0; k < textoPorpalabras.length ; k++ ){
	let cifrado;
	cifrado  =textoPorpalabras[k]
	    .replaceAll('a','ai')
    	    .replaceAll('e','enter')
    	    .replaceAll('i','imes')
    	    .replaceAll('o','ober')
    	    .replaceAll('u','ufat');  
	console.log(cifrado);
	
    }
}




// textoPorpalabras.forEach(function(numero){
//     if(numero = )
// })



let cifra = texto.replaceAll('a','ai');
let cifre = cifra.replaceAll('e','enter');
let cifri = cifre.replaceAll('i','imes');
let cifro = cifri.replaceAll('o','ober');
let cifru = cifro.replaceAll('u','ufat');




