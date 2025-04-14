const cuadradoAzul = document.querySelector("#cuadradoAzul")
const cuadradoRojo = document.querySelector("#cuadradoRojo")
const cuadradoVerde = document.querySelector("#cuadradoVerde")
const cuadradoAmarillo = document.querySelector("#cuadradoAmarillo")

cuadradoAzul.addEventListener("click", () => pintarNegro(cuadradoAzul))
cuadradoRojo.addEventListener("click", () => pintarNegro(cuadradoRojo))
cuadradoVerde.addEventListener("click", () => pintarNegro(cuadradoVerde))
cuadradoAmarillo.addEventListener("click", () => pintarNegro(cuadradoAmarillo))

const cuadradoKey = document.querySelector("#key")
const cuadradoKey2 = document.querySelector("#key2")

let color = "white"

document.addEventListener("keydown", function(event){
    if (event.key === "a" || event.key === "A"){
        color = "pink"
        cuadradoKey.style.backgroundColor = color
    }else if (event.key === "s" || event.key === "S"){
        color = "orange"
        cuadradoKey.style.backgroundColor = color
    }else if (event.key === "d" || event.key === "D"){
        color = "lightblue"
        cuadradoKey.style.backgroundColor = color
    }else if (event.key === "q" || event.key === "Q"){
        color = "purple"
        agregarElemento(color)
    }else if (event.key === "w" || event.key === "W"){
        color = "gray"
        agregarElemento(color)
    }else if (event.key === "e" || event.key === "E"){
        color = "brown"
        agregarElemento(color)   
}
}
)


function pintarNegro(cuadrado){
    cuadrado.style.backgroundColor = "black"
}

function agregarElemento(color){
    contenedor = document.querySelector("#agregar-elemento")
    nuevoElemento = document.createElement("div")
    nuevoElemento.style.width = "200px"
    nuevoElemento.style.height = "200px"
    nuevoElemento.style.border = "solid 2px black"
    nuevoElemento.style.backgroundColor = color
    contenedor.appendChild(nuevoElemento)
}