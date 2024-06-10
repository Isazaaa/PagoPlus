
function mostrarPagoNomina() {

   // Obtener los datos ingresados en el formulario
   let nombreEmpleado = document.getElementById("nombre").value;
   let horasTrabajadas = parseFloat(document.getElementById("Horas").value);
   let tarifaPorHora = parseFloat(document.getElementById("tarifa").value);
   let salario = horasTrabajadas * tarifaPorHora;
   let auxilioTransporte = 162000;
   let deduccionesSalud = salario * 0.04;
   let deduccionesPension = salario * 0.04;
   let salarioTotal = salario + auxilioTransporte - deduccionesSalud - deduccionesPension;


    // Mostrar los datos en la colilla de pago
  document.getElementById("nombreEmpleado").textContent = nombreEmpleado;
  document.getElementById("horasTrabajadas").textContent = horasTrabajadas;
  document.getElementById("salarioNeto").textContent = salario;
  document.getElementById("auxilioTransporte").textContent = auxilioTransporte;
  document.getElementById("deduccionesSalud").textContent = deduccionesSalud;
  document.getElementById("deduccionesPension").textContent = deduccionesPension;
  document.getElementById("salarioTotal").textContent = salarioTotal;


  document.getElementById("form-colilla").style.display = "block";
  document.getElementById("calculo").style.display = "none";
 
  event.preventDefault();
}

function mostrarCalculo() {
  document.getElementById("calculo").style.display = "block";
  document.getElementById("form-colilla").style.display = "none";
}

document.querySelector("#btnVerCalculo").addEventListener("click", mostrarCalculo);
document.querySelector("#btnVerNomina").addEventListener("click", mostrarPagoNomina);


// Escuchar cambios en las horas trabajadas y tarifa por hora para calcular automáticamente el salario
document.getElementById("Horas").addEventListener("input", calcularSalarioAutomatico);
document.getElementById("tarifa").addEventListener("input", calcularSalarioAutomatico);


// Función para calcular el salario automáticamente
function calcularSalarioAutomatico() {
  let horasTrabajadas = parseFloat(document.getElementById("Horas").value);
  let tarifaPorHora = parseFloat(document.getElementById("tarifa").value);
  let salario = horasTrabajadas * tarifaPorHora;

  // Formatear el salario como moneda
  let salarioFormateado = salario.toLocaleString('es-CO', {style: 'currency', currency: 'COP'});
  
  document.getElementById("salario").value = salarioFormateado;
}
