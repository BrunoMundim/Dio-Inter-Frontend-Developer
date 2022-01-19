// throw: Retorna como um erro;

function verifyArraySize(array, expectedSize){
    try{
        if(!array || !expectedSize) throw new ReferenceError ('Envie parâmetros válidos!');

        if(typeof array !== 'object') throw new TypeError('O array deve ser um objeto');

        if(typeof expectedSize != 'number') throw new TypeError('O tamanho esperado precisa ser um número!');

        if (array.length !== expectedSize) throw new RangeError ('O tamanho do array é diferente do tamanho esperado!');

        return array;

    } catch(e){
        if(e instanceof RangeError){
            console.log('RangeError!');
            console.log(e.stack);
            throw e;

        } else if(e instanceof TypeError){
            console.log('TypeError!');
            console.log(e.stack);
            throw e;

        } else if(e instanceof ReferenceError){
            console.log('ReferenceError!');
            console.log(e.stack);
            throw e;
        }
    }    
}

console.log(verifyArraySize([1, 2], 2));

