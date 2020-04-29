// on Refresh

let player1 = Math.floor(Math.random()*6 + 1);
let player2 = Math.floor(Math.random()*6 + 1);

if (performance.navigation.type === 1) {
  if (player1 > player2) {
    document.querySelector(".title-section").innerHTML = "<i class=\"fas fa-flag-checkered\"></i><h1>Player1 Wins!</h1>";
  } else if (player1 < player2) {
    document.querySelector(".title-section").innerHTML = "<h1>Player2 Wins!</h1><i class=\"fas fa-flag-checkered\">";
  } else {
    document.querySelector(".title-section").innerHTML = "<h1>Draw!</h1>";
  }
}

switch (player1) {
  case 1:
  document.querySelector(".player1Img").setAttribute('src', 'images/dice1.png')
  break;
  case 2:
  document.querySelector(".player1Img").setAttribute('src', 'images/dice2.png')
  break;
  case 3:
  document.querySelector(".player1Img").setAttribute('src', 'images/dice3.png')
  break;
  case 4:
  document.querySelector(".player1Img").setAttribute('src', 'images/dice4.png')
  break;
  case 5:
  document.querySelector(".player1Img").setAttribute('src', 'images/dice5.png')
  break;
  case 6:
  document.querySelector(".player1Img").setAttribute('src', 'images/dice6.png')
  break;
}

switch (player2) {
  case 1:
  document.querySelector(".player2Img").setAttribute('src', 'images/dice1.png')
  break;
  case 2:
  document.querySelector(".player2Img").setAttribute('src', 'images/dice2.png')
  break;
  case 3:
  document.querySelector(".player2Img").setAttribute('src', 'images/dice3.png')
  break;
  case 4:
  document.querySelector(".player2Img").setAttribute('src', 'images/dice4.png')
  break;
  case 5:
  document.querySelector(".player2Img").setAttribute('src', 'images/dice5.png')
  break;
  case 6:
  document.querySelector(".player2Img").setAttribute('src', 'images/dice6.png')
  break;
}
