var consumo = fetch("https://digimon-api.vercel.app/api/digimon");
var digimons = document.getElementById("digimons");
//prueba
digimons.innerHTML = "<h1>A</h1><h1>B</h1><h1>C</h1>";
// prueba 2
digimons.innerHTML = "<h1>X</h1>" + 
  "<h1>Y</h1>" + 
  "<h1>Z</h1>";

consumo.then(function(respuesta) {
  return respuesta.json();
}).then(function(datos) {
  // Aqui se hacen las manipulaciones de datos
  datos = datos.sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  });
  
  var html = "";
  for(var i = 0; datos.length > i; i++) {
    html = html + '<a href="/detalle.html?name=' + datos[i].name + '" class="digi">' + 
      '<img src="' + datos[i].img + '" />' +
      '<h2>' + datos[i].name + '</h2>' +
      '<span>' + datos[i].level + '</span>' +
      '</a>';
  }
  // inserta todo el html a mostrarse
  digimons.innerHTML = html;
    
});