var elemento = document.getElementById('ele1')
elemento.style.backgroundColor = "green"

function pintar(ele, color){
    ele.style.backgroundColor = color
    }

elemento.addEventListener("click", function(eleClick){
    let color = "yellow"
    pintar(eleClick.target, color)
})