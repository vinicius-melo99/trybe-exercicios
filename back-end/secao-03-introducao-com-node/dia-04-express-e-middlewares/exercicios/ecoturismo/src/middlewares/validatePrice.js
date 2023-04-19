const validatePrice = (req, res, next) => {
  const body = req.body;

  if(!("price" in body)) {
    return res.status(400).json({ message: "O campo price é obrigatório." });
  }
  const { price } = body;

  if(price < 0) {
    return res.status(400).json({ 
      message: "O campo price deve ser um número maior ou igual a zero." 
    });
  }

  return next();
};

module.exports = validatePrice;