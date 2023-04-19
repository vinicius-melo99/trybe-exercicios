const express = require('express');

const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body
  try {
    const [result] = await peopleDB.insert(person);
    return res.status(201)
      .json({ 
        message: `Pessoa com id ${result.insertId} cadastrada com sucesso` 
      });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const [result] = await peopleDB.select();
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await peopleDB.select(id);
    
    if(result.length === 0) return res.status(404).json({ message: 'Pessoa não encontrada' });

    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;