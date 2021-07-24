var gameState=0;
var database
var playerCount;
var form,player,game;
function setup(){
    createCanvas(500,500);
    //create instance of the database
    database=firebase.database()
    game= new Game();
    game.getState();
    game.start();
   
}

function draw(){
   
}

