canvas = new fabric.Canvas("myCanvas");
blockwidth = 30;
blockheight = 30;
playerX = 0;
playerY = 0;
playerobject = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerobject = Img;

        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playerY,
            left: playerX
        }); 
        canvas.add(playerobject);
    });
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockobject = Img;

        blockobject.scaleToHeight(blockheight);
        blockobject.scaleToWidth(blockwidth);
        blockobject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockobject);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == 80) {
        console.log("p + shift key pressed together");
        blockheight += 10;
        blockwidth += 10;
        console.log(blockwidth);
        console.log(blockheight);
        document.getElementById("current_height").innerHTML = blockheight;
        document.getElementById("current_width").innerHTML = blockwidth;
    }
    if(e.shiftKey == true && keyPressed == 77) {
        console.log("m + shift key pressed together");
        if(blockwidth > 0){
            blockheight -= 10;
            blockwidth -= 10;
            console.log(blockwidth);
            console.log(blockheight);
            document.getElementById("current_height").innerHTML = blockheight;
            document.getElementById("current_width").innerHTML = blockwidth;
        }
    }
    if(keyPressed == 38){
        console.log("up");
        up();
    }
    if(keyPressed == 40){
        console.log("down");
        down();
    }
    if(keyPressed == 37){
        console.log("left");
        left();
    }
    if(keyPressed == 39){
        console.log("right");
        right();
    }
    if(keyPressed == 67){
        console.log("c pressed");
        newImage("cloud.jpg");
    }
    if(keyPressed == 68){
        console.log("d pressed");
        newImage("dark_green.png");
    }
    if(keyPressed == 71){
        console.log("g pressed");
        newImage("ground.png");
    }
    if(keyPressed == 76){
        console.log("l pressed");
        newImage("light_green.png");
    }
    if(keyPressed == 82){
        console.log("r pressed");
        newImage("roof.jpg");
    }
    if(keyPressed == 84){
        console.log("t pressed");
        newImage("trunk.jpg");
    }
    if(keyPressed == 87){
        console.log("w pressed");
        newImage("wall.jpg");
    }
    if(keyPressed == 85){
        console.log("u pressed");
        newImage("unique.png");
    }
    if(keyPressed == 89){
        console.log("y pressed");
        newImage("yellow_wall.png");
    }
};

function up() {
    if(playerY > 0){
        playerY -= blockheight;
        console.log("X = " + playerX +", Y = " + playerY);
        canvas.remove(playerobject);
        playerupdate();
    }
};

function down() {
    if(playerY < 600){
        playerY += blockheight;
        console.log("X = " + playerX +", Y = " + playerY);
        canvas.remove(playerobject);
        playerupdate();
    }
};

function right(){
    if(playerX <1000){
        playerX += blockwidth;
        console.log("X = " + playerX +", Y = " + playerY);
        canvas.remove(playerobject);
        playerupdate();
    }
};

function left() {
    if(playerX > 0){
        playerX -= blockwidth;
        console.log("X = " + playerX +", Y = " + playerY);
        canvas.remove(playerobject);
        playerupdate();
    }
}