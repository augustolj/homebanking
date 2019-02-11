//Declaración de variables
var nombreUsuario = "augusto"
var saldoCuenta = 5000
var limiteExtraccion = 1000
var servicioAgua = 350
var servicioTelefono = 425
var servicioLuz = 210
var servicioInternet = 570
var cuentaAmiga1 = 1234567
var cuentaAmiga2 = 7654321
var codigoSesion = "1234a"
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Mis Funciones
function sumarDinero(a) {
  saldoCuenta = saldoCuenta + a;
}

function restarDinero(a) {
  saldoCuenta = saldoCuenta - a;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  var consultaInternaLimite = limiteExtraccion;
  var nuevoLimite = parseInt(prompt("Cual es el nuevo límite de extracción?"));
    if (!isNaN(nuevoLimite)) {
      limiteExtraccion = nuevoLimite;
      actualizarLimiteEnPantalla();
      alert("El límite de extracción era " + consultaInternaLimite + " y lo has cambiado a " + nuevoLimite);
    } else alert("El valor ingresado no es numérico");
}

function extraerDinero() {
  var consultaInternaDeSaldo = saldoCuenta;
  var dineroARetirar = parseInt(prompt("Cuanto dinero quiere retirar?"));
  if (!isNaN(dineroARetirar)) {
    if (dineroARetirar <= limiteExtraccion)  {
      if (dineroARetirar <= saldoCuenta) {
        if (dineroARetirar % 100 == 0) {
          restarDinero(dineroARetirar);
          actualizarSaldoEnPantalla();
          alert("El saldo era " + consultaInternaDeSaldo + " y has retirado " + dineroARetirar + ". \nEl nuevo saldo es " + saldoCuenta);
        } else alert("Las extracciónes deben ser de billetes de 100");
      } else alert("No hay suficiente saldo en la cuenta");
    } else alert("El monto supera el límite de extracción");
  } else alert("El ingreso no es numérico");
}

function depositarDinero() {
  var consultaInternaDeSaldo = saldoCuenta;
  var dineroADepsitar = parseInt(prompt("Cuanto dinero quiere depositar?"));
    if (!isNaN(dineroADepsitar)) {
      sumarDinero(dineroADepsitar);
      actualizarSaldoEnPantalla();
      alert("El saldo era " + consultaInternaDeSaldo + " y has depositado " + dineroADepsitar + ". \nEl nuevo saldo es " + saldoCuenta);
  } else alert("El ingreso no es numérico");
}

function pagarServicio() {
  var consultaInternaDeSaldo = saldoCuenta;
  var servicioAPagar = parseInt(prompt("Qué servicio desea pagar?\n1 - Agua\n2 - Teléfono\n3 - Luz\n4 - Internet"));
  switch (servicioAPagar) {
    case 1:
    if (servicioAgua <= saldoCuenta) {
      restarDinero(servicioAgua);
      alert("Has pagado el servicio de Agua por un monto de " + servicioAgua + ".\nEl saldo anterior era " + consultaInternaDeSaldo + "\nEl nuevo saldo es " + saldoCuenta);
      actualizarSaldoEnPantalla();
    } else alert("No hay suficiente dinero para pagar el servicio");
    break;
    case 2:
    if (servicioTelefono <= saldoCuenta) {
      restarDinero(servicioTelefono);
      alert("Has pagado el servicio de Teléfono por un monto de " + servicioTelefono + ".\nEl saldo anterior era " + consultaInternaDeSaldo + "\nEl nuevo saldo es " + saldoCuenta);
      actualizarSaldoEnPantalla();
    } else alert("No hay suficiente dinero para pagar el servicio");
    break;
    case 3:
    if (servicioLuz <= saldoCuenta) {
      restarDinero(servicioLuz);
      alert("Has pagado el servicio de Luz por un monto de " + servicioLuz + ".\nEl saldo anterior era " + consultaInternaDeSaldo + "\nEl nuevo saldo es " + saldoCuenta);
      actualizarSaldoEnPantalla();
    } else alert("No hay suficiente dinero para pagar el servicio");
    break;
    case 4:
    if (servicioInternet <= saldoCuenta) {
      restarDinero(servicioInternet);
      alert("Has pagado el servicio de Internet por un monto de " + servicioInternet + ".\nEl saldo anterior era " + consultaInternaDeSaldo + "\nEl nuevo saldo es " + saldoCuenta);
      actualizarSaldoEnPantalla();
    } else alert("No hay suficiente dinero para pagar el servicio");
    break;
    default:
    alert("El servicio no existe");
  }
}

function transferirDinero() {
  var consultaInternaDeSaldo = saldoCuenta;
  var montoATransferir = prompt("Qué monto desea transferir?");
  if (!isNaN(montoATransferir)) {
    if (montoATransferir <= saldoCuenta) {
      var cuentaATransferir = parseInt(prompt("A qué cuenta desea transferir?\n1 - Cuenta Amiga 1\n2 - Cuenta amiga 2"));
      switch (cuentaATransferir) {
        case 1:
        saldoCuenta = saldoCuenta - montoATransferir;
        alert("Se han transferido " + montoATransferir + " a " + cuentaAmiga1 + "\nEl saldo anterior era " + consultaInternaDeSaldo + ".\nEl nuevo saldo es " + saldoCuenta);
        actualizarSaldoEnPantalla();
        break;
        case 2:
        saldoCuenta = saldoCuenta - montoATransferir;
        alert("Se han transferido " + montoATransferir + " a " + cuentaAmiga2 + "\nEl saldo anterior era " + consultaInternaDeSaldo + ".\nEl nuevo saldo es " + saldoCuenta);
        actualizarSaldoEnPantalla();
        break;
        default:
        alert("No se reconoce la cuenta de destino");
      }
    } else alert("El monto es mayor al saldo disponible");
  } else alert("El ingreso no es numérico");
}

function iniciarSesion() {
  var pedirCodigo = prompt("Ingresar clave");
  if (pedirCodigo === codigoSesion) {
    alert("Bienvenido " + nombreUsuario);
  } else {alert("Clave incorrecta. Se retiran los fondos por seguridad");
  saldoCuenta = 0;
  actualizarSaldoEnPantalla();
  }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
