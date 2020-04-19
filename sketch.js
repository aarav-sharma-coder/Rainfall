const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var raindrops = [200];  
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
  for(var i=0;i<100;i++){
    raindrops[i] = new Raindrops();
 }
}

function draw() {
 background("White");
 Engine.update(engine);
 for(var i=0;i<100;i++){
   raindrops[i].display();  
   raindrops[i].fall();
 }
}