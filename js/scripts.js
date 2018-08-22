var roll = function (){
  var result = Math.floor(Math.random()*6)+1;
  console.log(result);
  return result;
}



$(document).ready(function(){
  $("#roll").submit(function(event){
    event.preventDefault();
    debugger;
    roll();

  });
});
