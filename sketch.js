/*

Class 20: BASICS OF THE PHYSICS ENGINE

Developer: Ridhaan Prakash


Goals: 
● Create various kinds of shapes.
● Apply physics to these objects and observe their behavior
● Use a physics engine to create a world and the objects inthem.
● Integrate the physics engine with the p5 code to create
interactive objects following the rules of physics in this world.
● Tune the physics engine to change the behavior of the
objects in your world.

*/

//Declare variables for game objects and behaviour indicators(FLAGS)

//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//declare variables to assign the simulation objects
var userEngine, userWorld;

var ball, ground;
var cube1, cube2;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(800, 500);

  //create simulation and store in in variables
  userEngine = Engine.create();
  userWorld = userEngine.world;

  //construction of ball using matter.js
  var ball_options = {
    'restitution':0.5 
  }
  ball = Bodies.circle(100, 100, 20 , ball_options);
  World.add(userWorld, ball);
  console.log("ball: ");
  console.log(ball);

  //construction of ground using matter.js
  //JSON Format
  var ground_options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(400, 480, 800, 20, ground_options);
  World.add(userWorld, ground);
  console.log("ground:");
  console.log(ground);

  //constructing cube1 body using matter.js
  var cube_1_options={
    'restitution' : 0.5
  }
  cube1 = Bodies.rectangle(330,100,40,40, cube_1_options);
  World.add(userWorld, cube1); 
  console.log("cube1: ");
  console.log(cube1);

  //contructing cube2 body using matter.js
  var cube_2_options={
    'restitution' : 0.7
  }
  cube2 = Bodies.rectangle(300,140,60,80, cube_2_options);
  World.add(userWorld, cube2);
}





//All changes, conditions, manipulations, actions to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
  background(0);

  //activate the simulation
  Engine.update(userEngine); //Engine.render(userEngine)

  //display of ball using matter.js
  fill("red");
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 40, 40);

  //display of ground using matter.js
  fill("brown");    
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 20);

  //displaying cube1 using matter.js
  fill("blue");
  rectMode(CENTER);
  rect(cube1.position.x, cube1.position.y, 40, 40);
 
  //displaying cube2 using matter.js
  fill("green");
  rectMode(CENTER);
  rect(cube2.position.x, cube2.position.y, 60, 80);
}
