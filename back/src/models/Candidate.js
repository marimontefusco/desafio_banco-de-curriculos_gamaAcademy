const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: true },
    position: { type: String, unique: false, required: true },
    date: { type: Number, unique: false, required: true },//number ou string?
    estadoCivil: { type: String, unique: false, required: false },
    gender: { type: String, unique: false, required: false },
    cep: { type: Number, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    numero: { type: Number, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },  
    localidade: { type: String, unique: false, required: true }, 
    uf: { type: String, unique: false, required: true }, 
    tel: { type: Number, unique: false, required: false },   
    cel: { type: Number, unique: true, required: true },   
    email: { type: String , unique: true, required: true },
    rg: { type: Number, unique: true, required: false },
    cpf: { type: Number, unique: true, required: true }, 
    veiculo: { type: String, unique: false, required: false },
    habilitacao: { type: String, unique: false, required: false },
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema)