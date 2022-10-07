function zerar(){
    var resp
    resp = window.confirm("Deseja apagar?")

    if (resp == true) {
        let protocolo_chat = document.getElementById("Protocolo_Chat")
        let protocolo_adm = document.getElementById("Protocolo_ADM")
        let nome = document.getElementById("nome")
        let telefone = document.getElementById("telefone")
        let bfp = document.getElementById("BFP")
        let descricao = document.getElementById("Descricao")

        protocolo_chat.value = ""
        protocolo_adm.value = ""
        nome.value = ""
        telefone.value = ""
        bfp.value = "Padrão Fibra"        
        descricao.value = ""    

        let notificacao = document.getElementById("notificacao")
        notificacao.innerHTML = '<div class="alert alert-danger" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>EXCLUÍDO!</strong>  </div>'

        window.setTimeout(function() {
            $(".alert").fadeTo(500, 0).slideUp(500, function(){
                $(this).remove(); 
            });
        }, 2000);

    }

}


function mostrar_alarme(){
    let notificacao = document.getElementById("alarme_show")
    notificacao.innerHTML = '<div <form class="formulario" id="formulario2"action=""> <h2 style="color: white; text-shadow: 2px 2px rgba(0, 0, 0, 0.466);"><strong>Horário dos intervalos</strong> </h2> Pausa 1: <input id="pausa1" type="time" placeholder="00:00" onchange="alarme()" required> Intervalo: <input id="intervalo" type="time" placeholder="00:00" onchange="alarme()" required> Pausa 2: <input id="pausa2" type="time" placeholder="00:00" onchange="alarme()" required> <button class="butao" onclick="confirmar()">Confirmar</button> <br> <br> </form> </div>'

    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 2000);

}

function confirmar(){
    let notificacao = document.getElementById("alarme_show")
    notificacao.innerHTML = '<div  </div>'
}

function copiar(){
    
    let protocolo_chat = document.getElementById("Protocolo_Chat")
    let protocolo_adm = document.getElementById("Protocolo_ADM")
    let nome = document.getElementById("nome")
    let telefone = document.getElementById("telefone")
    let bfp = document.getElementById("BFP")
    let descricao = document.getElementById("Descricao")
    
    let data = new Date()
    let dia = data.getUTCDate()
    let mes = data.getUTCMonth()+1
    if (dia<10){
        dia = String(dia)
        dia = '0'+dia
    }
    dia = String(dia)
    mes = String(mes)
    
    let texto_completo = `<b><font color=blue>Protocolo do Chat: ${protocolo_chat.value} </b></font><hr> <b><font color=blue>	${bfp.value} </b></font><hr> ${dia}/${mes}→ Atendimento realizado com Sr(a). ${nome.value} via chat no número ${telefone.value}. <br> ${descricao.value}`
        
    navigator.clipboard.writeText(texto_completo)    
    
    let notificacao = document.getElementById("notificacao")
    
    notificacao.innerHTML = '<div class="alert alert-success" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Copiado!</strong> Verifique as informações antes de colar no ADM! </div>'

    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 2000);

}


function protocolo(){
        
    let protocolo_chat = document.getElementById("Protocolo_Chat")
    let descricao = document.getElementById("Descricao")
        descricao = descricao.value // pegando o valor
    let tamanho = descricao.length // pegando o tamanho do "vetor"
    let virgula = "."
    let posi = 0
    var trecho = ""
    for (var i = 0; i < tamanho; i++){                     
        if (descricao[i]==virgula){
            posi = i  
            break
        }
        trecho = trecho + descricao[i]                 
    }        
    
    let texto_completo = `${trecho}<hr><b><font color=blue> Protocolo do Chat: ${protocolo_chat.value} </b></font><hr>`

    let notificacao = document.getElementById("notificacao")
    notificacao.innerHTML = '<div class="alert alert-warning" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Copiado!</strong> Verifique as informações antes de colar no ADM! </div>'

    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 2000);

    navigator.clipboard.writeText(texto_completo);

}


function Transferir(){
    
    let protocolo_chat = document.getElementById("Protocolo_Chat")
    let nome = document.getElementById("nome")
    let telefone = document.getElementById("telefone")
        
    const response = navigator.clipboard.readText();
    var textArea = response;
    alert(response)

    /*var posi1 = text.search("Nome: ");
    var posi2 = text.search("Telefone: ");
    var posi3 = text.search("Número de protocolo: ");*/

    

} 

/*
function alarme(){
    var dataAtual = new Date()
    var horas = dataAtual.getHours()
    var minutos = dataAtual.getMinutes()
    horas = Number(horas)
    minutos = Number(minutos)
    horas_agora = horas*60 + minutos

    var pausa1 = document.getElementById("pausa1").value
    var intervalo = document.getElementById("intervalo").value
    var pausa2 = document.getElementById("pausa2").value

    horas_p1 = calc_hora(pausa1) + calc_min(pausa1)
    horas_int = calc_hora(intervalo) + calc_min(intervalo)
    horas_p2 = calc_hora(pausa2) + calc_min(pausa2)

    t_1 = -(horas_agora - horas_p1)*1000 - 2000
    t_int = -(horas_agora - horas_int)*1000 - 20*1000
    t_2 = -(horas_agora - horas_p2)*1000 - 2000

    if t_1>0{
        setTimeout(function(){ alert(`${t_1}`); }, 1000);
    }
    
    //setTimeout(function(){ alert(`SE ORGANIZE\nFALTAM 2 MIN PARA SUA PAUSA!`); }, 5000);
}*/

function calc_hora(pausa){
    horas = pausa[0] + pausa[1]
    horas = Number(horas)*60
    return horas
}

function calc_min(pausa){
    minutos = pausa[3] + pausa[4]
    minutos = Number(minutos)
    return minutos
}


function add2(){
    let notificacao = document.getElementById("atd_2")
    notificacao.innerHTML = '<div> <form class="formulario" id="formulario1" action=""> <br> <input class="celula_atendimento" id="Protocolo_Chat" type="number" placeholder="Protocolo do Chat" required> <input class="celula_atendimento" id="Protocolo_ADM" type="number" placeholder="Protocolo do ADM" required> <br> <input class="celula_atendimento" id="nome" type="text" placeholder="Nome do cliente" onchange="mudar_titulo()" required> <input class="celula_atendimento" id="telefone" type="tel" placeholder="15 3384-8181" required> <input class="celula_atendimento" id="BFP" type="text" placeholder="BFP" value="Padrão Fibra" required> <br> <input id="Descricao" type="text" placeholder="Descreva aqui o que houve no atendimento" required> <br> <br> <button class="butao" onclick="protocolo()">Protocolo</button> <button class="butao" onclick="copiar()">Copiar</button> <button class="butao" onclick="Transferir()">Transferir</button> <button class="butao" onclick="zerar()">Zerar</button> <br> <br> <button id="add_1" class="butao" onclick="add3()" style="margin-right: -90%;">(+)</button> <button id="remove_1" class="butao" style="right: 10%;" onclick="remove2()" >(x)</button> <br> <br> </form> </div>'
}

function add3(){
    let notificacao = document.getElementById("atd_3")
    notificacao.innerHTML = '<div> <form class="formulario" id="formulario1" action=""> <br> <input class="celula_atendimento" id="Protocolo_Chat" type="number" placeholder="Protocolo do Chat" required> <input class="celula_atendimento" id="Protocolo_ADM" type="number" placeholder="Protocolo do ADM" required> <br> <input class="celula_atendimento" id="nome" type="text" placeholder="Nome do cliente" onchange="mudar_titulo()" required> <input class="celula_atendimento" id="telefone" type="tel" placeholder="15 3384-8181" required> <input class="celula_atendimento" id="BFP" type="text" placeholder="BFP" value="Padrão Fibra" required> <br> <input id="Descricao" type="text" placeholder="Descreva aqui o que houve no atendimento" required> <br> <br> <button class="butao" onclick="protocolo()">Protocolo</button> <button class="butao" onclick="copiar()">Copiar</button> <button class="butao" onclick="Transferir()">Transferir</button> <button class="butao" onclick="zerar()">Zerar</button> <br> <br> <button id="add_1" class="butao" onclick="add4()" style="margin-right: -90%;">(+)</button> <button id="remove_1" class="butao" style="right: 10%;" onclick="remove3()" >(x)</button> <br> <br> </form> </div>'
}

function add4(){
    let notificacao = document.getElementById("atd_4")
    notificacao.innerHTML = '<div> <form class="formulario" id="formulario1" action=""> <br> <input class="celula_atendimento" id="Protocolo_Chat" type="number" placeholder="Protocolo do Chat" required> <input class="celula_atendimento" id="Protocolo_ADM" type="number" placeholder="Protocolo do ADM" required> <br> <input class="celula_atendimento" id="nome" type="text" placeholder="Nome do cliente" onchange="mudar_titulo()" required> <input class="celula_atendimento" id="telefone" type="tel" placeholder="15 3384-8181" required> <input class="celula_atendimento" id="BFP" type="text" placeholder="BFP" value="Padrão Fibra" required> <br> <input id="Descricao" type="text" placeholder="Descreva aqui o que houve no atendimento" required> <br> <br> <button class="butao" onclick="protocolo()">Protocolo</button> <button class="butao" onclick="copiar()">Copiar</button> <button class="butao" onclick="Transferir()">Transferir</button> <button class="butao" onclick="zerar()">Zerar</button> <br> <br> <button id="add_1" class="butao" onclick="add5()" style="margin-right: -90%;">(+)</button> <button id="remove_1" class="butao" style="right: 10%;" onclick="remove4()" >(x)</button> <br> <br> </form> </div>'
}

function add5(){
    let notificacao = document.getElementById("atd_5")
    notificacao.innerHTML = '<div> <form class="formulario" id="formulario1" action=""> <br> <input class="celula_atendimento" id="Protocolo_Chat" type="number" placeholder="Protocolo do Chat" required> <input class="celula_atendimento" id="Protocolo_ADM" type="number" placeholder="Protocolo do ADM" required> <br> <input class="celula_atendimento" id="nome" type="text" placeholder="Nome do cliente" onchange="mudar_titulo()" required> <input class="celula_atendimento" id="telefone" type="tel" placeholder="15 3384-8181" required> <input class="celula_atendimento" id="BFP" type="text" placeholder="BFP" value="Padrão Fibra" required> <br> <input id="Descricao" type="text" placeholder="Descreva aqui o que houve no atendimento" required> <br> <br> <button class="butao" onclick="protocolo()">Protocolo</button> <button class="butao" onclick="copiar()">Copiar</button> <button class="butao" onclick="Transferir()">Transferir</button> <button class="butao" onclick="zerar()">Zerar</button> <br> <br> <button id="add_1" class="butao" onclick="add6()" style="margin-right: -90%;">(+)</button> <button id="remove_1" class="butao" style="right: 10%;" onclick="remove5()" >(x)</button> <br> <br> </form> </div>'
}

function add6(){
    let notificacao = document.getElementById("atd_6")
    notificacao.innerHTML = '<div> <form class="formulario" id="formulario1" action=""> <br> <input class="celula_atendimento" id="Protocolo_Chat" type="number" placeholder="Protocolo do Chat" required> <input class="celula_atendimento" id="Protocolo_ADM" type="number" placeholder="Protocolo do ADM" required> <br> <input class="celula_atendimento" id="nome" type="text" placeholder="Nome do cliente" onchange="mudar_titulo()" required> <input class="celula_atendimento" id="telefone" type="tel" placeholder="15 3384-8181" required> <input class="celula_atendimento" id="BFP" type="text" placeholder="BFP" value="Padrão Fibra" required> <br> <input id="Descricao" type="text" placeholder="Descreva aqui o que houve no atendimento" required> <br> <br> <button class="butao" onclick="protocolo()">Protocolo</button> <button class="butao" onclick="copiar()">Copiar</button> <button class="butao" onclick="Transferir()">Transferir</button> <button class="butao" onclick="zerar()">Zerar</button> <br> <br> <button id="add_1" class="butao" onclick="alert(`Já atingiu o limite`)" style="margin-right: -90%;">(+)</button> <button id="remove_1" class="butao" style="right: 10%;" onclick="remove6()" >(x)</button> <br> <br> </form> </div>'
}


function remove2(){
    let notificacao = document.getElementById("atd_2")
    notificacao.innerHTML = '<div>  </div>'
}

function remove3(){
    let notificacao = document.getElementById("atd_3")
    notificacao.innerHTML = '<div>  </div>'
}

function remove4(){
    let notificacao = document.getElementById("atd_4")
    notificacao.innerHTML = '<div>  </div>'
}

function remove5(){
    let notificacao = document.getElementById("atd_5")
    notificacao.innerHTML = '<div>  </div>'
}

function remove6(){
    let notificacao = document.getElementById("atd_6")
    notificacao.innerHTML = '<div>  </div>'
}