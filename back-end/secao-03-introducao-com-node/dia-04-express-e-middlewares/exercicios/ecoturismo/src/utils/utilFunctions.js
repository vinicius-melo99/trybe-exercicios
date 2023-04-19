const fs = require('fs/promises');
const pth = require('path');

const readFile = async () => {
  const path = '../activities.json';

  try {
    const file = await fs.readFile(pth.resolve(__dirname, path), 'utf-8');
    return JSON.parse(file);
  } catch (error) {
    return null;
  }
};

const writeFile = async (newData) => {
  const path = '../activities.json';

  try {
    const file = await fs.writeFile(pth.resolve(__dirname, path), JSON.stringify(newData));
    return 1;
  } catch (error) {
    throw new Error('Error reading file.');
  }
};

const addNewActivity = async (activity) => {
  const allActivities = await readFile();
  allActivities.push(activity);

  await writeFile(allActivities);
  return 0;
};

module.exports = {
  readFile,
  writeFile,
  addNewActivity
}