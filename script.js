

document.getElementById("nominaForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let nombreEmpleado = document.getElementById("nombre").value;
    let horasTrabajadas = parseFloat(document.getElementById("horas").value);
    let valorPorHora = parseFloat(document.getElementById("valor").value);

    let salario = calcularSalario(horasTrabajadas, valorPorHora);
    document.getElementById("resultado").innerHTML = "El salario de " + nombreEmpleado + " es $" + salario;
});

function calcularSalario(horasTrabajadas, valorPorHora){
    let salario = horasTrabajadas * valorPorHora;
    return salario;
}

