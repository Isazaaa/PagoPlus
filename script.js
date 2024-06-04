
function mostrarPagoNomina() {
  document.getElementById("form-colilla").style.display = "block";
}

document
  .querySelector("#btnVerNomina")
  .addEventListener("click", mostrarPagoNomina);


      function generarColilla() {
        // Obtener valores del formulario
        var nombre = document.getElementById("nombre").value;
        var salarioMensual = parseFloat(document.getElementById("salario").value);
  
        // Calcular salario quincenal (asumiendo 2 quincenas al mes)
        var salarioQuincenal = salarioMensual / 2;
  
        // Mostrar colilla de pago
        document.getElementById("nombreEmpleado").innerText = nombre;
        document.getElementById("salarioMensual").innerText = salarioMensual.toFixed(2);
        document.getElementById("salarioQuincenal").innerText = salarioQuincenal.toFixed(2);
        
        // Mostrar el área de la colilla de pago
        document.getElementById("colilla").style.display = "block";
      }

