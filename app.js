let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let gameContainer = document.querySelector('.game-container')
gameOver = document.querySelector('.game-over')
overScore = document.querySelector('#over-score');
mainScore = document.querySelector('#score');
restart = document.getElementById('restart');
restart.addEventListener('click',function(){
    gameOver.style.display = 'none';
    document.body.appendChild(gameContainer)
    gameContainer.innerHTML = '';
    start();
})
interval = 1000;
overScoreText = overScore.textContent;
function start(){
    let score = 0;
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
    if(score===10){
        gravity = gravity + 1;
        interval -=100;
    }else if(score===20){
        gravity = gravity + 1;
        interval -=100;
    }
    else if(score===30){
        gravity = gravity + 2;
        interval -=100;
    }
    else if(score===40){
        gravity = gravity + 2;
        interval -=100;
    }
    else if(score===50){
        gravity = gravity + 2;
        interval -=100;
    }
    setInterval(()=>{
        div.style.top = div.offsetTop + gravity + 'px';
        if(div.offsetTop + 50 > windowHeight){
            gameContainer.remove();
            gameOver.style.display = 'flex';
            overScore.innerHTML = overScoreText + ' ' + score;
            clearInterval(x)
        }
    })

},interval)
}

start();
