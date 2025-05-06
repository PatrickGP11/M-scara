let inputCpf = document.querySelector("#cpf");

inputCpf.addEventListener("keypress", ()=>{
    let tamanhoCpf = inputCpf.value.length;
    if(tamanhoCpf == 3 || tamanhoCpf == 7) { 
        inputCpf.value += ".";
    }else if(tamanhoCpf == 11) {
        inputCpf.value += "-";
    }
})

let inputCnpj = document.querySelector("#cnpj");

inputCnpj.addEventListener("keypress", ()=>{
    let tamanhoCnpj = inputCnpj.value.length;
    if(tamanhoCnpj == 2 || tamanhoCnpj == 6) { 
        inputCnpj.value += ".";
    }else if(tamanhoCnpj == 10) {
        inputCnpj.value += "/";
    }else if(tamanhoCnpj == 15) {
        inputCnpj.value += "-";
    }
})

let inputRg = document.querySelector("#rg");

inputRg.addEventListener("keypress", ()=>{
    let tamanhoRg = inputRg.value.length;
    if(tamanhoRg == 2 || tamanhoRg == 6) { 
        inputRg.value += ".";
    }else if(tamanhoRg == 10) {
        inputRg.value += "-";
    }
})

let inputCep = document.querySelector("#cep");

inputCep.addEventListener("keypress", ()=>{
    let tamanhoCep = inputCep.value.length;
    if(tamanhoCep == 5) { 
        inputCep.value += "-";
    }
})

let inputTelefone = document.querySelector("#telefone");

inputTelefone.addEventListener("keypress", ()=>{
    let tamanhoTelefone = inputTelefone.value.length;
    if(tamanhoTelefone == 0) { 
        inputTelefone.value += "(";
    }else if(tamanhoTelefone == 3) {
        inputTelefone.value += ") ";
    }else if(tamanhoTelefone == 10) {
        inputTelefone.value += "-";
    }
})
