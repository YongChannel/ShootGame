//캔버스 세팅
let canvas;
let ctx;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 700;

document.body.appendChild(canvas);

let backgroundImage, bulletImage, enemyImage, gameOverImage, spaceshipImage;

//우주선 좌표
let spaceshipX = canvas.width / 2 - 29;
let spaceshipY = canvas.height - 58;

function loadImage() {
    backgroundImage = new Image();
    backgroundImage.src = "images/backgroundImage.jpg";

    bulletImage = new Image();
    bulletImage.src = "images/bulletImage.png";

    enemyImage = new Image();
    enemyImage.src = "images/enemyImage.png";

    gameOverImage = new Image();
    gameOverImage.src = "images/gameOverImage.jpg";

    spaceshipImage = new Image();
    spaceshipImage.src = "images/spaceshipImage.png";
};

let keysDown = {}
function setupKeyboardListener() {
    document.addEventListener("keydown", function(event) {
        keysDown[event.keyCode] = true;
    });

    document.addEventListener("keyup", function(event) {
        delete keysDown[event.keyCode];
    });
};

function update() {
    if (39 in keysDown) {
        spaceshipX += 1;
    };

    if (37 in keysDown) {
        spaceshipX -= 1;
    };

    if (spaceshipX <= 0) {
        spaceshipX = 0;
    };

    if (spaceshipX >= canvas.width - 58) {
        spaceshipX = canvas.width - 58;
    };
};

function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
};

function main() {
    update();
    render();
    requestAnimationFrame(main);
};

loadImage();
setupKeyboardListener();
main();