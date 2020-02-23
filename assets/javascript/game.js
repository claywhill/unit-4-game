// I need the computer to generate a random number between 19-120
// I need to create four buttons that generate a random number between 1-12 upon win/loss
// I need to create a display that shows user current score
// If user is able to add buttons up to computer number then increase wins
// If user adds up buttons above computer number then increase losses


$(".random").ready(function() {
   var computerNum = [Math.floor(Math.random() * (120 - 19 + 1)) + 19];
  $(".random").text(computerNum);
});

$(".button1").ready(function() {
    var buttonNum1= [Math.floor(Math.random() * (3 - 1 + 1)) + 1];
    $(".button1").click(function() {
        $(".score").text(buttonNum1);
    });
});

$(".button2").ready(function() {
    var buttonNum2= [Math.floor(Math.random() * (6 - 4 + 1)) + 4];
    $(".button2").click(function() {
        $(".score").text(buttonNum2);
    });
});

$(".button3").ready(function() {
    var buttonNum3= [Math.floor(Math.random() * (9 - 7 + 1)) + 7];
    $(".button3").click(function() {
        $(".score").text(buttonNum3);
    });
});

$(".button4").ready(function() {
    var buttonNum4= [Math.floor(Math.random() * (12 - 10 + 1)) + 10];
    $(".button4").click(function() {
        $(".score").text(buttonNum4);
    });
});



