let nombre = prompt('Ingrese su nombre: ').trim();
// enviar la variable a la etiqueta h2 > id/class
// document.getElementById('usuario').innerText = `Bienvenido ${nombre}`
if (nombre != null && nombre != '') {
   document.getElementById('usuario').innerText = `Bienvenido ${nombre}`;
} else {
   document.getElementById('usuario').innerText = `Bienvenido invitado`;
}
