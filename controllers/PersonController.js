const Person = require("../models/Person");

exports.home = (req, res) => {
  return res.json({message: "Resposta da API"});
}

exports.create = async (req, res) => {
  const { name, salary, approved } = req.body;
  const person = { name, salary, approved };

  try {

    await Person.create(person);

    return res.status(201).json({ message: "Cadastro realizado com sucesso!" });

  }catch(err) {
    res.status(500).json({ error: err });
  }

}

exports.findAllPerson = async (req, res) => {
  try {
    const people = await Person.find();

    return res.status(200).json(people);

  }catch(err) {
    res.status(500).json({ error: err });
  }
}

exports.findPerson = async (req, res) => {
  try {
    const { id } = req.params;

    const person = await Person.findOne({_id: id });

    if (!person) {
      return res.status(422).json({ message: "O cadastro não existe."});
    }

    return res.status(200).json(person);

  }catch(err) {
    return res.status(500).json({ error: err });
  }
}