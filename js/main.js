//Agarramos todos los elementos
const btn = document.querySelector('button');
const color = document.querySelectorAll('.color');
const hex = document.querySelectorAll('.hex');

//Evento del click sobre el boton
btn.addEventListener('click', generateColors);

function generateColors(){
    for(let i = 0; i < color.length; i++){
        //generador de color random
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        //añado el color al background
        color[i].style.background = '#' + randomColor;
        //añado animacion
        color[i].classList.add('fadein');
        setTimeout(() => color[i].classList.remove('fade-in',400))
        
        hex[i].innerHTML = randomColor;
    }
}
