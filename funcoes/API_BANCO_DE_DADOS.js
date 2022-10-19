var axios = require("axios");

function salvar_bd(cadastro,bfp,contato,numero,descricao,prot_retorno,prot_atendimento,nivel1,nivel2,dificuldade){
    var axios = require("axios");
    axios.post('https://sheetdb.io/api/v1/p73am3vfcwd5t',{
        "data":{
            "cadastro": cadastro,
            "bfp": bfp,
            "contato": contato,
            "numero": numero,
            "descricao": descricao,
            "prot_retorno": prot_retorno,
            "prot_atendimento": prot_atendimento,
            "nivel1": nivel1,
            "nivel2": nivel2,
            "dificuldade": nivedificuldadel1
        }
    },{
        "auth":{
            "username": "e4mvhy9m",
            "password": "g8asu0uh4f0ybv4jr6sh"
        }
    })
}


function salvar_novo(){
    salvar_bd('1','1','1','1','1','1','1','1','1','1')
}