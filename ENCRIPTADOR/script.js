const inputTexto = document.querySelector(".inputTexto");
const mensagem = document.querySelector(".mensagem");

function btnCodificar(stringCodificada){
    const textoCodificado = codificar(inputTexto.value)
    mensagem.value = textoCodificado
    
}

function btnDescodificar(stringDescodificada){
    const textoDescodificado = descodificar(inputTexto.value)
    mensagem.value = textoDescodificado
   
}


function codificar(stringCodificada){
    let matrizCodigo = [["q","#$103"], ["a","#$106"], ["z","#$109"], ["w","#$108"], ["s","#$105"], ["x","#$102"], ["e","#$101"], ["d","#$104"], ["c","#$107"], ["r","#$100"], ["f","#$111"], ["v","#$114"], ["t","#$117"], ["g","#$10"], ["b","#$112"], ["y","#$115"], ["h","#$118"], ["n","#$113"], ["u","#$116"], ["j","#$119"], ["m","#$121"], ["i","#$125"], ["k","#$129"], ["o","#$127"], ["l","#$123"], ["p","#$%24"]];
    stringCodificada = stringCodificada.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringCodificada.includes(matrizCodigo[i][0])){
           stringCodificada = stringCodificada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringCodificada;
}

    function descodificar(stringDescodificada){
        let matrizCodigo = [["q","#$103"], ["a","#$106"], ["z","#$109"], ["w","#$108"], ["s","#$105"], ["x","#$102"], ["e","#$101"], ["d","#$104"], ["c","#$107"], ["r","#$100"], ["f","#$111"], ["v","#$114"], ["t","#$117"], ["g","#$10"], ["b","#$112"], ["y","#$115"], ["h","#$118"], ["n","#$113"], ["u","#$116"], ["j","#$119"], ["m","#$121"], ["i","#$125"], ["k","#$129"], ["o","#$127"], ["l","#$123"], ["p","#$%24"]];
        stringDescodificada = stringDescodificada.toLowerCase();
    
        for(let i=0; i< matrizCodigo.length; i++){
            if(stringDescodificada.includes(matrizCodigo[i][1])){
               stringDescodificada = stringDescodificada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
            }
        }
    return stringDescodificada;
}
function btncopiar() {

    const copiarTexto = document.getElementById("mensagem2");

    navigator.clipboard.writeText(copiarTexto.value);
}