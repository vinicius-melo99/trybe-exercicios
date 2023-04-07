const searchCharacter = (idCharacter, allCharacters) => {
  return new Promise((resolve, reject) => {
    const findCharacter = allCharacters.some(({ id }) => id === idCharacter);

    if(!findCharacter) reject(new Error('id não encontrado'));

    const character = allCharacters.find(({ id }) => id === idCharacter);
    resolve(character);
  });
};

module.exports = searchCharacter;