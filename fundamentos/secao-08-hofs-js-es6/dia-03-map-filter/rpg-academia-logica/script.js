const personagens = require('./data');

// Encontre o personagem que utiliza a habilidade Teleportar
// Saida Esperada: Mago
const findTeleport = () => {
    return personagens.find( (personagem) => personagem.habilidades.includes('Teleportar')).classe;
};
// console.log(findTeleport());

// Verifique se todas as classes tem 3 habilidades
//Saida Esperada: true
const verifySkills = () => {
    return personagens.every( (personagem) => {
        return personagem.habilidades.length === 3
    });
}
// console.log(verifySkills());

// Verifique se pelo menos uma classe tem o hp maior que 150 e retorne um valor booleano.
// Saida Esperada: false
const verifyHP = () => {
    return personagens.some( (personagem) => {
        return personagem.status.hp > 150;
    });
}
// console.log(verifyHP());

// Crie uma função que liste todas as habilidades do Arqueiro
// Saida Esperada: ['Desviar', 'Precisão', 'Tiro Flamejante']
const arrowSkills = () => {
    return personagens.find( (personagem) => {
        return personagem.classe === 'Arqueiro'
    }).habilidades
}   
// console.log(arrowSkills());

// Crie uma função que ordene as classes pelo maior ataque e imprima o nome da classe e o ataque:
// Esperado: ["O ataque do mago é 40", "O ataque do Arqueiro é 20", "O ataque do Guerreiro é 10"]
const attack = () => {
   let orderedByAttack = [];
   
   orderedByAttack = personagens.sort( (a,b) => a.status.hp - b.status.hp)
   return orderedByAttack.map( (personagem) => {
        return `O ataque do ${personagem.classe} é ${personagem.status.atk}`;
   });
}
// console.log(attack());
// Faça uma função que retorne a somatoria de todos os ataques
// Esperado: "O ataque total é 70"
const totalAttack = () => {
    let totalAttackSum = 0;

    personagens.forEach( (personagem) => {
        totalAttackSum += personagem.status.atk;    
    });

    return `O ataque total é ${totalAttackSum}`;
}
// console.log(totalAttack());
//Faça uma função que retorne um novo array com todas as habilidades ordenadas
// saida esperada: 
// [
//   'Ataque Rapido',
//   'Bloquear',
//   'Bola de fogo',
//   'Desviar',
//   'Nevasca',
//   'Precisão',
//   'Pular',
//   'Teleportar',
//   'Tiro flamejante'
// ]
const allSkillsOrdered = () => {
    let skills = [];

    personagens.forEach( (personagem) => {
        personagem.habilidades.forEach( (habilidade) => {
            skills.push(habilidade);
        });
    });

    return skills.sort();
};

console.log(allSkillsOrdered());