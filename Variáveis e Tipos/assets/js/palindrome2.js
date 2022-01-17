var word = prompt('Qual a palavra você quer verificar?');
word = word.toLowerCase();

function invertWord(word){
    if(!word) return 'word inexistente';
    word = word.split('').reverse().join('');
    return word;
}

function palindrome(word){
    if(word == invertWord(word)){
        console.log(`${word} é um palíndromo`);
    } else {
        console.log(`${word} não é um palíndromo`);
    }  
}

palindrome(word);
invertWord(word);