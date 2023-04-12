const express = require('express');
const teams = require('./teams');

const app = express();

app.use(express.json());

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { name, initials } = req.body;

  const updateTeam = teams.find(({ id: idTeam }) => Number(id) === idTeam);

  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found!' });
  }
  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

module.exports = app;