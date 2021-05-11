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
var wallGroup,knife;
var riotGroup,knifeImg;
var prisonerGroup;
var gameState=0;
var keyCard,keyCardImg;
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
    knifeImg = loadImage("Knife.png")
    keyCardImg = loadImage("KeyCard.png")
}  
function setup(){
    createCanvas(1270,580);
    
   edges =  createEdgeSprites()

    // outer walls
   wall1 = createSprite(625,50,1150,10)
   wall2 = createSprite(625,515,1150,10)
   wall3 = createSprite(50,282,10,475)
   wall4 = createSprite(1200,282,10,475)

    
   wall5 = createSprite(625,125,1000,20)
   wall6 = createSprite(625,450,1000,20)
   wall7 = createSprite(125,325,20,250)
   wall8 = createSprite(1125,230,20,225)

   wall9 = createSprite(625,225,840,60)
   wall10 = createSprite(660,380,770,10)
   wall11 = createSprite(200,290,10,190)
   wall12 = createSprite(1040,290,10,190)

   wall13 = createSprite(200,225,10,60)
   wall14 = createSprite(370,225,10,60)
   wall15 = createSprite(540,225,10,60)
   wall16 = createSprite(710,225,10,60)
   wall17 = createSprite(870,225,10,60)
   wall18 = createSprite(1040,225,10,60)
   wall19 = createSprite(625,198,840,8)

   wall13.shapeColor = "black"
   wall14.shapeColor = "black"
   wall15.shapeColor = "black"
   wall16.shapeColor = "black"
   wall17.shapeColor = "black"
   wall18.shapeColor = "black"
   wall19.shapeColor = "black"

   wallGroup = new Group()
   wallGroup.add(wall1)
   wallGroup.add(wall2)
   wallGroup.add(wall3)
   wallGroup.add(wall4)
   wallGroup.add(wall5)
   wallGroup.add(wall6)
   wallGroup.add(wall7)
   wallGroup.add(wall8)
   wallGroup.add(wall10)
   wallGroup.add(wall11)
   wallGroup.add(wall12)
   wallGroup.add(wall13)
   wallGroup.add(wall14)
   wallGroup.add(wall15)
   wallGroup.add(wall16)
   wallGroup.add(wall17)
   wallGroup.add(wall18)
   wallGroup.add(wall19)
   
   Divyanshu = createSprite(285,225);
    Divyanshu.addImage(DivyanshuImg);
    Divyanshu.scale = 0.15;
    Divyanshu.setCollider("circle",0,0,50)


    Idhant = createSprite(435,225);
    Idhant.addImage(IdhantImg);
    Idhant.scale = 0.3;
    Idhant.setCollider("circle",0,0,50)

    Jason = createSprite(625,225);
    Jason.addImage(JasonImg);
    Jason.scale = 0.15;
    Jason.debug = true
    Jason.setCollider("circle",0,0,50)

    Ronith = createSprite(795,225);
    Ronith.addImage(RonithImg);
    Ronith.scale = 0.3;
    Ronith.setCollider("circle",0,0,50)

    SidhanT = createSprite(945,225);
    SidhanT.addImage(SidhanTImg);
    SidhanT.scale = 0.15;
    SidhanT.setCollider("circle",0,0,50)
    
    prisonerGroup = new Group()
    prisonerGroup.add(Divyanshu)
    prisonerGroup.add(Idhant)
    prisonerGroup.add(Jason)
    prisonerGroup.add(Ronith)
   // prisonerGroup.add(SidhanT)
    prisonerGroup.setVelocityXEach(3)
    prisonerGroup.setVelocityYEach(3)
   

    Principle = createSprite(300,150);
    Principle.addImage(PrincipleImg);
    Principle.scale = 0.3;

    RiotGuard = createSprite(20,25);
    RiotGuard.addImage(RiotGuardImg);
    RiotGuard.scale = 0.27;

    RiotGuard1 = createSprite(1225,25);
    RiotGuard1.addImage(RiotGuardImg);
    RiotGuard1.scale = 0.27;

    RiotGuard2 = createSprite(75,100);
    RiotGuard2.addImage(RiotGuardImg);
    RiotGuard2.scale = 0.27;

    RiotGuard3 = createSprite(150,550);
    RiotGuard3.addImage(RiotGuardImg);
    RiotGuard3.scale = 0.27;

    RiotGuard4 = createSprite(1050,550);
    RiotGuard4.addImage(RiotGuardImg);
    RiotGuard4.scale = 0.27;

    RiotGuard5 = createSprite(1155,80);
    RiotGuard5.addImage(RiotGuardImg);
    RiotGuard5.scale = 0.27;

    RiotGuard6 = createSprite(1075,400);
    RiotGuard6.addImage(RiotGuardImg);
    RiotGuard6.scale = 0.27;

    RiotGuard7 = createSprite(250,165);
    RiotGuard7.addImage(RiotGuardImg);
    RiotGuard7.scale = 0.27;

    RiotGuard8 = createSprite(950,300);
    RiotGuard8.addImage(RiotGuardImg);
    RiotGuard8.scale = 0.27;

    RiotGuard9 = createSprite(250,410);
    RiotGuard9.addImage(RiotGuardImg);
    RiotGuard9.scale = 0.27;

    riotGroup = new Group()
    riotGroup.add(RiotGuard)
    riotGroup.add(RiotGuard1)
    riotGroup.add(RiotGuard2)
    riotGroup.add(RiotGuard3)
    riotGroup.add(RiotGuard4)
    riotGroup.add(RiotGuard5)
    riotGroup.add(RiotGuard6)
    riotGroup.add(RiotGuard7)
    riotGroup.add(RiotGuard8)
    riotGroup.add(RiotGuard9)

    knife = createSprite(100,100);
    knife.addImage(knifeImg);
    knife.scale = 0.05;
    knife.visible=false;
    
    keyCard = createSprite(100,100)
    keyCard.addImage(keyCardImg);
    keyCard.scale = 0.03;
    keyCard.visible =false;;
    
}

function draw(){
    background("#a65e12")
    ellipse(600,300,40,40)
    drawSprites()
    keyCard.x=Principle.x
    keyCard.y=Principle.y
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
    SidhanT.collide(wallGroup)
    prisonerGroup.collide(edges)
    riotGroup.collide(edges)

    prisonerGroup.bounceOff(wallGroup)
    riotGroup.bounceOff(wallGroup)
    
   if(SidhanT.x<=100&&SidhanT.y<=100&&keyDown('k')){
       knife.visible=true
       gameState=1
   }   
   if(gameState===1){
       knife.x=SidhanT.x
       knife.y=SidhanT.y
    }
    if(SidhanT.isTouching(Principle)&&keyDown('a')){
        keyCard.visible=true
        gameState=2
    }
}