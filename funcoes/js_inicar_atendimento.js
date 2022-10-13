
function atualizar_nome(){
    var usuario
    var saudacao = window.document.getElementById("saudacao");

    usuario =  localStorage.getItem('valueText');

    saudacao.innerHTML = `Operador(a): ${usuario}`
}

/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('numero').onkeyup = function(){
		mascara( this, mtel );
	}
}


function copiar(){
    pause();
    let notificacao = document.getElementById("notificação")
    notificacao.innerHTML = '<div class="alert alert-warning" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Copiado!</strong> Verifique as informações antes de colar no ADM! </div>'

    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 2000);

    // Pegando as variáveis que serão copiadas
    var cadastro = document.getElementById("cadastro").value
    var bfp = document.getElementById("bfp").value
    var contato = document.getElementById("contato").value
    var numero = document.getElementById("numero").value
    var descricao = document.getElementById("descricao").value
    var prot_retorno = document.getElementById("prot_retorno").value
    var prot_atendimento = document.getElementById("prot_atendimento").value
    var classificacao_2 = document.getElementById("classificacao_2_").value
    
    //   "ajuste técnico" para a data
    let data = new Date()
    let dia = data.getUTCDate()
    let mes = data.getUTCMonth()+1
    if (dia<10){
        dia = String(dia)
        dia = '0'+dia
    }
    dia = String(dia)
    mes = String(mes)
    
    // Criando o texto para copiar
    let texto_completo = `<b>${cadastro}</b> <br>	<hr> <b><font color="blue"> Conexão: ${bfp} | Contato: ${contato} | Telefone: ${numero} </b></font><hr> ${dia}/${mes}→ ${descricao} <br><br><br>	${classificacao_2} <hr> Protocolo de atendimento: ${prot_atendimento} <br> Protocolo de retorno: ${prot_retorno}`

    // colando na área de transferência
    navigator.clipboard.writeText(texto_completo)    
}



function apagar(){
    // aqui é o código para direcionar para a DASHBOARD
    let pergunta = confirm("Deseja Apagar?")
    if (pergunta==true){
        window.location.href = "iniciar_atendimento.html"
    }
    
}

function classificacao_1(){
    var classificacao_1 = document.getElementById("classificacao_1").value
    var classificacao_2 = document.getElementById("classificacao_2")
    
    if (classificacao_1=="1 - Sem contato ou inconclusivo"){
        classificacao_2.innerHTML = `<br><p style="color: white;">Classificação Nível 2:</p> <select id="classificacao_2_" name="nivel2" class="campo"> <option value=""> </option> <option value="SCI:100 - Tentativas de contato">SCI:100 - Tentativas de contato</option> <option value="SCI:101 - Ligação instável">SCI:101 - Ligação instável</option> <option value="SCI:102 - Agendamento">SCI:102 - Agendamento</option> <option value="SCI:103 - Visita técnica pós tentativa de contato">SCI:103 - Visita técnica pós tentativa de contato</option> <option value="SCI:104 - Sem repasse de CPF">SCI:104 - Sem repasse de CPF</option> <option value="SCI:105 - Sistema indisponível">SCI:105 - Sistema indisponível</option> <option value="SCI:106 - Casos excepcionais que não se enquadram em nenhum dos demais codigos">SCI:106 - Casos excepcionais que não se enquadram em nenhum dos demais codigos</option> </select>`
    }
    if (classificacao_1=="2 - Informação"){
        classificacao_2.innerHTML = `<br><p style="color: white;">Classificação Nível 2:</p> <select id="classificacao_2_" name="nivel2" class="campo"> <option value=""> </option> <option value="INF:200 - Informação sobre vendas">INF:200 - Informação sobre vendas</option> <option value="INF:201 - Informação sobre demais serviços e duvidas em geral">INF:201 - Informação sobre demais serviços e duvidas em geral</option> <option value="INF:202 - Informação sobre visita técnica em atraso">INF:202 - Informação sobre visita técnica em atraso </option> <option value="INF:203 - Informação sobre visita técnica dentro do prazo">INF:203 - Informação sobre visita técnica dentro do prazo</option> <option value="INF:204 - Informação sobre instalação em atraso">INF:204 - Informação sobre instalação em atraso</option> <option value="INF:205 - Informação sobre instalação dentro do prazo">INF:205 - Informação sobre instalação dentro do prazo</option> </select>`
    }
    if (classificacao_1=="3 - Finaceiro"){
        classificacao_2.innerHTML = `<br><p style="color: white;">Classificação Nível 2:</p> <select id="classificacao_2_" name="nivel2" class="campo"> <option value=""> </option> <option value="FIN:300 - Desbloqueio 3001 - liberado pelo operacor">FIN:300 - Desbloqueio 3001 - liberado pelo operacor</option> <option value="FIN:301 - Desbloqueio 3001 ou bloqueio verde - impossivel liberação">FIN:301 - Desbloqueio 3001 ou bloqueio verde - impossivel liberação</option> <option value="FIN:302 - Informação sobre boletos ou faturas">FIN:302 - Informação sobre boletos ou faturas</option> <option value="FIN:303 - Problema para efetuar pagamento">FIN:303 - Problema para efetuar pagamento</option> <option value="FIN:304 - Solicitação de mudança de data de vencimento">FIN:304 - Solicitação de mudança de data de vencimento</option> <option value="FIN:305 - Solicitação de alteração de plano(TV ou internet)">FIN:305 - Solicitação de alteração de plano(TV ou internet)</option> <option value="FIN:306 - Aplicação de promoções">FIN:306 - Aplicação de promoções</option> </select>`
    }
    if (classificacao_1=="4 - Suporte - Geral"){
        classificacao_2.innerHTML = `<br><p style="color: white;">Classificação Nível 2:</p> <select id="classificacao_2_" name="nivel2" class="campo"> <option value=""> </option> <option value="SGR:400 - Mantido em suporte ou concluído: problema externo ou casos de franca">SGR:400 - Mantido em suporte ou concluído: problema externo ou casos de franca</option> <option value="SGR:401 - Liberação de portas">SGR:401 - Liberação de portas</option> <option value="SGR:402 - E-mail, gerenciadores de e-mail e hospedagem">SGR:402 - E-mail, gerenciadores de e-mail e hospedagem</option> <option value="SGR:403 - Instabilidade na rede ou problema de infraestrutura">SGR:403 - Instabilidade na rede ou problema de infraestrutura</option> <option value="SGR:404 - Visita técnica por recusa de procedimento">SGR:404 - Visita técnica por recusa de procedimento</option> <option value="SGR:417 - Visita técnica sem procedimento">SGR:417 - Visita técnica sem procedimento</option> </select>`
    }
    if (classificacao_1=="5 - Suporte - TV"){
        classificacao_2.innerHTML = `<br><p style="color: white;">Classificação Nível 2:</p> <select id="classificacao_2_" name="nivel2" class="campo"> <option value=""> </option> <option value="STV:406 - Suporte concluído com procedimento TV">STV:406 - Suporte concluído com procedimento TV</option> <option value="STV:407 - Suporte concluído sem procedimento TV">STV:407 - Suporte concluído sem procedimento TV</option> <option value="STV:408 - Visita técnica com procedimento TV">STV:408 - Visita técnica com procedimento TV</option> </select>`
    }
    if (classificacao_1=="6 - Suporte - Fibra"){
        classificacao_2.innerHTML = `<br><p style="color: white;">Classificação Nível 2:</p> <select id="classificacao_2_" name="nivel2" class="campo"> <option value=""> </option> <option value="SFB:409 - Suporte concluído sem procedimento fibra">SFB:409 - Suporte concluído sem procedimento fibra</option> <option value="SFB:410 - Suporte concluído com procedimento fibra">SFB:410 - Suporte concluído com procedimento fibra</option> <option value="SFB:411 - Visita técnica com procedimento fibra">SFB:411 - Visita técnica com procedimento fibra</option> <option value="SFB:412 - Auxilio na configuração de roteador">SFB:412 - Auxilio na configuração de roteador</option> <option value="SFB:413 - Troca de roteador">SFB:413 - Troca de roteador</option> </select>`
    }
    if (classificacao_1=="7 - Suporte - Radio"){
        classificacao_2.innerHTML = `<br><p style="color: white;">Classificação Nível 2:</p> <select id="classificacao_2_" name="nivel2" class="campo"> <option value=""> </option> <option value="SRD:414 - Suporte concluído sem procedimento rádio">SRD:414 - Suporte concluído sem procedimento rádio</option> <option value="SRD:415 - Suporte concluído com procedimento rádio">SRD:415 - Suporte concluído com procedimento rádio</option> <option value="SRD:416 - Visita técnica com procedimento rádio">SRD:416 - Visita técnica com procedimento rádio</option> </select>`
    }
    if (classificacao_1=="8 - Vendas"){
        classificacao_2.innerHTML = `<br><p style="color: white;">Classificação Nível 2:</p> <select id="classificacao_2_" name="nivel2" class="campo"> <option value=""> </option> <option value="VEM:500 - Venda de plano de internet">VEM:500 - Venda de plano de internet</option> <option value="VEM:501 - Venda de plano TV">VEM:501 - Venda de plano TV</option> <option value="VEM:502 - Venda de combo TV + internet">VEM:502 - Venda de combo TV + internet</option> <option value="VEM:503 - Teste de visada">VEM:503 - Teste de visada</option> </select>`
    }
    if (classificacao_1=="9 - Serviços"){
        classificacao_2.innerHTML = `<br><p style="color: white;">Classificação Nível 2:</p> <select id="classificacao_2_" name="nivel2" class="campo"> <option value=""> </option> <option value="SER:600 - Transferência de endereço">SER:600 - Transferência de endereço</option> <option value="SER:601 - Mudança de cômodo">SER:601 - Mudança de cômodo</option> <option value="SER:602 - Ponto adicional">SER:602 - Ponto adicional</option> <option value="SER:603 - Configuração de roteador">SER:603 - Configuração de roteador</option> <option value="SER:604 - Montagem de rede">SER:604 - Montagem de rede</option> </select>`
    }
    if (classificacao_1=="10 - Exclusivos Chat ou sistema Indisponivel"){
        classificacao_2.innerHTML = `<br><p style="color: white;">Classificação Nível 2:</p> <select id="classificacao_2_" name="nivel2" class="campo"> <option value=""> </option> <option value="CHT:700 - Suporte encerrado por tempo limite sem resposta">CHT:700 - Suporte encerrado por tempo limite sem resposta</option> <option value="CHT:702 - Itendimento iniciado incorretamente">CHT:702 - Itendimento iniciado incorretamente</option> <option value="CHT:703 - Mantido em suporte por procedimento incompleto">CHT:703 - Mantido em suporte por procedimento incompleto</option> <option value="CHT:704 - Atendimento interrupto ">CHT:704 - Atendimento interrupto </option> </select>`
    }
    if (classificacao_1=="11 - Cancelamento"){
        classificacao_2.innerHTML = `<br><p style="color: white;">Classificação Nível 2:</p> <select id="classificacao_2_" name="nivel2" class="campo"> <option value=""> </option> <option value="CAN:800 - Informação sobre cancelamento">CAN:800 - Informação sobre cancelamento</option> <option value="CAN:801 - Pedido de cancelamento">CAN:801 - Pedido de cancelamento</option> </select>`
    }

}

function novo(){
    

    var cadastro = document.getElementById("cadastro")
    var bfp = document.getElementById("bfp")
    var contato = document.getElementById("contato")
    var numero = document.getElementById("numero")
    var prot_retorno = document.getElementById("prot_retorno")
    var prot_atendimento = document.getElementById("prot_atendimento")

    cadastro.value = ""
    bfp.value = "Padrão Fibra"
    contato.value = ""
    numero.value = ""
    prot_retorno.value = ""
    prot_atendimento.value = ""    

    pause();
    reset();
    start();
    
    //Para o botão sumir após salvar
    var novo = document.getElementById("novo")
    novo.innerHTML=""

}

function salvar(){
    // Verificação para saber se é possível salvar as informações
    var hora = document.getElementById('hour').innerText
    var minuto = document.getElementById('minute').innerText
    var segundo = document.getElementById('second').innerText
    var milisegundo = document.getElementById('millisecond').innerText
    
    hora =String(hora)
    minuto =String(minuto)
    segundo =String(segundo)
    milisegundo = String(milisegundo)

    if (((hora=="00")&&(minuto=="00"))&&((segundo=="00")&&(milisegundo=="000"))){
        window.alert("Não será possível salvar\nVocê não iniciou um novo atendimento.")       
    } else{
        pause();  
        let notificacao = document.getElementById("notificação")
        notificacao.innerHTML = '<div class="alert alert-success" role="alert"> Salvo com sucesso! </div>'
        window.setTimeout(function() {
            $(".alert").fadeTo(500, 0).slideUp(500, function(){
                $(this).remove(); 
            });
        }, 2000);

        //Para o botão sumir após salvar
        var salvar = document.getElementById('salvar')
        salvar.innerHTML=""
    }


    
}


//CRONOMETRO

"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;


function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}