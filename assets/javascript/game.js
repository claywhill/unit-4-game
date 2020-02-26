// I need the computer to generate a random number between 19-120
// I need to create four buttons that generate a random number between 1-12 upon win/loss
// I need to create a display that shows user current score
// If user is able to add buttons up to computer number then increase wins
// If user adds up buttons above computer number then increase losses

var wins = 0;

var losses = 0;

var total = 0;

var computerNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

var buttonNum1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

var buttonNum2 = Math.floor(Math.random() * (6 - 4 + 1)) + 4;

var buttonNum3 = Math.floor(Math.random() * (9 - 7 + 1)) + 7;

var buttonNum4 = Math.floor(Math.random() * (12 - 10 + 1)) + 10;

var buttonValues = [];

function runningTotal() {
  total = 0;
  for (var i = 0; i < buttonValues.length; i++) {
    total = (total + buttonValues[i]) << 0;
  }

  $(".score").text(total);
}

$(".random").text(computerNum);

$(".button1").click(function() {
  buttonValues.push(buttonNum1);
  $(".score").text(buttonValues);
  runningTotal();
  checker();
});

$(".button2").click(function() {
  buttonValues.push(buttonNum2);
  $(".score").text(buttonValues);
  runningTotal();
  checker();
});

$(".button3").click(function() {
  buttonValues.push(buttonNum3);
  $(".score").text(buttonValues);
  runningTotal();
  checker();
});

$(".button4").click(function() {
  buttonValues.push(buttonNum4);
  $(".score").text(buttonValues);
  runningTotal();
  checker();
});


function checker() {
  if (total == computerNum) {
    wins++;
    $(".wins").text("Wins: " + wins);
    reset();
  }
  else if (total > computerNum) {
    losses++;
    $(".losses").text("Losses: " + losses);
    reset();
  }
};

function reset() {
  total = 0;
  computerNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  buttonNum1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  buttonNum2 = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
  buttonNum3 = Math.floor(Math.random() * (9 - 7 + 1)) + 7;
  buttonNum4 = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
  buttonValues = [];
  $(".random").text(computerNum);
  $(".score").text(null);
}