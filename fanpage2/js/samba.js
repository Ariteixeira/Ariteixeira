$(document).ready(function(){


  $( "#menu-esquerdo" ).height($( "#menu-central" ).height());
  $( "#menu-direito" ).height($( "#menu-central" ).height());



  $("#bt2").click(function(){
    $("#teste").hide();
	 $( "#menu-esquerdo" ).height($( "#menu-central" ).height());
  $( "#menu-direito" ).height($( "#menu-central" ).height());
  });
  $("#bt1").click(function(){
    $("#teste").show();
	 $( "#menu-esquerdo" ).height($( "#menu-central" ).height());
  $( "#menu-direito" ).height($( "#menu-central" ).height());
    });

$('#meuFormulario').on('submit', function(e){
e.preventDefault();
  var len1 = $('#usuario').val().length;
  var len2 = $('#senha').val().length;

    if (len1 > 0 && len2 > 0) {
      localStorage.setItem("usuario", $('#usuario').val());
localStorage.setItem("senha", $('#senha').val());
this.submit();

      }else{
              alert("Nome e/ou Senha Inválida")
            }
        });
});

$(document).ready(function(){
if( localStorage.getItem("usuario") == "ariane" && localStorage.getItem("senha") =="1234"){
  $('#conteudo1').text('Bem Vindo!');
}

else {$('#conteudo1').text('Infelizmente você não possui acesso á área restrita');
}


});
