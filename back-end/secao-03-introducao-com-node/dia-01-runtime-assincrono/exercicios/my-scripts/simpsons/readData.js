const fs = require('fs').promises;
const path = require('path');

const readData = async (pathName = './data/simpsons.json') => {
  try {
    const file = await fs.readFile(path.resolve(__dirname, pathName));
    const data = JSON.parse(file);

    return data;
  } catch (error) {
    console.error(`Erro ao realizar a leitura: ${error}`);
  }
};

module.exports = readData;