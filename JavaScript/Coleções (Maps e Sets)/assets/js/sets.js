var array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValues(array){
    const uniqueArray = new Set(array);

    return [...uniqueArray];
}

console.log(uniqueValues(array));

/* function uniqueArray(array){
    const uniqueArray = new Set();
    for(let i = 0; i<array.length; i++){
        uniqueArray.add(array[i]);
    }
    return uniqueArray;
} */