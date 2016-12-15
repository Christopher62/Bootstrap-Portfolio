$(function(){
  $("#btn0").click(function(){
      $("#cameleonDiv").animate( {backgroundColor:"red", color:"white"}, 1000 );
  });

  $("#btn1").dblclick(function(){
      $("#cameleonDiv").animate( {backgroundColor:"green", color:"#FF9900"}, 1000 );
  });

  $("#btn2").click(function(){
      $("#cameleonDiv").animate( {backgroundColor:"#99CCFF", color:"black"}, 1000 );
  });
  $("#btn3").click(function(){
      $("#contain, #portfolio").animate( {backgroundColor:"#3B5998", color:"black"}, 5000 );
  });

});
$(document).ready(function(){
    $("#disappear").click(function(){
        $(this).hide();
    });
});
    $("#iconup").click(function(){
        alert("Voulez vous retourner en haut de page ?");
        alert("Vous ne voulez pas retourner sur une partie précise ?");
        alert("Bon ben retour en haut de page !");
    });
