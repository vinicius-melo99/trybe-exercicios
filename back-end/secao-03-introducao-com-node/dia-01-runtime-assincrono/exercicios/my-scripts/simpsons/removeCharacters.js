const readData = require('./readData');
const writeData = require('./writeData');

const removeCharacters = async (allCharacters) => {
  const newCharacters = allCharacters.filter(({ id }) => id !== "6" && id !== "10");
  writeData(newCharacters);
  
  const newList = await readData();
  console.log('Lista atualizada:\n');
  console.log(newList);
};

module.exports = removeCharacters;