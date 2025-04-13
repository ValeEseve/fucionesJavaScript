var elemento = document.getElementById('ele1')
elemento.style.backgroundColor = "green"

function pintar(ele, color){
    ele.style.backgroundColor = color
    }

elemento.addEventListener("click", function(ele){
    let color = "yellow"
    pintar(ele.target, color)
})