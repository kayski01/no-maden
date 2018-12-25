

$("#leftside05").click(function(){
  var top = $("#character").css("top");
  var left = $("#character").css("left");
  alert(top);
  alert(left);
  top = parseInt(top);
  left = parseInt(left);
  if(left >= 0 && left <= 25){
    $("#character").remove();
    $("#stage5").hide();
    $("#stage4").show();
    $("#stage4").append("<div id='character'></div>");
    $("#character").css("left", "870px");
    $(document).ready(function() {


$('#character').addClass('left-stand'); 

});
    
  }else{
    alert("Belum sampe.");
  }
});

$("#botside05").click(function(){
  var top = $("#character").css("top");
  var left = $("#character").css("left");
  alert(top);
  alert(left);
  top = parseInt(top);
  left = parseInt(left);
  if(top >= 570 && top <= 600){
    $("#character").remove();
    $("#stage5").hide();
    $("#stage8").show();
    $("#stage8").append("<div id='character'></div>");
    $("#character").css("top", "10px");
    $(document).ready(function() {


$('#character').addClass('front-stand'); 

});
    
  }else{
    alert("Belum sampe.");
  }
});
