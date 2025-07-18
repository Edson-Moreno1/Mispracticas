/**
 * Valida que todos los elementos del array sean números válidos
 * @param {string[]} numerosString - Array de strings a validar
 * @returns {number[]} Array de números válidos
 */
export function validarNumeros(numerosString) {
    const numeros = [];
    
    for (let i = 0; i < numerosString.length; i++) {
        const numeroLimpio = numerosString[i].trim();
        const numero = parseFloat(numeroLimpio);
        
        if (isNaN(numero)) {
            throw new Error(`"${numeroLimpio}" no es un número válido`);
        }
        
        numeros.push(numero);
    }
    
    return numeros;
}

/**
 * Separa un array de números en pares e impares
 * @param {number[]} numeros - Array de números a separar
 * @returns {Object} Objeto con arrays pares e impares
 */
export function separarParesImpares(numeros) {
   
    if (!numeros || numeros.length === 0) {
        throw new Error('El array no puede estar vacío');
    }
    
    
    const pares = numeros.filter(numero => numero % 2 === 0);
    
   
    const impares = numeros.filter(numero => numero % 2 !== 0);
    
    return {
        pares: pares,
        impares: impares
    };
}