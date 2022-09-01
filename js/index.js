let nombrecom = [
  "Farmacia El Remedio",
  "Ferreteria tornillo Flojo",
  "Bicicleteria La rueda",
  "Tienda de Ropa",
  "Muebleria El Ropero",
  "Deportes Deporlandia",
];
let clavecom = [
  "0381345abc",
  "0568def227",
  "08744hgj67",
  "1240kl48i9",
  "1550iik3g4",
  "3456ww224j",
];
let estaComercio = "";
let estaClave = "";

function usrpas() {
  let usrpassw =
    document.getElementById("hcom").value +
    document.getElementById("hcla").value;
  let estaClave = clavecom.includes(usrpassw, 0);
  let ubicacion = clavecom.indexOf(usrpassw, 0);


  if (estaClave == true) {
    alert(nombrecom[ubicacion])
    
    window.location = "../paginas/pidoDatos.html";
  } else {
    alert("Error en Usuario o Contraseña. Intenta de nuevo.");
  }
}
document.oncontextmenu = new Function("return false");

function names() {
  var nombres = [];
  var cont = "";
  for (var i = 0; i <= 2; i++) {
      var x = prompt("Ingresa tu nombre:");
      nombres[i] = x;
  }
  for (var i = 0; i <= 2; i++) {
      cont += nombres[i] + " ";
  }
  document.getElementById("here").innerHTML = cont;
}