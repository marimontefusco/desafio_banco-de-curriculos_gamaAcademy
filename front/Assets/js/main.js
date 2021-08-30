//Consultando o endereço do CEP informado pela API ViaCep:
const cep = document.querySelector("#cep")

cep.addEventListener("blur", e => {
  //console.log(cep.value);

  let search = cep.value.replace("-", "")
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default"
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
      response.json().then(data => showData(data))
    })
    .catch(e => console.log("Deu erro: " + e.message))
})

//Alimentando os outros campos de endereço a partir dos dados retornados pela ViaCep, (após o usuário  preencher o input CEP)
const showData = result => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo]
      //console.log(campo)
    }
  }
}

//Juntando o front e o back a partir de uma Fetch, e enviando os dados do formulário para o banco de dados:
const Formulario = () => {
  let form = {
    name: document.getElementById("name").value,
    position: document.getElementById("position").value,
    date: document.getElementById("date").value,
    estadoCivil: document.getElementById("estadoCivil").value,
    gender: document.getElementById("gender").value,
    cep: document.getElementById("cep").value,
    logradouro: document.getElementById("logradouro").value,
    numero: document.getElementById("numero").value,
    bairro: document.getElementById("bairro").value,
    localidade: document.getElementById("localidade").value,
    uf: document.getElementById("uf").value,
    tel: document.getElementById("tel").value,
    cel: document.getElementById("cel").value,
    email: document.getElementById("email").value,
    rg: document.getElementById("rg").value,
    cpf: document.getElementById("cpf").value,
    veiculo: document.getElementById("veiculo").value,
    habilitacao: document.getElementById("habilitacao").value
  }
  console.log(form)
  return form
}

const criarCandidato = async (Candidate) => {
  const usuario = await fetch("hhttps://banco-de-curriculos-desafio.herokuapp.com/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(Formulario())
  })

  if (usuario.status === 200) {
    alert("Seu cadastro foi realizado com sucesso.")
  } else if (usuario.status === 500) {
    alert("Seu CPF ou email já foram cadastrados.")
  } else {
    alert("Seu cadastro não pôde ser realizado.")
  }
}
