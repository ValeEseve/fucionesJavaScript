const cuadradoAzul = document.querySelector("#cuadradoAzul")
const cuadradoRojo = document.querySelector("#cuadradoRojo")
const cuadradoVerde = document.querySelector("#cuadradoVerde")
const cuadradoAmarillo = document.querySelector("#cuadradoAmarillo")

cuadradoAzul.addEventListener("click", () => pintarNegro(cuadradoAzul))
cuadradoRojo.addEventListener("click", () => pintarNegro(cuadradoRojo));
cuadradoVerde.addEventListener("click", () => pintarNegro(cuadradoVerde));
cuadradoAmarillo.addEventListener("click", () => pintarNegro(cuadradoAmarillo));


function pintarNegro(cuadrado){
    cuadrado.style.backgroundColor = "black"
}