/**
 * Encuentra el número mayor en un array
 * @param {number[]} numeros - Array de números
 * @returns {number} - El número mayor del array
 */
function encontrarMayor(numeros) {

    if (!numeros || numeros.length === 0) {
        throw new Error('El array no puede estar vacío');
    }
    

    return Math.max(...numeros);
}


module.exports = encontrarMayor;