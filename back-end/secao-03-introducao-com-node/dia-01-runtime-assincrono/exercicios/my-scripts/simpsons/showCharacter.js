const readline = require('readline-sync');
const searchCharacter = require('./searchCharacter');

const showCharacter = async (simpsons) => {
  const id = readline.question('\nDigite o ID de um personagem: ');

  try {
    const character = await searchCharacter(id, simpsons);
    const { id: idCharacter, name } = character;

    console.log(`${idCharacter} - ${name}`);
  } catch (error) {
    console.error(`Erro: ${error.message}`);
  }
}

module.exports = showCharacter;