function mascaraCEP(){
    var cep = document.getElementById('cep');
    if(cep.value.length == 5){
      cep.value += "-"
    }
}

function irParaPaginaDeResultado(){
  let campoCep = document.getElementById('cep');
      if(campoCep.value.length !=9){
        alert("Campo obrigatório. Preencha com atenção!")
      }else{
        window.location.href = "ResultadoConsulta.html?cep=" + document.querySelector('#cep').value;
      }
     
}
