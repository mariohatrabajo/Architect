var sliderItems = document.getElementsByClassName('testimonial');

var offset = 0;

// Botones del slider
let botones = document.getElementsByClassName('btn-testimonial');
for(let i = 0; i < botones.length; i++){
    botones[i].addEventListener('click', function() {
        // Quitamos la seleccion del otro btn seleccionado
        document.getElementsByClassName('selected')[0].classList.remove('selected');
        // Seleccionamos éste boton
        botones[i].classList.add('selected');
        // Calculamos el offset
        offset = (parseInt(botones[i].id.replace('testimonial-', ''))-1) * 100;
        // Actualizamos el estilo
        sliderItems[0].style.margin = "0 0 0 -"+offset+'%';
    });
}