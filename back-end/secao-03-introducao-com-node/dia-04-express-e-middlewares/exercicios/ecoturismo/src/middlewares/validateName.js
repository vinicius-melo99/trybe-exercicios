const validateName = (req, res, next) => {
  const body = req.body;

  if(!("name" in body)) {
    return res.status(400).json({ message: "O campo nome é obrigatório." });
  }
  const { name } = body;

  if(name.length < 4) {
    return res.status(400).json({ 
      message: "O campo name deve ter pelo menos 4 caracteres", 
    });
  }
  return next();
};

module.exports = validateName;