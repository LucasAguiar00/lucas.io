function atualizar_nome(){
    var usuario
    var saudacao = window.document.getElementById("saudacao");

    usuario =  localStorage.getItem('valueText');

    saudacao.innerHTML = `Cadastro de pausas: ${usuario}`
}