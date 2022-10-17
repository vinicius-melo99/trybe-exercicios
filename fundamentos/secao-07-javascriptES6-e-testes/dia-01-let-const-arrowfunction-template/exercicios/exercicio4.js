// função 1

    const substituaX = nome => {
        const frase =  'Tryber x aqui!';
        const palavras = frase.split(" ");
        
        for (let index = 0; index < palavras.length; index += 1){
            if(palavras[index] === 'x') palavras[index] = nome;
        } 
        
        return palavras.join(" ");
    }
    
    let returnFunction1 = substituaX('Vinícius');

// função 2

const minhasSkills  = retorno => {
    const skills = ['CSS', 'HTML', 'JavaScript'];

    return `${retorno}
    Minhas três principais habilidades são: 
    ${skills[0]}
    ${skills[1]}
    ${skills[2]}`
}

console.log(minhasSkills(returnFunction1));