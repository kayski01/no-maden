
$("#rightside04").click(function(){
  var top = $("#character").css("top");
  var left = $("#character").css("left");

  top = parseInt(top);
  left = parseInt(left);
  if(left >= 870 && left <= 900){
    $("#character").remove();
    $("#stage4").hide();
    $("#stage5").show();
    $("#stage5").append("<div id='character'></div>");
    $("#character").css("left", "10px");
    $(document).ready(function() {


$('#character').addClass('right-stand'); 

});
    
  }else{
    alert("Belum sampe.");
  }
});



$(document).keypress(function(e) {
    if(e.which == 13) {
        alert('You pressed enter!');
    }
});

$("#leftside05").click(function(){
  var top = $("#character").css("top");
  var left = $("#character").css("left");

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


$("#topside08").click(function(){
  var top = $("#character").css("top");
  var left = $("#character").css("left");

  top = parseInt(top);
  left = parseInt(left);
  if(top >= 0 && top <= 25){
    $("#character").remove();
    $("#stage8").hide();
    $("#stage5").show();
    $("#stage5").append("<div id='character'></div>");
    $("#character").css("top", "550px");
    $(document).ready(function() {


$('#character').addClass('back-stand'); 

});
    
  }else{
    alert("Belum sampe.");
  }
});
