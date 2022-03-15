function calcularEndeudamiento(){

    const inputIngresos = document.getElementById("inputIngresos");
    const ingresos = inputIngresos.value;
    
    const inputEgresos = document.getElementById("inputEgresos");
    const egresos = inputEgresos.value;

    if(ingresos > egresos){
        const CapacidadEndeudamiento = ((ingresos - egresos) * 0.35);

        const endeudamiento = document.getElementById("endeudamiento");
        endeudamiento.innerText = "Tu capacidad de endeudamiento es: " + CapacidadEndeudamiento + " Dolares";
    
        const ahorro = document.getElementById("ahorro");
        ahorro.innerText = "Tu capacidad de ahorro es: " + (ingresos * 0.12) + " Dolares";
    
        const desarrolloProfesional = document.getElementById("desarrolloProfesional");
        desarrolloProfesional.innerText = "La inversion en tu desarrollo profesional deberia ser : " + (ingresos * 0.10) + " Dolares";
    
        const inversion = document.getElementById("inversion");
        inversion.innerText = "Tu inversion de mercado puede ser: " + (ingresos * 0.075) + " Dolares";
    
        const ocio = document.getElementById("ocio");
        ocio.innerText = "Tu gasto en ocio mensual puede ser: " + (ingresos * 0.03) + " Dolares";
        
        const promedio = (ingresos * 0.50);
        if (egresos > promedio) {
            const recomendacion = document.getElementById("recomendacion");
            recomendacion.innerText = "RECOMENDACION: Tus gastos superan el promedio eficaz para que tus finanzas funcionen correctamente, revisa bien que gastos no son realmente necesarios para optimizar tus finanzas. Lo maximo que deberias estar gastando en el mes es: " + promedio + " Dolares";
        }
    }
    else {
        alert("Lo sentimos tus gastos son mayores  o iguales a tus ingresos, Ingresa valores validos");
    }
}

