let storage =window.localStorage.getItem('score');
if(!storage){
    window.localStorage.setItem('score', 0);
}
let highScore = JSON.parse(storage);
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let gameContainer = document.querySelector('.game-container')
gameOver = document.querySelector('.game-over')
overScore = document.querySelector('#over-score');
mainScore = document.querySelector('#score');
highScoreShow = document.querySelector('#high-score');
restart = document.getElementById('restart');
newHighScore = document.querySelector('.new-high-score')
restart.addEventListener('click',function(){
    gameOver.style.display = 'none';
    document.body.appendChild(gameContainer)
    gameContainer.innerHTML = '';
    start();
})
interval = 1000;
overScoreText = overScore.textContent;
function start(){
    newHighScore.style.display = "none"
    highScore =JSON.parse(window.localStorage.getItem('score'))
    highScoreShow.innerHTML = highScore
    tempHighScore = highScore;
    console.log(highScore)
    let score = 0;
    interval = 1000;
let gravity = 0.8;
    x=setInterval(()=>{
    console.log(overScoreText)
    var div = document.createElement('div');
    div.classList.add('ball');
    let ballPosition = Math.floor(Math.random() * (windowWidth-50))
    div.style.top = '1px';
    div.style.left = ballPosition + 'px';
    gameContainer.appendChild(div);
    div.onclick = function(){
        score++;
        mainScore.innerHTML = score
        div.remove();
    }

    if(score > highScore){
        highScoreShow.innerHTML = score;
        window.localStorage.setItem('score', score);
    }
    if(score===10){
        gravity = gravity + 0.3;
        interval -=100;
    }else if(score===20){
        gravity = gravity + 0.3;
        interval -=100;
    }
    else if(score===30){
        gravity = gravity + 0.4;
        interval -=100;
    }
    else if(score===40){
        gravity = gravity + 0.5;
        interval -=100;
    }
    else if(score===50){
        gravity = gravity + 1;
        interval -=100;
    }
    setInterval(()=>{
        div.style.top = div.offsetTop + gravity + 'px';
        if(div.offsetTop + 50 > windowHeight){
            gameContainer.remove();
            gameOver.style.display = 'flex';
            overScore.innerHTML = overScoreText + ' ' + score;
            if(tempHighScore<score){
                newHighScore.style.display = "block"
            }
            clearInterval(x)
        }
    })

},interval)
}

start();
