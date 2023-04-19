const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  const { id } = req.params;
  if(teams.some(({ id: teamId }) => teamId === Number(id))) {
    req.batata = {
      batatinha: {
        cor: 'amarela',
        peso: '78g',
        casca: true
      }
    }
    next();
  } else {
    res.status(404).json({ message: "O time não existe!" });
  }
};

module.exports = existingId;