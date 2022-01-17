var word = prompt('Qual a palavra você quer verificar?');
word = word.toLowerCase();

function invertWord(word){
    if(!string) return 'String inexistente';
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }    
    return reversedWord;
}

function palindrome(word){
    if(word === invertWord(word)){
        console.log('É um palíndromo');
    } else {
        console.log('Não é um palíndromo');
    }  
}

invertWord(word);
palindrome(word);