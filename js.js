let players = [{ name: "Nikita", points: 0 }, { name: "Sebastian", points: 0 }, { name: "Pyry", points: 0 }];

let Player1 = "Nikita";

let Player2 = "Sebastian";

let Player3 = "Pyry";

let player1_points = 0;

let player2_points = 0;

let player3_points = 0;





let turn = 0;

var score = 0;

var message = "";



function update(){

    var status = document.getElementById("status");

    document.getElementById('player_name').innerHTML = players[turn].name;

    status.innerHTML = score;

    status2.innerHTML = message;

    var info = document.getElementById("info");

    info.innerHTML = '';

    for (let i=0; i<3; i++){

        info.innerHTML += players[i].name + ' : ' + players[i].points + '<br>'; 

    }



}



function rollDice() {

    message = "";

    var die1 = document.getElementById("die1");

    var die2 = document.getElementById("die2");

    var d1 = Math.floor(Math.random() * 6) + 1;

    var d2 = Math.floor(Math.random() * 6) + 1;

    var diceTotal = 0;

    die1.innerHTML = d1;

    die2.innerHTML = d2;

    if (d1 == 1 && d2 == 1) {

        message = "Heitit kaksi ykköstä! Saat 25 pistettä!";

        diceTotal = 25;

        score += diceTotal;

        update();

        return;

    }

    else if (d1 == d2) {

        message = "Heitit tuplat! Saat tuplapisteet!";

        diceTotal = (d1 + d2) * 2;

        update();

    }

    else if (score == 100) {

        alert("Sait 100 pistettä. Voitit pelin!");

            document.location.reload();

            clearInterval(interval);

            return;

    }

    else if (d1 == 1 || d2 == 1) {

        message = "Heitit ykkösen, menetit pisteesi."

        changeTurn();

        return;

    } else {

        diceTotal = d1 + d2;

    }
    score += diceTotal;
    update();

}

function rollDice2() {

  message = "";

  var die1 = document.getElementById("die1");

  var d1 = Math.floor(Math.random() * 6) + 1;

  var d2 = Math.floor(Math.random() * 6) + 1;

  var diceTotal = 0;

  die1.innerHTML = d1;

  if (d1 == 999) {

      update();

      return;

  }
  else if (score == 100) {

      alert("Sait 100 pistettä. Voitit pelin!");

          document.location.reload();

          clearInterval(interval);

          return;

  }

  else if (d1 == 1 || d2 == 1) {

      message = "Heitit ykkösen, menetit pisteesi."

      changeTurn();

      return;

  } else {

      diceTotal = d1;

  }
  score += diceTotal;
  update();

}

function changeTurn(){

    score = 0;

    turn++;

    if (turn > players.length-1) {

        turn = 0;

    }

    update();

}



function endTurn(){

    players[turn].points += score;
    turn++;
    if (turn >= players.length){
         turn = 0;

    }
    score = 0;
    changeTurn();

}



update();