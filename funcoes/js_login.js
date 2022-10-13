

function login(){
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
} 


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
