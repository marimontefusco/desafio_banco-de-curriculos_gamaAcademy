const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: true },
    position: { type: String, unique: false, required: true },
    date: { type: Date, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: false },
    gender: { type: String, unique: false, required: false },
    cep: { type: String, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },  
    localidade: { type: String, unique: false, required: true }, 
    uf: { type: String, unique: false, required: true }, 
    tel: { type: String, unique: false, required: false },   
    cel: { type: String, unique: true, required: true },   
    email: { type: String , unique: true, required: true },
    rg: { type: String, unique: true, required: false },
    cpf: { type: String, unique: true, required: true }, 
    veiculo: { type: String, unique: false, required: false },
    habilitacao: { type: String, unique: false, required: false },
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema)