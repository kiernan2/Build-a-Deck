$(document).ready(function() {
  let deck = [];
  let of = "of";
  const numbers = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];
  const suits = ["clubs", "diamonds", "spades", "hearts"];
  suits.forEach(function(element){
    numbers.forEach(function(x){
      deck.push(x + " " + of + " " + element + " ")
    });
  });
  console.log(deck)
  $("#output").append(deck)
});