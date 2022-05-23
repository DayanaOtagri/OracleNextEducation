// capturo el boton adicionar
const botonAdicionar = document.querySelector("#adicionar-paciente");

// creo el evento del boton adicionar 
botonAdicionar.addEventListener("click",function(event){
    
    event.preventDefault();

    // capturo el formulario
    let form = document.querySelector("#form-adicionar"); 
    // Varible que recibe una funcion que capturar los datos Paciente
    let paciente = capturarDatosPaciente(form);
    //  Varible que recibe una funcioón que construye el Tr(fila)
    let pacienteTr = construirTr(paciente);
    
    // Llama a validar paciente, envía al pacoente como parametro
    let errores = validarPaciente(paciente);
    console.log(errores);

    // valida los pacientes 
    if(errores.length > 0 ){
        exhibirMensajesErrores(errores);
        // Al estar el return vacío no ingresa datos a al tabla
        return;
    }


    //  Varible que captura la tabla de pacientes
    let tabla = document.querySelector("#tabla-pacientes");
    // a la tabla se le da como hijo lo hecho en pacienteTr
    tabla.appendChild(pacienteTr);
    // Borra los valores del formulario - lo deja limpio 
    form.reset();

    let mensajesErrores = document.querySelector("#mensajes-errores");
    // Borra menensajes de errores
    mensajesErrores.innerHTML = "";

});


// Esta función captura el valor de los datos de cada campo en paciente
function capturarDatosPaciente(form){
    //capturando los datos del formulario
    let paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value,form.altura.value)
    }
    return paciente; 
}

// Función que construye los tr(filas)
function construirTr(paciente){
     
    // Varible contiene en nuevo elemento creado tr(Filas)
       let pacienteTr = document.createElement("tr");     
       pacienteTr.classList.add("paciente");
          
       // A esa variable se le pasa como hijos los td (columnas) y su clase
       pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
       pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
       pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
       pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
       pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

       return pacienteTr; 
}

// Función que construirTd(columnas)
function construirTd(dato,clase){

    // varieble que crea los td(columnas)
    let td = document.createElement("td");

    // A es variable se le asigna una clase
    td.classList.add(clase);

    // A es variable se le asigna un contenido
    td.textContent = dato;
    return td;
}

function validarPaciente(paciente){

    let errores = []

    if(paciente.nombre.length == 0){
        errores.push("El nombnre no puede estar vacío"); 
    }

    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacío"); 
    }

    if(paciente.altura.length == 0){
        errores.push("El altura no puede estar vacío"); 
    }

    if(paciente.gordura.length == 0){
        errores.push("El %gordura no puede estar vacío"); 
    }


    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    } 

    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    }

    return errores; 
}

function exhibirMensajesErrores(errores){
    let ul = document.querySelector("#mensajes-errores");

    errores.forEach((error) =>{
        let li = document.createElement("li");
        li.textContent = error; 
        ul.appendChild(li); 
    })

}

