
  var x = new Player()
  var o = new Player()

var cellDivs = document.querySelectorAll('.game-cell');
var winnerTitle = document.querySelector('.title');
for (var cellDiv of cellDivs) {
  cellDiv.addEventListener('click', cellClick)
};


// game vars

var gameIsLive = true;
var xIsNext = true;


//functions

function checkGameStatus() {
  var topLeft = cellDivs[0].classList[1];
  var topMid = cellDivs[1].classList[1];
  var topRight = cellDivs[2].classList[1];
  var midLeft = cellDivs[3].classList[1];
  var midMid = cellDivs[4].classList[1];
  var midRight = cellDivs[5].classList[1];
  var botLeft = cellDivs[6].classList[1];
  var botMid = cellDivs[7].classList[1];
  var botRight = cellDivs[8].classList[1];

  if(topLeft && topLeft === topMid &&  topMid === topRight) {
    handleWin(topLeft);
    setTimeout(resetGame, 5000);
  } else if (midLeft && midLeft === midMid && midLeft === midRight) {
    handleWin(midLeft)
    setTimeout(resetGame, 5000);
  } else if (botLeft && botLeft === botMid && botLeft === botRight) {
    handleWin(bottomLeft);
    setTimeout(resetGame, 5000);
  } else if (topLeft && topLeft === midLeft && topLeft === botLeft) {
    handleWin(topLeft)
    setTimeout(resetGame, 5000);
  } else if (topMid && topMid === midMid && topMid === botMid) {
    handleWin(topMid)
    setTimeout(resetGame, 5000);
  } else if (topRight && topRight === midRight && topRight === botRight) {
    handleWin(topRight)
    setTimeout(resetGame, 5000);
  } else if (topLeft && topLeft === midMid && topLeft === botRight) {
    handleWin(topLeft)
    setTimeout(resetGame, 5000);
  } else if (topRight && topRight === midMid && topRight === botLeft) {
    handleWin(topRight)
    setTimeout(resetGame, 5000);
  } else if (topLeft && topMid && topRight && midLeft && midRight && botLeft && botMid && botRight) {
    gameIsLive = false;
    winnerTitle.innerText = 'Tie!'
    setTimeout(resetGame, 5000);
  }
};

function cellClick(cellSpot){
  var classList = cellSpot.target.classList;
if(!gameIsLive || classList[1] === 'x' || classList[1] === 'o'){
  return;
}
if (xIsNext) {
  classList.add('x');
  winnerTitle.innerText = "♥️'s turn"
  checkGameStatus();
  xIsNext = !xIsNext;
} else {
  classList.add('o')
  winnerTitle.innerText = "♣️'s turn"
  checkGameStatus();
  xIsNext = !xIsNext;
}
};


function handleWin(letter){
  gameIsLive = false;
  if (letter === 'x'){
    winnerTitle.innerText = '♣️ won!';
    x.winnerWinner()

  } else {
    winnerTitle.innerText = "♥️ won!";
    o.winnerWinner()

  };
};

function resetGame() {
  xIsNext = true;
  winnerTitle.innerHTML = "♣️'s turn"
  for (var cellDiv of cellDivs) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
  };
  gameIsLive = true;
};
