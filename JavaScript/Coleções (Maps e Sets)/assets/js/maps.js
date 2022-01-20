const usuarios = new Map();

usuarios.set('Bruno', 'Admin');
usuarios.set('Claudio', 'User');
usuarios.set('Geovanna', 'User');
usuarios.set('Stephany', 'Admin');
usuarios.set('Rodrigo', 'Banned');
usuarios.set('Rafaela', 'Admin');

function getAdmins(usuarios){
    let admins = [];
    for([nome, funcao] of usuarios){
        if(funcao === 'Admin'){
            admins.push(nome); 
            //console.log(nome);
        }
    }
    return admins;
}

console.log(getAdmins(usuarios));