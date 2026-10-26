//Seleção de elementos
const multiplicationform = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title-span");
const multiplicationTable = document.querySelector("#multiplication-operations");

//Funções
const createTable = (number,multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(let i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;
        
        const template = `<div class="row"> 
                            <div class="operations">${number} X ${i} = </div> <div class="result">${result}</div> 
                            </div>`;

        const parser = new DOMParser();

        const htmlTamplate = parser.parseFromString(template,"text/html");

        const row = htmlTamplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }
    multiplicationTitle.innerText = number;
}

//Eventos
multiplicationform.addEventListener("submit", function(e) {

    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber,multiplicatorNumber);
});