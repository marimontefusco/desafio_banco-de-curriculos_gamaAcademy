// Para a conclusão do cadastro, consultar o endereço do CEP informado (Consultar via API ViaCep):

const cep = document.querySelector("#cep");

cep.addEventListener("blur", (e) => {
    //console.log(cep.value);

    let search = cep.value.replace("-" , "");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    };

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => { response.json()
        .then( data => showData(data))
    })
    .catch( e => console.log("Deu erro: " + e.message))

});



//Vamos alimentar os outros campos, retornando os dados da Api ViaCep, após o usuário  preencher o input CEP:

const showData = (result) => {
    for( const campo in result ) {
        if(document.querySelector("#" + campo)) {
           document.querySelector("#" + campo).value = result[campo];
            //console.log(campo)
        };      
    };
};