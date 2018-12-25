//Global variables that will be accessed in the functions below.
var currentKey;          //records the current key pressed
var TimerWalk;          //timer handle
var charStep = 2;       //1=1st foot, 2=stand, 3=2nd foot, 4=stand
var charSpeed = 400; //how fast the character will move
var currentRoom = 1; //room

//Once the DOM is ready, set the character to facing forward (default position)
$(document).ready(function() {

//add character state class
$('#character').addClass('front-stand'); 

});

//KeyDown Function
//if there is no currentKey down, execute charWalk
$(document).keydown(function(e) {
  if (!currentKey) {

    //set the currentKey to the key that is down
    currentKey = e.keyCode;

    //execute character movement function charWalk('direction')
    switch(e.keyCode) {
      case 38: charWalk('up');    break;
      case 39: charWalk('right'); break;
      case 40: charWalk('down');  break;
      case 37: charWalk('left');  break;
    }

  }

});

//KeyUp Function
$(document).keyup(function(e) {

  //don't stop the walk if the player is pushing other buttons
  //only stop the walk if the key that started the walk is released
  if (e.keyCode == currentKey) {

    //set the currentKey to false, this will enable a new key to be pressed
    currentKey = false;

    //clear the walk timer
    clearInterval(TimerWalk);

    //finish the character's movement
    $('#character').stop(true, false);
  }
});

//Character Walk Function
function charWalk(dir) {

  //adjust from lang to code
  if (dir == 'up') dir = 'back';
  if (dir == 'down') dir = 'front';

  //move the character
  processWalk(dir);

  //set the interval timer to continually move the character
  TimerWalk = setInterval(function() { processWalk(dir); }, charSpeed);

}

//Process Character Walk Function
function processWalk(dir) {

  //increment the charStep as we will want to use the next stance in the animation
 //if the character is at the end of the animation, go back to the beginning
  charStep++;
  if (charStep == 5) charStep = 1;

  //remove the current class
  $('#character').removeAttr('class');

  //add the new class
  switch(charStep) {
    case 1: $('#character').addClass(dir+'-stand'); break;
    case 2: $('#character').addClass(dir+'-right'); break;
    case 3: $('#character').addClass(dir+'-stand'); break;
    case 4: $('#character').addClass(dir+'-left');  break;
  }
  //move the char
  //we will only want to move the character 32px (which is 1 unit) in any direction
  switch(dir) {
    case'front':
       if ($('#character').position().top < 550){
      $('#character').animate({top: '+=30'}, charSpeed);
    }
      break;
    case'back':
      //don't let the character move any further up if they are already at the top of the screen
      if ($('#character').position().top > 20) {
        $('#character').animate({top: '-=30'}, charSpeed);
      }
      break;
    case'left':
    //don't let the character move any further left if they are already at the left side of the screen  
    if ($('#character').position().left > 20) {
        $('#character').animate({left: '-=30'}, charSpeed);
      }
      break;
    case'right':
    if ($('#character').position().left < 850) {
      $('#character').animate({left: '+=30'}, charSpeed);
      }
      break;
    }

    var top = $("#character").css("top");
    var left = $("#character").css("left");

    top = parseInt(top);
    left = parseInt(left);

    var topObs = $(".obs").css("top");
    var leftObs = $(".obs").css("left");

    topObs = parseInt(topObs);
    leftObs = parseInt(leftObs);

    if(top >= 550 && top <= 580 && currentRoom == 1){
    currentRoom = 3;
    $("#character").remove();
    $("#map1").hide();
    $("#map3").show();
    $("#map3").append("<div id='character'></div>");
    $("#character").css("top", "40px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(left >= 850 && left <= 880 && currentRoom == 1){
    currentRoom = 2;
    $("#character").remove();
    $("#map1").hide();
    $("#map2").show();
    $("#map2").append("<div id='character'></div>");
    $("#character").css("left", "35px","top",top);
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
    if(left >= 0 && left <= 30 && currentRoom == 1){
    currentRoom = 7;
    $("#character").remove();
    $("#map1").hide();
    $("#map7").show();
    $("#map7").append("<div id='character'></div>");
    $("#character").css("left", "835px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(top >= 550 && top <= 580 && currentRoom == 2){
    currentRoom = 6;
    $("#character").remove();
    $("#map2").hide();
    $("#map6").show();
    $("#map6").append("<div id='character'></div>");
    $("#character").css("top", "40px","left","835px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(top >= 0 && top <= 30 && currentRoom == 2){
    currentRoom = 5;
    $("#character").remove();
    $("#map2").hide();
    $("#map5").show();
    $("#map5").append("<div id='character'></div>");
    $("#character").css("top", "530px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(top >= 0 && top <= 30 && currentRoom == 3){
    currentRoom = 1;
    $("#character").remove();
    $("#map3").hide();
    $("#map1").show();
    $("#map1").append("<div id='character'></div>");
    $("#character").css("top", "530px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(left >= 0 && left <= 30 && currentRoom == 3){
    currentRoom = 4;
    $("#character").remove();
    $("#map3").hide();
    $("#map4").show();
    $("#map4").append("<div id='character'></div>");
    $("#character").css("left", "835px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(left >= 850 && left <= 880 && currentRoom == 3){
    currentRoom = 6;
    $("#character").remove();
    $("#map3").hide();
    $("#map6").show();
    $("#map6").append("<div id='character'></div>");
    $("#character").css("left", "35px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(left >= 850 && left <= 880 && currentRoom == 4){
    currentRoom = 3;
    $("#character").remove();
    $("#map4").hide();
    $("#map3").show();
    $("#map3").append("<div id='character'></div>");
    $("#character").css("left", "35px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(top >= 550 && top <= 580 && currentRoom == 4){
    currentRoom = 9;
    $("#character").remove();
    $("#map4").hide();
    $("#map9").show();
    $("#map9").append("<div id='character'></div>");
    $("#character").css("top", "40px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(left >= 850 && left <= 880 && currentRoom == 7){
    currentRoom = 1;
    $("#character").remove();
    $("#map7").hide();
    $("#map1").show();
    $("#map1").append("<div id='character'></div>");
    $("#character").css("left", "35px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
  }

  if(top >= 0 && top <= 30 && currentRoom == 7){
    currentRoom = 8;
    $("#character").remove();
    $("#map7").hide();
    $("#map8").show();
    $("#map8").append("<div id='character'></div>");
    $("#character").css("top", "530px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }

  if(top >= 550 && top <= 580 && currentRoom == 7){
    currentRoom = 4;
    $("#character").remove();
    $("#map7").hide();
    $("#map4").show();
    $("#map4").append("<div id='character'></div>");
    $("#character").css("top", "40px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(top >= 550 && top <= 580 && currentRoom == 8){
    currentRoom = 7;
    $("#character").remove();
    $("#map8").hide();
    $("#map7").show();
    $("#map7").append("<div id='character'></div>");
    $("#character").css("top", "40px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(top >= 0 && top <= 30 && currentRoom == 9){
    currentRoom = 4;
    $("#character").remove();
    $("#map9").hide();
    $("#map4").show();
    $("#map4").append("<div id='character'></div>");
    $("#character").css("left", "530px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(left >= 850 && left <= 880 && currentRoom == 9){
    currentRoom = 10;
    $("#character").remove();
    $("#map9").hide();
    $("#map10").show();
    $("#map10").append("<div id='character'></div>");
    $("#character").css("left", "40px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(left >= 0 && left <= 30 && currentRoom == 10){
    currentRoom = 9;
    $("#character").remove();
    $("#map10").hide();
    $("#map9").show();
    $("#map9").append("<div id='character'></div>");
    $("#character").css("left", "835px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(left >= 850 && left <= 880 && currentRoom == 10){
    currentRoom = 11;
    $("#character").remove();
    $("#map10").hide();
    $("#map11").show();
    $("#map11").append("<div id='character'></div>");
    $("#character").css("left", "40px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
  if(left >= 0 && left <= 30 && currentRoom == 11){
    currentRoom = 11;
    $("#character").remove();
    $("#map10").hide();
    $("#map11").show();
    $("#map11").append("<div id='character'></div>");
    $("#character").css("left", "835px");
    $(document).ready(function() {

    $('#character').addClass('front-stand'); 
    });
    
  }
    if(left <= leftObs && top <= topObs && left >= leftObs + 57 && top >= topObs + 37){
    }
    console.log("room " + parseInt(currentRoom));
    console.log("top " + top);
    console.log("left " + left);
}