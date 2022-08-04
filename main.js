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

function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
};

function main() {
    render();
    console.log("test");
    requestAnimationFrame(main);
};

loadImage();
main();