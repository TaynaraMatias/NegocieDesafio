window.onload = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    consultarCEP(params.cep);
}

function consultarCEP(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url)
    .then(response => response.json()) 
    .then(data => apresentarEndereco(data));
  }
  
  function apresentarEndereco(dados){
    let resultado = document.querySelector('#resultado');
  
    if(dados.erro){
      resultado.innerHTML = "Não foi possível localizar endereço!";
      return;
    }
    
    resultado.innerHTML = `<p id="cepDigitado">${dados.cep}</p>
    <p><b>Rua:</b> ${dados.logradouro}</p>
    <p><b>Complemento:</b> ${dados.complemento}</p>
    <p><b>Bairro:</b> ${dados.bairro}</p>
    <p><b>Cidade:</b> ${dados.localidade}</p>
    <p><b>Estado:</b> ${dados.uf}</p>`;
  }