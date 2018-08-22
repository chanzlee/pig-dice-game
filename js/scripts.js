players={};

var Player = function (id){
  this.id= id;
  this.bankscore= 0;
}
var playerOne = new Player(0);
var playerTwo = new Player(1);

players[playerOne.id] = playerOne;
players[playerTwo.id] = playerTwo;

console.log(players[0],players[1]);


var currentlyPlayingId = 0;
var currentlyPlaying = players[currentlyPlayingId];

var switchPlayer = function (){
  if(currentlyPlayingId === 0){
    currentlyPlayingId = 1;
  } else {
    currentlyPlayingId = 0;
  }
  alert("switchPlayered" +  currentlyPlayingId)
}

var roll = function(){
  alert(currentlyPlayingId);
  random();
  if(result===1 || result===6){
    var turnScore = 0;
    alert("turnscore="+turnScore);
    switchPlayer();
  } else {
    var turnScore += result;
    alert("turnscore="+turnScore);
  }
}

var turnScore = 0;

var random = function() {
  result= Math.floor(Math.random()*6)+1;
  return result;
}

// var roll = function() {
//   random();
//   if(result===1 || result===6){
//     turnScore = 0;
//     alert("turnscore="+turnScore);
//     bankScore +=turnScore
//     // there will be a end turn
//
//   } else {
//     turnScore += result;
//     alert("turnscore="+turnScore);
//   }
// }

Player.prototype.hold =function (){
  // players{0: playerOne 1:playerTwo}
  //currentlyPlaying is object!

  this.bankScore += turnScore;
  switchPlayer();
}



$(document).ready(function(){
  $("#roll").submit(function(event){
    event.preventDefault();
    roll();
  });
  $("#hold").submit(function(event){
    event.preventDefault();
    currentlyPlaying.hold();
  });
});
