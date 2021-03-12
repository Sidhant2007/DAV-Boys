var Divyanshu,Idhant;
var Jason,Principle;
var RiotGuard,Ronith;
var SidhanT,edges;
var wall1,wall2,wall3,wall4,wall5;
var wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15;
var wall16,wall17,wall18,wall19,wall20;
var RiotGuard,RiotGuard1,RiotGuard2;
var RiotGuard3,RiotGuard4,RiotGuard5;
var RiotGuard6,RiotGuard7,RiotGuard8;
var RiotGuard9;

function preload(){
    DivyanshuImg = loadImage("Divyanshu.png")
    IdhantImg = loadImage("Idhant.png")
    JasonImg = loadImage("Jason.png")
    PrincipleImg = loadImage("Principle.png")
    RiotGuardImg = loadImage("Riot_Guard.png")
    RonithImg = loadImage("Ronith.png")
    SidhanTImg = loadImage("SidhanT.png")
    RiotGuard1Img = loadImage("Riot_Guard.png")
    RiotGuard2Img = loadImage("Riot_Guard.png")
    RiotGuard3Img = loadImage("Riot_Guard.png")
    RiotGuard4Img = loadImage("Riot_Guard.png")
    RiotGuard5Img = loadImage("Riot_Guard.png")
    RiotGuard6Img = loadImage("Riot_Guard.png")
    RiotGuard7Img = loadImage("Riot_Guard.png")
    RiotGuard8Img = loadImage("Riot_Guard.png")
    RiotGuard9Img = loadImage("Riot_Guard.png")
  
}  
function setup(){
    createCanvas(1200,690);
    
   edges =  createEdgeSprites()

   wall1 = createSprite(600,100,1000,10)
   wall2 = createSprite(600,600,1000,10)
   wall3 = createSprite(100,345,10,500)
   wall4 = createSprite(1100,345,10,500)
   wall5 = createSprite(600,200,800,40)
   wall6 = createSprite(525,500,650,60)
   wall7 = createSprite(200,350,40,310)
   wall8 = createSprite(1000,345,40,300)
   wall9 = createSprite(600,300,600,10)
   wall10 = createSprite(600,400,600,10)
   wall11 = createSprite(300,350,10,110)
   wall12 = createSprite(900,350,10,110)
   wall13 = createSprite(330,500,10,60)
   wall14 = createSprite(460,500,10,60)
   wall15 = createSprite(590,500,10,60)
   wall16 = createSprite(720,500,10,60)
   wall17 = createSprite(850,500,10,60)
   wall18 = createSprite(225,500,10,60)
   wall13.shapeColor = "black"
   wall14.shapeColor = "black"
   wall15.shapeColor = "black"
   wall16.shapeColor = "black"
   wall17.shapeColor = "black"
   wall18.shapeColor = "black"
   
   Divyanshu = createSprite(420,500);
    Divyanshu.addImage(DivyanshuImg);
    Divyanshu.scale = 0.15;

    Idhant = createSprite(290,500);
    Idhant.addImage(IdhantImg);
    Idhant.scale = 0.3;

    Jason = createSprite(810,500);
    Jason.addImage(JasonImg);
    Jason.scale = 0.2;

    Principle = createSprite(300,150);
    Principle.addImage(PrincipleImg);
    Principle.scale = 0.3;

    RiotGuard = createSprite(500,150);
    RiotGuard.addImage(RiotGuardImg);
    RiotGuard.scale = 0.27;

    RiotGuard1 = createSprite(600,150);
    RiotGuard1.addImage(RiotGuardImg);
    RiotGuard1.scale = 0.27;

    RiotGuard2 = createSprite(700,150);
    RiotGuard2.addImage(RiotGuardImg);
    RiotGuard2.scale = 0.27;

    RiotGuard3 = createSprite(800,150);
    RiotGuard3.addImage(RiotGuardImg);
    RiotGuard3.scale = 0.27;

    RiotGuard4 = createSprite(900,150);
    RiotGuard4.addImage(RiotGuardImg);
    RiotGuard4.scale = 0.27;

    RiotGuard5 = createSprite(1000,150);
    RiotGuard5.addImage(RiotGuardImg);
    RiotGuard5.scale = 0.27;

    RiotGuard6 = createSprite(400,150);
    RiotGuard6.addImage(RiotGuardImg);
    RiotGuard6.scale = 0.27;

    RiotGuard7 = createSprite(200,150);
    RiotGuard7.addImage(RiotGuardImg);
    RiotGuard7.scale = 0.27;

    RiotGuard8 = createSprite(100,150);
    RiotGuard8.addImage(RiotGuardImg);
    RiotGuard8.scale = 0.27;

    RiotGuard9 = createSprite(500,100);
    RiotGuard9.addImage(RiotGuardImg);
    RiotGuard9.scale = 0.27;

    

    Ronith = createSprite(680,500);
    Ronith.addImage(RonithImg);
    Ronith.scale = 0.3;

    SidhanT = createSprite(550,500);
    SidhanT.addImage(SidhanTImg);
    SidhanT.scale = 0.15;
    
}

function draw(){
    background("#a65e12")
    drawSprites()
    ellipse(600,345,40,40)
    if (keyDown("up")) {
        SidhanT.y -= 5;

    }
    if (keyDown("down")) {
        SidhanT.y += 5;

    }
    if (keyDown("right")) {
        SidhanT.x += 5;

    }
    if (keyDown("left")) {
        SidhanT.x -= 5;

    }
    SidhanT.collide(edges)


}