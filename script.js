// Variables
/* variables guardan datos*/

var nombre = "Juan Benavides";
var ciudad = "Cañete";
var is_showing = false;

// tag_h1, se guarda el array de h1 que existen. 
var tag_h1 = document.getElementsByTagName("h1");
// elem_h1, se guarda el objeto h1.
var elem_h1 = tag_h1[0];
// con innerHTML incrustamos contenido al elemento
elem_h1.innerHTML = nombre;

// Capturar el elemento
var btn = document.getElementById("ver");
// Anade el evento, click
btn.addEventListener("click", function() {
  var tag_h2 = document.getElementsByTagName("h2");
  var elem_h2 = tag_h2[0];
  
  if (is_showing) {
    // Voy a ocultar la ciudad
    elem_h2.innerHTML = "";
    is_showing = false;
  } else {
    // Voy a mostrar la ciudad
    elem_h2.innerHTML = ciudad;
    is_showing = true;
  }
});




