var bird;
var pipes = [];
var score= 0;
var speed = 2;
var lifes = 100;
var isActive = false;









// variables for the images
var duck;
var bamboo;





// Preload for images. See https://p5js.org/reference/#/p5/image for more info.
function preload() {

    barber = loadImage("assets/barber.png");
    mustache = loadImage("assets/mustache.png");
    musttri = loadImage("assets/triangle.jpg");
    blackM = loadImage("assets/black.png");
    blackM2 = loadImage("assets/black.png");
    redM = loadImage("assets/red.png")
   
}

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    bird = new bird();
    pipes.push(new Pipe());
    // setTimeout(create,100);
}

// function create() {
//     setTimeout() {
//         (redM = loadImage('assets/red.png')
//         ,1000)}
//     };

function draw() {
   background(musttri);

   for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)) {
        
    }

    if(pipes[i].offscreen()) {
        pipes.splice(i,1)
    }
}
   bird.update();
   bird.show();


   if (frameCount % 100 == 0) {
       pipes.push(new Pipe());
   }

   if (lifes === 100) {
    image(blackM2,60, 66, 75, 45)
    image(blackM2,140, 66, 75, 45)
    image(blackM2,220, 66, 75, 45)
   } else if (lifes < 100 && lifes > 60) {
    image(blackM2,60, 66, 75, 45)
    image(blackM2,140, 66, 75, 45)
   } else if (lifes < 50 && lifes > 20 ) {
    image(blackM2,60, 66, 75, 45)
   } else if (lifes < 10 && lifes > 1) {
       location.reload();
   }
   







 
   


   // More about text
  textAlign(CENTER);
  drawWords(width * 0.5);


}




// Checks if spacebar is pressed.
function keyPressed() {
    if (key == ' ') {
        bird.up()
        isActive = true;

    }
}

setInterval(function() {

    score++;
    speed += 0.1;



    
    

    

}, 1000)





// Draws "score" similar function can be used for other text if needed.
function drawWords(x) {
  fill(0);
  

  fill(255);
  textSize(25);
  text('Score: ' + score, x, 330,);

//   text('x ' + lifes, x,85,);

  


}


