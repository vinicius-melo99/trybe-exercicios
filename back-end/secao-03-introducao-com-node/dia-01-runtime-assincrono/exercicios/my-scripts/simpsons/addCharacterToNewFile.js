const readData = require('./readData');
const writeData = require('./writeData');

const addCharacterToNewFile = async () => {
  const oldList = await readData('./data/simpsonFamily.json');
  const newCharacter = { id: '5', name: 'Nelson Muntz' }
  const newList = [...oldList, newCharacter] 
  
  writeData(newList,'./data/simpsonFamily.json');
}

module.exports = addCharacterToNewFile;