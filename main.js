canvas = new fabric.Canvas("myCanvas");

ball_x=0;
ball_y=0;

hole_x=300;
hole_y=600;

function hole_img(){
    fabric.Image.fromURL("golf-h.png", function(Img){
        hole_object=Img;
        hole_object.scaleToWidth(50);
        hole_object.scaleToHeight(50);
        hole_object.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_object);
    });
    hole_image();
}
	
function ball_image(){
    fabric.Image.fromURL("ball.png", function(Img){
        ball_object=Img;
        ball_object.scaleToWidth(50);
        ball_object.scaleToHeight(50);
        ball_object.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_object);
    });
}	

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        up();
        console.log("The x and y coordinates are "+ball_x+","+ball_y);
        console.log("up");
        yo();
    }

    if(keyPressed == '40'){
        down();
        console.log("The x and y coordinates are "+ball_x+","+ball_y);
        console.log("down");
        yo();
    }

    if(keyPressed == '37'){
        left();
        console.log("The x and y coordinates are "+ball_x+","+ball_y);
        console.log("left");
        yo();
    }
    
    if(keyPressed == '39'){
        right();
        console.log("The x and y coordinates are "+ball_x +","+ ball_y);
        console.log("right");
        yo();
    }
}

function up(){
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(ball_y <=500)
    {
        ball_y = ball_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = "+ ball_y);
        canvas.remove(ball_object);
        ball_update();
    }
}

function left(){
    if(ball_x >0)
    {
        ball_x = ball_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X =  " + ball_x + " , Y = "+ ball_y);
        canvas.remove(ball_object);
        ball_update();
    }
}

function right(){
    if(ball_x <=850)
    {
        ball_x = ball_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed, X =  " + ball_x + " , Y = "+ ball_y);
        canvas.remove(ball_object);
        ball_update();
    }
}
