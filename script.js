const number1 = document.querySelector("#tabuada");
const mult2 = document.querySelector("#multiplicar");
const calcular = document.querySelector("#calcular");

const resultado = document.querySelector("#res");

function tabuada() {
    resultado.textContent = " ";

    for(let i = 0; i <= Number(mult2.value); i++){
        resultado.textContent += `
        ${Number(number1.value)} X ${i} = ${Number(number1.value) * i}`;
    }
}

calcular.addEventListener("click",tabuada);