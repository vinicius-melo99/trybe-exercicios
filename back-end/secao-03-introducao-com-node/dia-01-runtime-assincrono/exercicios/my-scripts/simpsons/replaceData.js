const readData = require('./readData');
const writeData = require('./writeData');

const replaceData = async (idToEdit, newValue) => {
  let list = await readData('./data/simpsonFamily.json');

  list.forEach(({ id }, index) => {
    if(id === idToEdit) {
      list[index].name = newValue;
    } 
  });

  writeData(list, './data/simpsonFamily.json');
  
};

module.exports = replaceData;