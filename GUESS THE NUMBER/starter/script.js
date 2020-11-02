'use strict';
 let highscore1= 0;
let numberX= Math.trunc(Math.random()*20)+1;
let newScore=20;
function displayMessage(message){
   document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click', function(){  
   const guess=Number(document.querySelector('.guess').value);
 //when there is no input
     if( !guess   ){
        displayMessage(' Please introduce  a number! :) ');
     }
     else if( guess< 0)
     {
        displayMessage( ' Please introduce a positive number!');
     }
     else if(guess===numberX )
     {
         //when pLAYERR WINS
        document.querySelector('.number').textContent=numberX;
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.message').textContent= ' Correct Number!';
        document.querySelector('.number').style.width='30rem';
        if(newScore>highscore1)
        {
            highscore1=newScore;
            document.querySelector('.highscore').textContent=highscore1;
        }
        
     }//when player is too high
     else if(guess !== numberX){
         if(newScore>1){
         
         guess > numberX? displayMessage('The number is too high!') : displayMessage('The number is too low!');
        newScore--;
        document.querySelector('.score').textContent=newScore;    
    }
    else{
      displayMessage('You lost the game!');
        document.querySelector('.score').textContent=0;
    }
     }  

});

document.querySelector('.again').addEventListener('click',
function()
{ 
      newScore=20;
     numberX= Math.trunc(Math.random()*20)+1;
  
    document.querySelector('body').style.backgroundColor='black';
   displayMessage('Start guessing...');
    document.querySelector('.score').textContent=newScore;
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value='';
   
});
