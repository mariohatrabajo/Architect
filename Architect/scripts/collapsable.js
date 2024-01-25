function collapseSection(element) {
    // Obtiene la altura del contenido del elemento sin importar su tamaño actual
    var sectionHeight = element.scrollHeight;
    
    // Quita la transicion y la guarda para restaurarla despues
    var elementTransition = element.style.transition;
    element.style.transition = '';
    
    // En el siguiente frame despues de que haya acabado el cambio de estilos anterior
    // Cambiamos la altura de auto a su altura real para que no intente transicionar desde auto
    requestAnimationFrame(function() {
        element.style.height = sectionHeight + 'px'; // Quitamos el auto pero dejamos la misma altura
        element.style.transition = elementTransition; // Restauramos la transicion
        
        // En el siguiente frame despues de que haya acabado el cambio de estilos anterior
        // Hacemos que el elemento transicione a 0
        requestAnimationFrame(function() {
            element.style.height = 0 + 'px';
        });
    });
  }
  
  function expandSection(element) {
    // Obtiene la altura del contenido del elemento sin importar su tamaño actual
    var sectionHeight = element.scrollHeight;
    
    // Hacemos que el elemento transicione a la altura de su contenido
    element.style.height = sectionHeight + 'px';
  
    // Cuando termine la ultima transicion de css (La que acabamos de hacer)
    element.addEventListener('transitionend', function(e) {
      // Eliminamos el evento para que no se repita
      element.removeEventListener('transitionend', arguments.callee);
      
      // Eliminamos la altura del estilo del elemento para que se vuelvan a aplicar las del archivo css
    //   element.style.height = null;
    });
  }
  

  $(document).ready(function () { /* Cuando el documento cargue */
    // Cuando haga click en un menu colapsable
    $(".collapsable").click(function () {
        var section = $(this).children('.coll-text')[0];
        var isCollapsed = !$(this)[0].classList.contains('open');
        
        if(isCollapsed) {
            expandSection(section);
            // Marcamos que se ha abierto
            $(this)[0].classList.add('open');
        } else {
            collapseSection(section);
            // Marcamos que no está abierto
            $(this)[0].classList.remove('open');
        }
    });
});