function bloquear(cod){

    var statusBloquear = document.getElementsByName("status" + cod )[0];

    var statusAtual = (statusBloquear.innerHTML);
    var icon = "<img src='https://www.bizfacil.com.br/imagens/cadeado.gif'>";


    if (statusAtual == "Ativo") { 
     
      var responsaUsuarios = confirm("deseja bloquea?");


    }else{
    	    var responsaUsuarios = confirm("deseja desbloquea?");
    }
  
 

    if(responsaUsuarios == true){

    	if (statusAtual == "Ativo") {
          
       statusBloquear.innerHTML = `Bloqueado  ${icon}`

    	}else{
          
          statusBloquear.innerHTML =("Ativo");
    	}
    }

    
    console.log(statusAtual);





}