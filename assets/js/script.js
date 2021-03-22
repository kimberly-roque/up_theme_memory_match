var firstCardClicked = null;
var secondCardClicked = null;
var firstCardClasses;
var secondCardClasses;
var gameCards = document.getElementById('gameCards');
var maxMatches = 2;
var matches = 0;
var attempts = 0;
var gamesPlayed = 0;

gameCards.addEventListener("click", handleClick);


function handleClick(event) {
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }

  if (!firstCardClicked) {
    firstCardClicked =  event.target;
    firstCardClasses = firstCardClicked.previousElementSibling.classList.value;
    firstCardClicked.classList.add("hidden");
    console.log('first', firstCardClasses);
  } else {
    secondCardClicked = event.target;
    attempts += 1;
    displayStats();
    console.log('attempts', attempts);
    secondCardClasses = secondCardClicked.previousElementSibling.classList.value;
    secondCardClicked.classList.add("hidden");
    gameCards.removeEventListener("click", handleClick);

    setTimeout(function(){
      gameCards.addEventListener("click", handleClick);
    }, 2000 );

    console.log('second', firstCardClasses)

    if (firstCardClasses === secondCardClasses){
      matches += 1;
      console.log('matches', matches);
      if (matches === maxMatches){
        console.log("You Won!!!");
        var modal = document.createElement("div");
        modal.classList.add("modal-overlay");
        modal.textContent = "You Win";
        var container = document.querySelector(".container");
        var body = document.querySelector('body');
        body.insertAdjacentElement('afterbegin', modal);
      }
      firstCardClicked = null;
      secondCardClicked = null;
      console.log('match success');
      return;
    } else {
      setTimeout( function(){
        gameCards.removeEventListener("click", handleClick);
        firstCardClicked.classList.remove("hidden");
        secondCardClicked.classList.remove("hidden");
        gameCards.addEventListener("click", handleClick);
        firstCardClicked = null;
        secondCardClicked = null;
      }, 2000);
      console.log('no match');
    }
  }
}

function displayStats() {
  var gamesPlayedElement = document.querySelector('.gamesPlayed');
  gamesPlayedElement.textContent = gamesPlayed;
  var attemptsElement = document.querySelector('.attempts');
  attemptsElement.textContent = attempts;
  var accuracyElement = document.querySelector('.accuracy');
  accuracyElement.textContent = calculateAccuracy(attempts, matches);
}

function calculateAccuracy() {


}
