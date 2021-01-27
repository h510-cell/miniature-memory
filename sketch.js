  var hem,
    parth,
    aditya,
    joyce,
    saumya,
    ronit,
    rohit,
    shreyas,
    Krishna;
var hemImg, parhtImg, adityaImg, joyceImg, saumyaImg, ronitImg, rohitImg, shreyasImg, KrishnaImg;

var angle = 0;
var anglespeed = 0.2;
var hemRadius;

function preload() {
    hemImg = loadImage("sun.png");
    parthImg = loadImage("mercury.png");
    adityaImg = loadImage("venus.png");
    joyceImg = loadImage("earth.png");
    saumyamg = loadImage("mars.png");
    ronitImg = loadImage("jupiter.png");
    rohitImg = loadImage("saturn.jpg");
    shreyasImg = loadImage("neptune.jpg");
    KrishnaImg = loadImage("uranus.png");

}

function setup() {
    createCanvas(800, 800);
    hem = createSprite(0, 0);
    hem.addImage("hem", hemImg);
    hem.scale = 0.3;
    hem.setCollider("circle", -85, -60, 140);
    hem.debug = true;

    parth = createSprite(70, 50);
    parth.addImage("parth", parthImg);
    parth.scale = 0.1;
    parth.setCollider("circle", 0, 0, 300);
    parth.debug = true;

    aditya = createSprite(210, 60);
    aditya.addImage("aditya", adityaImg);
    aditya.scale = 0.15;

    joyce = createSprite(150, -18);
    joyce.addImage("joyce", joyceImg);
    joyce.scale = 0.22;

    saumya = createSprite(30, 220);
    saumya.addImage("saumya", saumyaImg);
    saumya.scale = 0.2;

    ronit = createSprite(-180, 210);
    ronit.addImage("ronit", ronitImg);
    ronit.scale = 0.3;

    rohit = createSprite(340, -30);
    rohit.addImage("rohit", rohitImg);
    rohit.scale = 0.3;

    shreyas = createSprite(220, 350);
    shreyas.addImage("shreyas", shreyasImg);
    shreyas.scale = 0.2;

    Krishna = createSprite(-340, -320);
    Krishna.addImage("Krishna", KrishnaImg);
    Krishna.scale = 0.1;

}

function draw() {
    background(0);


    angleMode(DEGREES);
    translate(width / 2, height / 2);
    rotate(angle);

    if (hem.collide(parth)) {
        parth.destroy();
    }


    angle = angle + anglespeed;
    if (frameCount % 1 === 0) {
        hem.scale = hem.scale + 0.01;
    }
    drawSprites();
}