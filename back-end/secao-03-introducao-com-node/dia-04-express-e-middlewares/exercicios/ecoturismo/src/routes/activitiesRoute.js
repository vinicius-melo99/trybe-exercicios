const express = require('express');
const utilFunctions = require('../utils/utilFunctions');
const { 
  validateName,
  validatePrice, 
} = require('../middlewares/index');

const middlewares = [validateName, validatePrice];
const router = express.Router();

router.post('/', middlewares, async (req, res) => {
  const newActivity = req.body;

  await utilFunctions.addNewActivity(newActivity);
  return res.status(200).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;