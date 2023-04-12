const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total/', async (req, res) => {
  const allChocolates = await cacauTrybe.readCacauTrybeFile();
  const { chocolates } = allChocolates;
  const totalChocolates = chocolates.length;

  return res.status(200).json({ totalChocolates });
});

app.get('/chocolates/search', async (req, res) => {
  const allChocolates = await cacauTrybe.readCacauTrybeFile();
  const { chocolates } = allChocolates;
  const { name } = req.query;

  const filteredChocolates = chocolates.filter(({ name: chocName }) => chocName.includes(name));
  if(filteredChocolates.length === 0) return res.status(404).json([]);
  return res.status(200).json(filteredChocolates);
});

app.get('/chocolates/:id', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  const { id } = req.params;
  const chocolate = await chocolates.find(({ id: chocoId }) => chocoId === Number(id));

  if(!chocolate) return res.status(404).json({ message: 'Chocolate not found' });

  return res.status(200).json({ chocolate });
});



module.exports = app;