const readData = require('./readData');
const showData = require('./showData');
const searchCharacter = require('./searchCharacter');
const showCharacter = require('./showCharacter');
const removeCharacters = require('./removeCharacters');
const createNewFile = require('./createNewFile');
const addCharacterToNewFile = require('./addCharacterToNewFile');
const replaceData = require('./replaceData');

const main = async () => {
  const simpsons = await readData();
  // showData(simpsons);

  showCharacter(simpsons);
  removeCharacters(simpsons);
  createNewFile(simpsons);
  addCharacterToNewFile();
  replaceData('5', 'Maggie Simpson');
};

main();