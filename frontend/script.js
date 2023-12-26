// Get square element
var square = document.getElementById('square');

// Set initial position and speed
var posX = 0, posY = 0;
var speedX = 2, speedY = 2;

// Function to update square position
function updateSquarePosition() {
    posX += speedX;
    posY += speedY;

    // Check and reflect off the edges
    if (posX <= 0 || posX >= 990) {
        speedX = -speedX;
    }

    if (posY <= 0 || posY >= 790) {
        speedY = -speedY;
    }

    // Update square position
    square.style.left = posX + 'px';
    square.style.top = posY + 'px';

    // Repeat the update
    requestAnimationFrame(updateSquarePosition);
}

// Start the animation
updateSquarePosition();
