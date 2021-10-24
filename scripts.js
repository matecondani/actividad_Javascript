//Funciones cambiar categoria desde cards
document.getElementById("estudiante").onclick = function () { document.getElementById("categoria").value = "catEstudiante"; }
document.getElementById("trainee").onclick = function () { document.getElementById("categoria").value = "catTrainee"; }
document.getElementById("junior").onclick = function () { document.getElementById("categoria").value = "catJunior"; }
//Funcion borrar total
document.getElementById("reset").onclick = function () { document.getElementById("total").innerHTML = "Total a Pagar: $"; }
//llamada calcular el total
document.getElementById("resumen").onclick = function () { calcularTotal() };
//funcion calcular el total
function calcularTotal() {
    let categoria = document.getElementById("categoria").value; //leer la categoria
    let dto = 1; //valor del descuento, por defecto sin descuento
    const valorTicket = 200; //valor del ticket constante
    let cantidad = document.getElementById("cantidad").value; //leer cantidad
    //evaluar si cantidad es mayor que 1
    if (cantidad < 1) {
        cantidad = 1;
        document.getElementById("cantidad").value = 1;
    }
    //evaluar descuento
    switch (categoria) {
        case "catEstudiante":
            dto = 0.2;
            break;
        case "catTrainee":
            dto = 0.5;
            break;
        case "catJunior":
            dto = 0.85;
            break;
        default:
            dto = 1;
    }
    //Escribo el total
    document.getElementById("total").innerHTML = "Total a Pagar: $" + (valorTicket * cantidad * dto);
}