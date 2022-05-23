
let pacientes = document.querySelectorAll(".paciente");

 for(let i = 0; i < pacientes.length; i++){

        let paciente = pacientes[i];
        
        let peso = paciente.querySelector(".info-peso");
        let valorPeso = peso.textContent; 


        let altura = paciente.querySelector(".info-altura");
        let valorAltura = altura.textContent; 


        let imcPaciente = paciente.querySelector(".info-imc");
  

        pesoValido = validarPeso(valorPeso); 
        alturaValida = validarAltura(valorAltura);

        if(!pesoValido){
            console.log("Peso incorrecto");
            imcPaciente.textContent = "Peso incorrecto";
            pesoValido = false;
            paciente.classList.add("paciente-incorrecto")
        } 

        if (!alturaValida){
            console.log("Altura incorrecta");
            imcPaciente.textContent = "Altura incorrecta";
            alturaValida = false; 
            paciente.classList.add("paciente-incorrecto")
        }

        if ( pesoValido && alturaValida){
            let imc = valorPeso / (valorAltura * valorAltura); 
            imcPaciente.textContent = imc.toFixed(2);
        }

        
 }

function calcularImc (peso, altura) {
     let imc = peso / (altura * altura)
     return imc.toFixed(2);
 };

 function validarPeso(peso) {

    if(peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
     
 }
 
 function validarAltura(altura) {
    if (altura >= 0 &&  altura < 3.00){
        return true;
    } else {
        return false;
    }
 }