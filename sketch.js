createCanvas(400,400);
function draw(){
 if(keyDown("m")){
    background(rgb (random(0,255), random(0,255), random(0,255)));
  }
  
  fill("black");
  textSize(20);
  text("aperte m para mudar a cor do fundo",50,200);

  drawSprites();
}
