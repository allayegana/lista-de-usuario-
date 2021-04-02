

 function salvarUsuarios(){

  var usuarios=[]
  var login = document.getElementById("cad-login").value;
  var nome = document.getElementById("cad-nome").value;
  var date = document.getElementById("cad-data").value;
  var Sexo = document.getElementById("cad-genero").value;
  var Email = document.getElementById("cad-email").value;
  var status = document.getElementById("cad-status").value;
  var bloqueio = document.getElementById("cad-bloq" ).value;
 var Observacoes = document.getElementById("cad-obs").value;

  var pessoa={login: login,nome:nome, dataNascto:date, sexo:Sexo,Email:Email,status:status,Bloqueado:bloqueio,Observacoes:Observacoes};

console.log(pessoa);
usuarios.push(pessoa);

var pessoas = JSON.stringify(usuarios);
localStorage.setItem("pessoas", pessoas);

alert("salvo com sucesso");
/*
var gravarUsar = JSON.parse(localStorage.getItem("pessoas"));
 console.log(gravarUsar)

 var bodyTabela = document.getElementById("tabela-usarios");
 var registros = document.getElementById("conta-registro");


 for (var i = 0 ; i <=  gravarUsar.length; i++){
    var people = gravarUsar[i];

 salvarUsuarios.innerHTML += '<td>'+people.login+'</td>'+'<td>'+people.nome+
     '</td>'+'<td name"status" + id + "">'+people.status+'</td>'+'<td>'+people.bloqueia+
     '</td>'+'<td>'+people.Editar+'</td>'+
     '<td class="info-bloquear"><input type="button" value="salvarUsuarios" id="salvar" onclick="salvarUsuarios()"></td>'+
     '<td class="info-editar"><a href="cadastro.html"><button>Editar</button>'+'</td>';
    
 }
*/
  }
