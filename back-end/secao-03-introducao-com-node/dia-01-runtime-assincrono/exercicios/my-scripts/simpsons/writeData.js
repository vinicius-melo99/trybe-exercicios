const fs = require('fs').promises;
const path = require('path');

const writeData = (characterList, pathName = './data/simpsons.json') => {
  try {
    fs.writeFile(path.resolve(__dirname, pathName), JSON.stringify(characterList));
    console.log('\nAtualização realizada!\n');
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

module.exports = writeData;