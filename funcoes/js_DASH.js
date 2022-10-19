
function atualizar_nome(){
    var usuario
    var saudacao = window.document.getElementById("saudacao");

    usuario =  localStorage.getItem('valueText');

    saudacao.innerHTML = `Bem-vindo ${usuario}`
}

function logout(){
    var adeus = window.document.getElementById("adeus")
    adeus.innerHTML = `<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg> <strong class="me-auto">System Mars</strong> <small>1 seg atrás</small> <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button> </div> <div class="toast-body"> Já estou com saudade... <br> Mas nunca é um Adeus! </div> </div>`

    setTimeout(function(){
        window.location.href = "index.html"
    }, 2000); 
    
}

function iniciar_atendimento(){
    window.location.href = "iniciar_atendimento.html"
}

function vendas(){
    window.location.href = "vendas.html"
}

function historico(){
    window.location.href = "historico.html"
}

function desempenho(){
    window.location.href = "desempenho.html"
}


function cadastrar_pausas(){
    window.location.href = "cadastrar_pausas.html"
}

