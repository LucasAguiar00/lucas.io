
// LOGIN ADMIN

/*function login(){
    var usuario = window.document.getElementById("usuário").value;
    var senha = window.document.getElementById("senha").value;

    usuario = String(usuario);
    senha = String(senha);

    //usuário admin
    if ((usuario=="admin")&&(senha=="admin")){
        //window.alert("Login realizado com sucesso")

        //Salva o nome do usuário
        localStorage.setItem('valueText', usuario);

        // aqui é o código para direcionar para a DASHBOARD
        window.location.href = "dashboard.html"

    } else {
        window.alert("Usuário ou senha inválidos!")
    }
} */

function login(){
    var usuario = window.document.getElementById("usuário").value;
    var senha = window.document.getElementById("senha").value;
    usuario = String(usuario);
    senha = String(senha);

    var lista_usuários = ["admin", "sup_ce","vitoria_aguiar","antonio_neto","francisco_lopes","rayara_sousa","francisco_ferreira","jose_frota","alessandra_nascimento","alvaro_alves","ana_costa","antonia_sousa","francisco_oliveira","francisco_amaro","jose_herculano","lara_viana","pedro_costa","rafaela_alves","wanderson_nascimento","daine_araujo","cicero_rodrigues","daniel_penha","francisco_alves","gustavo_almeida","jose_teixeira","kassila_nascimento","leonardo_lima","lia_sousa","sangela_albuquerque","lilia_soares","amanda_mesquita","francisco_mouta","francisco_alves","gabriela_nascimento","isabelly_pereira","jaqueline_sousa","marcelo_viana","michelle_lima","nataline_ribeiro","iury_alves","joao_mesquita","maria_franca","nahiara_nascimento","amanda_mendes","drielly_ponte","carlos_silva","francisco_linhares","jaine_moreira","jose_silva","jose_fialho","maria_moreira","marilia_soares","wellyngton_farias","rennan_alves","mara_ripardo","mynara_ferreira","francisco_melo","ana_gamileira","bruna_nascimento","dione_mourao","fernanda_freire","francisco_melo","francisco_costa","joao_paiva","joelson_dantas","leonardo_carneiro","vitor_ferreira","keyser_sousa","amanda_mariano","fabio_moura","davi_melo","francisco_silva","helielder_marciano","jocelio_costa","maria_carneiro","pedro_silva","roberth_dutra","thiago_lira","zoe_nascimento"]
    var lista_senhas = ["admin", "43000","43081","43082","43083","43084","43085","43087","43131","43132","43133","43134","43135","43136","43137","43138","43139","43140","43141","43142","43143","43144","43145","43146","43147","43148","43149","43150","43151","43152","43159","43160","43161","43162","43163","43164","43165","43166","43167","43168","43169","43170","43171","43172","43173","43174","43184","43185","43186","43187","43188","43189","43190","43191","43192","43193","43194","43203","43204","43205","43206","43207","43208","43209","43210","43211","43212","43213","43234","43235","43236","43237","43238","43239","43240","43241","43242","43243","43244"]

    var index = lista_usuários.indexOf(usuario)

    if (index!=null){
            //usuário admin
        if (senha==lista_senhas[index]){
            //window.alert("Login realizado com sucesso")

            //Salva o nome do usuário
            localStorage.setItem('valueText', usuario);

            // aqui é o código para direcionar para a DASHBOARD
            window.location.href = "dashboard.html"

        } else {
            window.alert("Usuário ou senha inválidos!")
        }
    } else {
        window.alert("Usuário ou senha inválidos!")
    }

} 

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.getElementById("btn");
      
      btn.click();
    
    }
  });



// aqui funciona
/*
function login(){
    var usuario = window.document.getElementById("usuário").value;
    var senha = window.document.getElementById("senha").value;
    usuario = String(usuario);
    senha = String(senha);

    //usuário admin
    if (usuario=="admin"){

        if (senha=="admin"){
            window.alert("Login realizado com sucesso")

            //Salva o nome do usuário
            localStorage.setItem('valueText', usuario);
    
            // aqui é o código para direcionar para a DASHBOARD
            window.location.href = "dashboard.html"
        
        }else{
            window.alert("Usuário ou senha inválidos!")
        }

    } else {
        window.alert("Usuário ou senha inválidos!")
    }
}
*/
