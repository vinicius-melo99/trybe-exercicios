const showData = (simpsons) => {
  console.log('Lista de personagens:\n');
  simpsons.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
};

module.exports = showData;