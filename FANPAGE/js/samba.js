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
});

