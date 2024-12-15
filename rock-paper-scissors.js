let score= JSON.parse(localStorage.getItem('score')) ||
{
        wins:0,
        loses:0,
        ties:0
    }; 
 updateScore();    

function output(playerMove)
{                const comMove=computerMove(); 
        let result='';
        if(playerMove=='rock')  {  
        if(comMove=='rock')
            result='tie';
        else if(comMove=='paper')
            result='lose';
        else
            result='win';
        }
        else if(playerMove=='paper'){
        if(comMove=='rock')
            result='win';
        else if(comMove=='paper')
            result='tie';
        else
            result='lose';
        }
        else if(playerMove=='scissors'){
            if(comMove=='rock')
            result='lose';
        else if(comMove=='paper')
            result='win';
        else
            result='tie';
        }
    if(result=='win'){
        score.wins+=1;
    }
    else if(result=='lose'){
        score.loses+=1;
    }
    else if(result=='tie'){
        score.ties+=1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    updateScore();  
    document.querySelector('.js-result').innerHTML=`You ${result}`;
    document.querySelector('.js-move')
    .innerHTML=`you
<img class="move-icon "src="${playerMove}-emoji.png">
<img class="move-icon" src="${comMove}-emoji.png">
computer`;
    
    
}
function computerMove()
{
    const randomNumber=Math.floor(Math.random() * 3);

if(randomNumber==0)
    comMove='rock';
else if(randomNumber==1)
    comMove='paper';
else if(randomNumber==2)
    comMove='scissors';
console.log(comMove);
return comMove;
}
function updateScore(){
    document.querySelector('.js-score')
    .innerHTML=`wins:${score.wins} loses:${score.loses} tie:${score.ties}`;
    
   
}
 