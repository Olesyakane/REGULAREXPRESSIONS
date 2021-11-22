"use strict";

const select = document.querySelector("#select");
//
//Funciones
//
/**
 * validaremos una palabra de 5 letras que empieza por a y termina por a 
 * Pista: regexObj.test(texto) Devuelve true o false según el patrón buscado coincide con la cadena
 */

const validarPalabra = () => {
    const pattern = /^[Aa].{3}a$/; 
    const texto = prompt("Texto (patrón:\"axxxa\")");
    if(pattern.test(texto)){//Cumple con el patrón

    }else{
        alerta(`${texto} no cumple con el patrón "axxxa"`);
    }
}




/**
 * 
 * @param {object} patron Patrón a comparar con el string
 * @param {string} msgPrompt mensaje del prompt para que el usuario sepa qué hacer
 */
const validarExpresionRegular = (patron,msgPrompt) => {
    
    const texto = prompt(msgPrompt);
    if(!patron.test(texto)){
        alerta(`${texto} no cumple con el patrón: ${msgPrompt}`);
    }
}




/**
 * 
 * @param {string} mensaje 
 */
const alerta = (mensaje) => {
    const msgEl = document.querySelector(".mensajes");

    msgEl.innerHTML = `<strong style="color:red">${mensaje}</strong>`;
}

/**
 * 
 * @returns {Array} devuelve un array con números o vacío si no hay números 
 */
const buscarNumeros = () => {
    
    const patron = /\d+/g;
    const cadena = prompt("Dame mucho texto alfanumérico");
    let resultado = cadena.match(patron);
    if (resultado===null){
        return [];
    }
    return resultado;
}
//
//Eventos
//
/**
 * 
 * @param {Object} e Evento del selector 
 */
select.onchange = (e) => {
    switch (e.target.value) {
        case "0":
            break;
        case "1":
            //validaremos una palabra de 5 letras que empieza por a y termina por a 
            validarPalabra();
            break;
        case "2":
            validarExpresionRegular(
                /^[0-9]{1,3},[0-9]{1,3}$/,
                "Coordenada (patrón: \"999,999\")" )
            break;
        case "3":
            validarExpresionRegular(
                /^(Lunes|Martes|Miércoles|Jueves|Viernes|Sábado|Domingo),[ ]?[0-9]{1,2}$/,
            `Fecha: "Miércoles,31"`);
            break;
        case "4":
            //dd/mm/aaaa
            validarExpresionRegular(
                /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/,
                "Fecha: dd/mm/aaaa. Ej:1/1/2001"
            );
            break;
        case "5":
            validarExpresionRegular(
                /^[+-]?\d+$/,
                "Número (Formatos Válidos: 1,-1, +1)"
            );
            break;
        case "6":
            validarExpresionRegular(
                /^(hiper|hipo)/,
                "Palabra que empiece por hiper o hipo"
            );
            break;
        case "7":
            validarExpresionRegular(
                /^.{6,}$/,
                "Mínimo 6 caracteres"
                );
            break;
        case "8":
            validarExpresionRegular(
                /Madrid/i, //i es un flag que no distingue mayúsculas de minúsculas
                "Capital de España"
                );
            break;
        case "9":
            validarExpresionRegular(
                /^\s*$/, //Cadena en blanco
                "Cadena en blanco"
            );
            break;
        case "match":
            //buscar números 
            const msgEl = document.querySelector(".mensajes");
            let numeros = buscarNumeros();
            msgEl.innerHTML=`<div>${numeros.join("<br>")}</div>`
            //console.log(numeros)
            break;
        default:
            break;
    }
}



