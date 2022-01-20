/*
ESCOPO

Escopo global (var): pode ser visto em todo o código.
Escopo local (let): Quando é declarada dentro de um bloco sua visibilidade pode ficar disponível ou não.
*/

var escopoGlobal = 'global';
console.log(escopoGlobal);
function escopoGlobalInterno () {
    let escopoGlobalInterno = 'local'
    console.log(escopoGlobalInterno); //É preciso colocar ele dentro da function e chamar a função posteriormente
}
escopoGlobalInterno();