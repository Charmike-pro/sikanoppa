function rollDice2(){

  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var status = document.getElementById("status")
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
    var sum = d1 + d2;
    var mul = sum * 2;
    document.getElementById('score').innerHTML = sum;
  status.innerHTML = "Heitit "+diceTotal+".";
  if (d1 == d2){
    status.innerHTML += " TUPLAT! Saat tuplapisteet!";
    document.getElementById('score').innerHTML = mul;
  }
  if (d1 == '1'){
   alert("Pelaaja heitti ykkösen. Vuorojen vaihto.")
   return window.location.reload(false); 
  }
   if (d2 == '1'){
    alert("Pelaaja heitti ykkösen. Vuorojen vaihto.")
    return window.location.reload(false); 
}
}
function rollDice(){
  var die1 = document.getElementById("die1");
  var status = document.getElementById("status")
  var d1 = Math.floor(Math.random() * 6) + 1;
  die1.innerHTML = d1;
  if (d1 == '1'){
    alert("Pelaaja heitti ykkösen. Vuorojen vaihto.")
    return window.location.reload(false); 
  }
}
