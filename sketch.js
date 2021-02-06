var canvas, backgroundImage;

var gameState = 0;
var contestantCount;

var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(1200,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if (contestantCount === 0) {
    gameState = 1;
    quiz.play();
  }

}
