

var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

//if we click on the start/reset
document.getElementById("container4").onclick = function(){
    
    //if we are playing
    
    if(playing == true){
        
        location.reload(); //reload page
        
    }else{//if we are not playing
        
        //change mode to playing
        
        playing = true;
        
        //set score to 0
        
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
     
        //show countdown box 
        
        show("container5");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide game over box
        
        hide("container6");
        
        //change button to reset
        document.getElementById("container4").innerHTML = "Reset Game";
        
        //start countdown
        
        startCountdown();
        
        //generate a new Q&A
        
        generateQA();
    }
    
}




//Clicking on an answer box
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing     
    if(playing == true){//yes
        if(this.innerHTML == correctAnswer){
        //correct answer
            
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");   
            }, 1000);
            
            //Generate new Q&A
            
            generateQA();
        }else{
        //wrong answer
        score--;
            document.getElementById("scorevalue").innerHTML = score;
            hide("correct");
            show("wrong");
           setTimeout(function(){
                hide("wrong");   
            }, 1000) ;
            generateQA();
        }
    }
}   
}
//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box for 1sec


//functions

//start counter

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){// game over
            stopCountdown();
            show("container6");
         document.getElementById("container6").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";   
            hide("container5");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);    
}

//stop counter

function stopCountdown(){
    clearInterval(action);   
}

//hide an element

function hide(Id){
    document.getElementById(Id).style.display = "none";   
}

//show an element

function show(Id){
    document.getElementById(Id).style.display = "block";   
}

//generate question and multiple answers

function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("container1").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer
    
    //fill other boxes with wrong answers
    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}/*var play=false;
var score;
var action;
var timeremaining;
var correctAnswer;
document.getElementById("container4").onclick=function(){
if(play==true)
{
location.reload();
}else{
    score=0;
    document.getElementById("scorevalue").innerHTML=score;
    document.getElementById("container5").style.display="block";
    timeremaining=60;
    document.getElementById("timeremainingvalue").innerHTML=timeremaining;
    document.getElementById("container6").style.display="none";
    
    document.getElementById("container4").innerHTML="Reset Game";
    

    startcountdown();
    generateQA ();


}
}
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing     
    if(play == true){//yes
        if(this.innerHTML == correctAnswer){
        //correct answer
            
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");   
            }, 1000);
            
            //Generate new Q&A
            
            generateQA();
        }else{
        //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");   
            }, 1000);
        }
    }
}   
}
//if we c

function startcountdown()
{
    action=setInterval(function(){
        timeremaining-=1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0){
            clearInterval(action);
            hide("correct");

            document.getElementById("container6").style.display="block";
            document.getElementById("container6").innerHTML="<p>Game Over</p>your score is "+ score +"</p>";
      hide("container5");
      hide("correct");
      hide("wrong");
      play=false;
      document.getElementById("container4").innerHTML="Start Game";
            

        }

    } ,1000)
    function hide(Id){
        document.getElementById(Id).style.display="none";
    }
    function show(Id){
        document.getElementById(Id).style.display="block";
    }

}
function generateQA()
{
        var x = 1+ Math.round(9*Math.random());
        var y = 1+ Math.round(9*Math.random());
        correctAnswer = x*y;
        document.getElementById("container1").innerHTML = x + "x" + y;
        var correctPosition = 1+ Math.round(3*Math.random());
        document.getElementById("box"+correctPosition).innerHTML = correctAnswer;

       



        for(i=1 ;i<5;i++){
            if(i!==correctPosition){
                var wronganswer=1+ Math.round(9*Math.random())+1+ Math.round(9*Math.random());
                document.getElementById("box"+i).innerHTML=wronganswer;

            }
        }
    
        

}*/
