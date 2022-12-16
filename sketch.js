let dice=[]
let ludo=[  [0,41, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0,53, 0],
            [0, 0, 0, 0,58, 0,92, 0, 0, 0],
            [0,81, 0, 0, 0,45, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0,31, 0, 0, 0],
            [0,63,18, 0, 0, 0, 0, 0, 0,69],
            [3, 0, 0, 0, 0, 0, 0,49, 0, 0],
            [0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0,46, 0, 0], 
            [0, 0, 0,25, 0, 0, 0, 0, 0, 0]]
let p1pos,p1cor,p2pos,p2cor;
let count=0;
let p1=1,p2=1,p1next=1,p2next=1,p1prev=1,p2prev=1;
let dice1=6,dice2=6;
let p1term=false,p2term=true;
let p1start=false,p2start=false;
let moving=false;
let win=0;


function preload() {
    board = loadImage('images/ludo_board2.jpg');
    back=loadImage('images/backboard.jpg');

    one=loadImage('images/1.png');
    two=loadImage('images/2.png');
    three=loadImage('images/3.png');
    four=loadImage('images/4.png');
    five=loadImage('images/5.png');
    six=loadImage('images/6.png');

    dice=[one,two,three,four,five,six]

}


function setup() {
    createCanvas(1520, 708);

    cb = createButton('ROLL DICE');
    cb.position(120, 560);
    //cb.mousePressed(rollpc);

    yb = createButton('ROLL DICE');
    yb.position(1220, 560);
    yb.mousePressed(rollyours);

}
function draw() {
    background(150)

    image(back,0,0,1520,708) //wooden back board
    image(board,400,4,700,700) //ludo board
    noFill()
    strokeWeight(8)
    rect(400,4,700,700) //border of board

    //texts
    fill(250)
    textSize(65);
    text('COMPUTER', 10, 70);line(0,100,400,100)
    text('YOU', 1250, 70);line(1100,100,1520,100)

    //lights
    stroke(255)
    strokeWeight(6)

    if(p1term){ fill(0,255,0)}
    else{fill(255,0,0)} 
    ellipse(100,160,80,80);


    if(p2term){ fill(0,255,0)}
    else{fill(255,0,0)} 
    ellipse(1200,160,80,80);




    stroke(0)
    line(0,220,400,220)
    line(1100,220,1520,220)

    //dice
    rect(100,290,200,200)
    image(dice[dice1-1],100,290,200,200)

    rect(1200,290,200,200)
    image(dice[dice2-1],1200,290,200,200)


    //dice
    fill(0)
    stroke(255,255,0)
    rect(220,120,120,80)
    
    rect(1320,120,120,80)
    stroke(0)

    fill(255,0,0)
    
    text(String(p1),228,180);
    text(String(p2),1326,180);




    //players
    textSize(40);

        //player1
            p1cor=ludo_decode(p1)
            p1pos=ludo_pos(p1cor[0],p1cor[1]);

            fill(0, 255, 115)
            ellipse(p1pos[0]+10,p1pos[1],45,45);
            fill(255)
            text('C',p1pos[0]+10-15,p1pos[1]+15);

        //player2
            p2cor=ludo_decode(p2)
            p2pos=ludo_pos(p2cor[0],p2cor[1]);

            fill(255, 0, 85)
            ellipse(p2pos[0]-10,p2pos[1],45,45);
            fill(255)
            text('Y',p2pos[0]-10-12,p2pos[1]+15);

    //winning logic
    if(p2>=100){
        win=1;won.play();
        swal("Good job!", "You won!", "success");noLoop();
    }
    if(p1>=100){
        win=2;over.play();
        swal("sorry!", "You loose!\nbetter luck next time", "error");noLoop();
    }
        


    // console.log(p2,p2next)
    // console.log(p1,p1next)
     // delay of the player
    if(p1!=p1next){
        if(count%20==0){
            p1=p1+1;wood.play();
            player_cor=ludo_decode(p1)
            if(p1prev+dice1==p1){
                moving=false;
                p2term=true;p1term=false;blink.play();
               
            }
            if((ludo[player_cor[0]][player_cor[1]]!=0)&&(p1prev+dice1==p1)){
                if(ludo[player_cor[0]][player_cor[1]]>p1){wow.play();}
                else{alas.play();}
                p1=ludo[player_cor[0]][player_cor[1]]
            }
        } 
    }
    if(p2!=p2next){
        if(count%20==0){
            p2=p2+1;wood.play();
            player_cor=ludo_decode(p2)
            if(p2prev+dice2==p2){
                p1term=true;p2term=false;
                setTimeout(rollpc, 2000)
            }
            if((ludo[player_cor[0]][player_cor[1]]!=0)&&(p2prev+dice2==p2)){
                if(ludo[player_cor[0]][player_cor[1]]>p2){wow.play();}
                else{alas.play();}
                p2=ludo[player_cor[0]][player_cor[1]]
            }

        } 
    }


    

    count=(count+1)%100000
}

