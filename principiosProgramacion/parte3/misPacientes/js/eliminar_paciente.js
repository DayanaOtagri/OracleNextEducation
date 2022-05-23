/*pacientes.forEach(function (paciente){
    paciente.addEventListener("dblclick", function(){
       this.remove(paciente); 
    })
});*/

//-------------event bubbling-------------------//

//let pacientes = document.querySelectorAll("#pacientes"); 
let tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("click", function(event) {
    // target: donde ocurrio del evento 
    // parentNode sube una jerarquía en el target 
    event.target.parentNode.classList.add("fadeOut");
    setTimeout( function() {
        event.target.parentNode.remove();
        // tiempo en milisegundos
    }, 500)
});