let campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", function() {
    // Se capturan todos los pacientes
    let pacientes = document.querySelectorAll(".paciente");


    // Si el el valor de lo escrito en el input es mayor a 0
    if(this.value.length > 0) {

        //Recorre pacientes
        for (let i = 0; i < pacientes.length; i++){

            //Se almacena cada iteracion en pacientes
            let paciente = pacientes[i]; 

            // Se captura el campo info-nombre
            let tdNombre = paciente.querySelector(".info-nombre");

            // contenido de textContent
            let nombre = tdNombre.textContent; 
    

            // Su el nombre es distinto al que se pasa como valor
            if(nombre != this.value){

                // agrega la clase invisible
                paciente.classList.add("invisible");
            }
            else {
                // de lo contrario remueve la clase invisible
                paciente.classList.remove("invisible");
            }
            
        }
    } 
    
    // Si el el valor de lo escrito en el input NO es mayor a 0
    else{ 

        //recorre los pacientes y elimina la clase invisible
        for (let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i]; 
            paciente.classList.remove("invisible")
        }

    }

})