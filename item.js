
$(".kayu").click(function(){
  var top = $("#character").css("top");
  var left = $("#character").css("left");

  top = parseInt(top);
  left = parseInt(left);
  if((left >= 130 && left <= 180) && (top >=280 && top <=330)){
    var jmlhkayu =+ 1;
    alert("kayu +1");
    $(".kayu").remove();

    
   
  }else{
   // alert("Belum sampe.");
   console.log("belum sampe");
  }
});
