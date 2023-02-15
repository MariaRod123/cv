// Seleccionamos los botones por el ID y les agregamos el evento click tal que al clickear cambie de color
document.getElementById("btn_naranja").addEventListener("click", changeColor);
document.getElementById("btn_verde").addEventListener("click", changeColor);
document.getElementById("btn_gris").addEventListener("click", changeColor);


function changeColor(event) {
    // Obtenemos el color que se va a aplicar según el botón que se haya presionado
    let color = event.target.id === "btn_naranja" ? "orange" : event.target.id === "btn_verde" ? "green" : "grey";
    
    // Seleccionamos el body y cambiamos su color de fondo
    document.body.style.background= color;

  }
  


