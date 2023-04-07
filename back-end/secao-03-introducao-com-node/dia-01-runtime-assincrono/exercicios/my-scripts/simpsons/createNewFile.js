const writeData = require('./writeData');

const createNewFile = (characters) => {
  const newList = characters.filter(({ id }) => Number(id) < 5);
  writeData(newList, './data/simpsonFamily.json')
}

module.exports = createNewFile;