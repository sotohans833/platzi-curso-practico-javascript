function calcularMediaArmonica(){

    const inputIda = document.getElementById("number1");
    const inputRegreso = document.getElementById("number2");

    const vIda = Number(inputIda.value);
    const vRegreso = Number(inputRegreso.value);
    const mediaArmonica = (2 / ( (1/vIda)+(1/vRegreso) ));

    const resultadoArmonica = document.getElementById("resultadoArmonica");
    resultadoArmonica.innerText = "Tu media armonica es de: " + mediaArmonica;
}
