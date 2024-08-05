
// 1 - Función que indica si un número es par o impar//

function esParImpar(n) {
    if (n % 2 === 0) {
        return(`${n} es par`);
    } else {
        return(`${n} es impar`);
    }
}

console.log(esParImpar(8));
console.log(esParImpar(13));


// 2 -  Función que indica qué número es mayor o si son iguales //

function compararNumeros(n1, n2) {
    if (n1 > n2) {
        return(`${n1} es mayor que ${n2}`);
    } else if (n2 > n1) {
        return(`${n2} es mayor que ${n1}`);
    } else {
        return(`${n1} y ${n2} son iguales`);
    }
}

console.log(compararNumeros(5, 20));
console.log(compararNumeros(20, 8));
console.log(compararNumeros(12, 12));


// 3 - Función que indica si un número es múltiplo de 5 //

function esMultiploDeCinco(n) {
    if (n % 5 === 0) {
        return(`${n} es múltiplo de 5`);
    } else {
        return(`${n} no es múltiplo de 5`);
    }
}

console.log(esMultiploDeCinco(20));
console.log(esMultiploDeCinco(12));


// 4 - Función que imprime todos los números desde 0 hasta el número dado //


function obtenerNumerosHasta(numero) {
    let numeros = [];
    for (let i = 0; i <= numero; i++) {
        numeros.push(i);
    }
    return numeros;
}

// Ejemplo de uso
let resultados = obtenerNumerosHasta(5);
console.log(resultados);


// 5 - Función que imprime una palabra la cantidad de veces indicada //

function repetirPalabra(palabra, cantidad) {
    let resultado = '';
    for (let i = 0; i < cantidad; i++) {
        resultado += palabra + '\n';
    }
    return resultado;
}

let resultado = repetirPalabra("Hola", 3);
console.log(resultado);


// 6 - Función que imprime todos los valores de un array //

function imprimirValoresArray(array) {
    let resultado = '';
    for (let i = 0; i < array.length; i++) {
        resultado += array[i] + '\n';
    }
    return resultado;
}

let valores = [1, 2, 3];
let resultados1 = imprimirValoresArray(valores);
console.log(resultados1);


// Función que imprime todos los valores de un array menos el de la 5ta posición //

function imprimirArraySinQuinto(array) {
    let resultado = '';
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) { 
            resultado += array[i] + '\n';
        }
    }
    return resultado;
}


let valores1 = [1, 2, 3, 4, 5, 6, 7];
let resultado2 = imprimirArraySinQuinto(valores1);
console.log(resultado2);


// Función que multiplica cada número del array por el número dado //

function multiplicarArrayPorNumero(array, numero) {
    let resultado = '';
    for (let i = 0; i < array.length; i++) {
        resultado += (array[i] * numero) + '\n';
    }
    return resultado;
}

let valores2 = [1, 2, 3, 4, 5];
let numero = 3;
let resultado3 = multiplicarArrayPorNumero(valores2, numero);
console.log(resultado3);


