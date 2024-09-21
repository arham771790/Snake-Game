# Snake-Game


## Overview
This is a classic Snake Game implemented in JavaScript. The player controls a snake that grows in length by eating food, and the objective is to keep the snake from running into the walls or itself. The game gets progressively faster as the snake consumes more food. The player’s current score and high score are displayed, and sound effects enhance the gaming experience.

## Features
- **Snake Movement:** Use arrow keys to control the snake's direction.
- **Food Generation:** Randomly placed food on the grid.
- **Score Tracking:** Real-time display of current score and high score.
- **Game Over:** The game stops when the snake hits the wall or collides with itself.
- **Sound Effects:**
  - Music plays when the snake consumes food.
  - A game over sound when the snake collides with walls or itself.
  - High score achievement sound when the player sets a new high score.
- **Game Speed:** Increases as the snake grows longer, adding more challenge.

## How to Play
1. **Start the Game:** Press the `Spacebar` to start the game.
2. **Move the Snake:**
   - `Arrow Up` - Move Up
   - `Arrow Down` - Move Down
   - `Arrow Left` - Move Left
   - `Arrow Right` - Move Right
3. **Game Objective:** Eat the food to grow the snake and increase your score.
4. **Avoid:** Colliding with the walls or running into the snake's own body.

## Game Controls
- **Spacebar:** Start the game.
- **Arrow Keys:** Control the movement of the snake.
  
## Score and High Score
- **Current Score:** Displays the length of the snake minus the starting length.
- **High Score:** Keeps track of the highest score achieved during the session.

## Sound Effects
- Ensure that sound elements (`music`, `gameover`, and `hiS`) are available and properly linked in the HTML for the sound effects to function.

## Files
- **`index.html`**: Contains the structure of the game, including the game board and score displays.
- **`style.css`**: Styles the game board, snake, food, and other elements.
- **`script.js`**: Implements the game logic, such as snake movement, food generation, score tracking, and speed adjustments.

## Installation
1. Clone the repository or download the files.
2. Open the `index.html` file in your browser to play the game.

## Customization
You can adjust the following parameters in the code:
- **Snake Speed**: Change the initial speed or speed increment in the `increaseSpeed` function.
- **Grid Size**: Modify the grid size by adjusting the `setFoodposition()` and `checkCollision()` functions.
  
## Future Improvements
- Add touch controls for mobile devices.
- Introduce different levels with varying challenges.
- Implement a save system for high scores across sessions.

Enjoy the game!
