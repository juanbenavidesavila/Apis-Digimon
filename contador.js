var cuenta = 0;
var max = 10;
var min = 0;
var btn_incrementar = document.getElementById("incrementar");
var btn_decrementar = document.getElementById("decrementar");
var input_cuenta = document.getElementById("cuenta");

btn_incrementar.addEventListener("click", function(){
  input_cuenta.value = cuenta;
  if ( cuenta > max  ) {
    // fondo naranja
    input_cuenta.style.background = "orange";
  } else {
    input_cuenta.style.background = "white";
  }
  cuenta = cuenta + 1;
});

btn_decrementar.addEventListener("click", function(){
  input_cuenta.value = cuenta;
  if ( cuenta < min ) {
    // fondo red
    input_cuenta.style.background = "red";
  } else {
    input_cuenta.style.background = "white";
  }  
  cuenta = cuenta - 1;
});