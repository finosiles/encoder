window.onload=inicio;
// Controles de los eventos de la pagina



function inicio(){
    document.querySelectorAll("button")[0].onclick=cifrar;
    document.querySelectorAll("button")[1].onclick=descifrar;
    
}
let cifrado ;
document.querySelector(".textos1").addEventListener("click", function(){
    let elemento = document.querySelector(".muñeco");
    elemento.classList.add('ocultar');
})
function cifrar(){
    let escrito=document.querySelector("#textoobtenido").value;
    cifrado  = escrito
	.replace(/i/gi,'imes')
	.replace(/a/gi,'ai')
	.replace(/e/gi,'enter')
    	.replace(/o/gi,'ober')
	.replace(/u/gi,'ufat');
    document.querySelector(".salida").value = cifrado;
}
function descifrar(){
    let escrito=document.querySelector("#textoobtenido").value;
    cifrado  = escrito
	.replace(/imes/gi,'i')
	.replace(/ai/gi,'a')
	.replace(/enter/gi,'e')
	.replace(/ober/gi,'o')
	.replace(/ufat/gi,'u');
    document.querySelector(".salida").value = cifrado;
}



