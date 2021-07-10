function preload(){

}

function setup(){

    Canvas=createCanvas(600,480);
    Canvas.position(400,250);
    Vid=createCapture(VIDEO);
    Vid.hide();

    tint_colour=""

}

function draw(){

    image(Vid,0,0,600,480);
    tint(tint_colour);

}

function take_snapshot(){

    save('filteredpic.png');

}

function aplly_filter(){

tint_colour=document.getElementById("Filter_color").value;

}