const Person = require("../models/Person");

exports.home = (req, res) => {
  res.json({message: "Resposta da API"});
}

exports.create = async (req, res) => {
  const { name, salary, approved } = req.body;
  const person = { name, salary, approved };

  try {

    await Person.create(person);

    res.status(201).json({ message: "Cadastro realizado com sucesso!" });

  }catch(err) {
    res.status(500).json({ error: err });
  }

}

exports.findAllPerson = async (req, res) => {
  try {
    const people = await Person.find();

    res.status(200).json(people);

  }catch(err) {
    res.status(500).json({ error: err });
  }
}