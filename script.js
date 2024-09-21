const gameboard=document.querySelector('#game-board');
//Defining game varaiables
let snake=[{x:10,y:10}];//Starting index of snake in grid
let direction='down';
let food=setFoodposition();
let gameover=document.querySelector('.gameover');
let gameInterval;
let hiS=document.querySelector('.hiS');
let music=document.querySelector('.music');
console.log(music);
let instructionText=document.querySelector('#instruction-text');
let logo=document.querySelector('#logo');
const score=document.querySelector('#score');
const hiScore=document.querySelector('#highScore');
let   hiSc=0;
let gameStarted=false;
let gameSpeedDelay=200;
//Step 1: Make a function draw map,snake,food
function draw()
{
    gameboard.innerHTML='';//Resetting innerHTML of game board if anything present
    drawSnake();//drawing the snake inside the grid
    drawFood();
}
function drawSnake() {
    snake.forEach((part, index) => {
        const snakeElement = createSnakeElement('div', 'snake');
        setPosition(snakeElement, part);

        // Apply the random color to the snake's head
        
        gameboard.appendChild(snakeElement);
    });
}//Create a snake or food cube/div
function createSnakeElement(tag,classsname)
{
    const element=document.createElement(tag);
    element.className=classsname;
    return element;//Returning element/particle with tag as div and classname of snake to provide same styling as of a single particle of snake
}
//Set position of element
function setPosition(element,position)
{
    element.style.gridColumn=position.x;
    element.style.gridRow=position.y;
}
function drawFood()
{
    const foodElement=createSnakeElement('div','food');
    setPosition(foodElement,food);
    gameboard.appendChild(foodElement);
}
function setFoodposition()
{
    const x=Math.floor(Math.random()*20)+1;
    const y=Math.floor(Math.random()*20)+1;
    return {x,y};
}

//Moving the snake
function move()
{
    const head={...snake[0]};
    
    switch (direction)
    {
        case 'up':
            head.y--;
        break;
        case 'down':
            head.y++;
        break;
        case 'left':
            head.x--;
        break;
        case 'right':
            head.x++;
        break;
    }
    
    snake.unshift(head);//Adding at the beggining of the array
    if(head.x==food.x && head.y==food.y )
    {
        if(music)
        {
            music.play();
        }
        if(food.x==1 || food.x==20 ||  food.y==1 || food.y==20)
        {
            
        const currScore=snake.length - 1 +2 ;
        if(currScore>5)
        gameSpeedDelay=3000;
        score.textContent=currScore.toString().padStart(3,'0');
        }
        updateScore();
        food=setFoodposition();//Generating new food 
        tailColor = headColor; // Change the tail color to the previous head color
        headColor = generateRandomColor();
        increaseSpeed();
        clearInterval(gameInterval);//Clear food Interval

        gameInterval=setInterval(()=>{
            move();
            checkCollision();
            draw();
        },gameSpeedDelay);
    }
    else
    {
        snake.pop();
    }

  }
function startGame()
{
    gameStarted=true;//Keep track of running game
    instructionText.style.display='none';
    logo.style.display='none';
    gameInterval=setInterval(()=>{
        move();
        checkCollision();
        draw();
    
    },gameSpeedDelay);
}
document.addEventListener('keydown', (event)=>{
    if ((!gameStarted && event.code === 'Space') || (!gameStarted && event.code === ' ')) {
        startGame();
    } else {
        switch (event.key) {
            case 'ArrowUp':
              direction = 'up';
              break;
            case 'ArrowDown':
              direction = 'down';
              break;
            case 'ArrowLeft':
              direction = 'left';
              break;
            case 'ArrowRight':
              direction = 'right';
              break;
              }
    }
});
function increaseSpeed()
{
    if(gameSpeedDelay>150)
    {
        gameSpeedDelay-=5;
    }
    else if(gameSpeedDelay >100)
    {
        gameSpeedDelay-=3;     
    }
    else if(gameSpeedDelay > 50)
    {
        gameSpeedDelay-=2;
    }
    else if(gameSpeedDelay >25)
    {
        gameSpeedDelay-=1;  
    }
}
function checkCollision()
{
    const head=snake[0];
    if(head.x < 1 || head.x > 20 || head.y<1 || head.y>20)
    {
        if(gameover)
        {
            gameover.play();
        }
        resetGame();
    }
    if(head.x < 1 || head.x > 20 || head.y<1 || head.y>20)
        {
            if(gameover)
            {
                gameover.play();
            }
            resetGame();
        }
    //if snake collides to its own length
    for(let i=1;i<snake.length;i++)
    {
       if(head.x===snake[i].x && head.y===snake[i].y) 
       {
        if(gameover)
            {
                gameover.play();
            }
        resetGame();
       }
    }
}
function resetGame()
{
    updateHiScore();
    stopGame();
    
    gameStarted=false;
    snake=[{x:10,y:10}];
    direction='right';
    gameSpeedDelay=200;
    updateScore();
    draw();
    }
function updateScore()
{
    const currScore=snake.length - 1;
    if(currScore>5)
        gameSpeedDelay=3000;
    score.textContent=currScore.toString().padStart(3,'0');
}
function updateHiScore()
{
    if(hiSc<snake.length-1)
    {
        hiSc=snake.length-1;
        if(hiS)
        {
            hiS.play();
        }
        hiScore.textContent=hiSc.toString().padStart(3,'0');
    }
    
        hiScore.style.display='block';
    
}
function stopGame() {
    clearInterval(gameInterval); // Stop the game loop
    const ele = document.createElement('h1');
    instructionText.style.display='block';
    
    logo.style.display='block';
    // Append the game-over message to the gameboard
}
