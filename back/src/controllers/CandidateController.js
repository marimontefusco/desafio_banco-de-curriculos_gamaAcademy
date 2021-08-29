const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {

        const { name, position, date, estadoCivil, gender, cep, logradouro, numero, bairro, localidade, uf, tel, cel, email, rg, cpf, veiculo, habilitacao } = req.body;

        const newCandandidate = new Candidate();

        newCandandidate.name = name;
        newCandandidate.position = position;
        newCandandidate.date = date;
        newCandandidate.estadoCivil = estadoCivil;
        newCandandidate.gender = gender;
        newCandandidate.cep = cep;
        newCandandidate.logradouro = logradouro;
        newCandandidate.numero = numero;
        newCandandidate.bairro = bairro;
        newCandandidate.localidade = localidade;
        newCandandidate.uf = uf;
        newCandandidate.tel = tel;
        newCandandidate.cel = cel;
        newCandandidate.email = email;
        newCandandidate.rg = rg;
        newCandandidate.cpf = cpf;
        newCandandidate.veiculo = veiculo;
        newCandandidate.habilitacao = habilitacao;

        newCandandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Problemas com nosso servidor');
            }
            return res.status(200).send(savedCandidate);
        });
    },
};
