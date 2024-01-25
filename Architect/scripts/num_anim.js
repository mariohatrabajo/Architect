let nums = document.getElementsByClassName('num-anim');
var intervals = [];

// Se activa cada vez que se scrollea
window.addEventListener("scroll", scroll);

function scroll() {
    for(let i = 0; i < nums.length; i++){
        var windowHeight = window.innerHeight; // Altura de la ventana
        var elementTop = nums[i].getBoundingClientRect().top; // Altura del elemento
        var elementVisible = 0; // Altura a la que se debe mostrar

        if (elementTop < windowHeight - elementVisible && !nums[i].classList.contains('active')) {
            // Hacemos que solo lo haga una vez
            nums[i].classList.add('active');

            // Numeros pequeños
            if(!nums[i].textContent.match('k')){
                let max = parseInt(nums[i].textContent); // Guardamos el numero final
                nums[i].textContent = '0'; // Ponemos el numero a 0
                intervals[i] = setInterval(animacion, 50, i, max);

            }else { // Numeros con k
                let max = parseInt(nums[i].textContent)*1000; // Guardamos el numero final
                nums[i].textContent = '0'; // Ponemos el numero a 0
                intervals[i] = setInterval(animacion, 50, i, max);
            }
        }
    }
}

function animacion(i, max) {
    // console.log(i+': '+nums[i].textContent+' / '+max);
    // Suma hasta que llegue al maximo y entonces para
    if(parseInt(nums[i].textContent) < max){
        if(max < 1000)
            nums[i].textContent = parseInt(nums[i].textContent) + 1;
        else
            nums[i].textContent = parseInt(nums[i].textContent) + 100;

    }else {
        // Ponemos el + cuando acaba
        if(max > 1000)
            nums[i].textContent = '5k+';

        clearInterval(intervals[i]);
        intervals[i] == null;
    }
}