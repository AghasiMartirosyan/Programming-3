const matrix = [];
const side = 10;
const grassArr = [];
const grassEaterArr = [];
const eaterArr = [];
const toxicArr = [];
const Amenaker = [];


document.querySelector('body').style.backgroundColor = 'aqua';

function addgrass() {
    function generator1(matrixSize, GrassCount) {
        for (let i = 0; i < GrassCount; i++) {
            matrix.push([]);
            const x = Math.round(Math.random() * (matrixSize - 1));
            const y = Math.round(Math.random() * (matrixSize - 1));
            matrix[y][x] = 1;;
            grassArr.push(new Grass(x, y));
        }
    }
    generator1(80, 2)
}
function addgrasseater() {
    function generator2(matrixSize, GrassEaterCount) {
        for (let i = 0; i < GrassEaterCount; i++) {
            const x = Math.round(Math.random() * (matrixSize - 1));
            const y = Math.round(Math.random() * (matrixSize - 1));
            matrix[y][x] = 2;
            grassEaterArr.push(new GrassEater(x, y));
        }
    }
    generator2(80, 2)
}


function addeater() {
    function generator3(matrixSize, EaterCount) {
        for (let i = 0; i < EaterCount; i++) {
            const x = Math.round(Math.random() * (matrixSize - 1));;
            const y = Math.round(Math.random() * (matrixSize - 1));
            matrix[y][x] = 3;
            eaterArr.push(new Eater(x, y));
        }
    }
    generator3(80, 2)
}
function addtoxic() {
    function generator4(matrixSize, ToxicCount) {
        for (let i = 0; i < ToxicCount; i++) {
            const x = Math.round(Math.random() * (matrixSize - 1));
            const y = Math.round(Math.random() * (matrixSize - 1));
            matrix[y][x] = 4
            toxicArr.push(new ToxicGrass(x, y));
        }
    }
    generator4(80,2)
}
function generator(matrixSize, GrassCount, GrassEaterCount, EaterCount, ToxicCount, AmenaCount) {
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0);

        }

    }
    for (let i = 0; i < GrassCount; i++) {
        matrix.push([]);
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 1;;
        grassArr.push(new Grass(x, y));
    }
    for (let i = 0; i < GrassEaterCount; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 2;
        grassEaterArr.push(new GrassEater(x, y));
    }
    for (let i = 0; i < EaterCount; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));;
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 3;
        eaterArr.push(new Eater(x, y));
    }
    for (let i = 0; i < ToxicCount; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 4;
        toxicArr.push(new ToxicGrass(x, y));
    }
    for (let i = 0; i < AmenaCount; i++) {
        const x = Math.round(Math.random() * (matrixSize - 1));
        const y = Math.round(Math.random() * (matrixSize - 1));
        matrix[y][x] = 5
        toxicArr.push(new AmenaEater(x, y));
    }
}

function preload() {

}

function setup() {
    generator(80, 100, 100, 100, 100, 10    );;
    frameRate(1000);
    createCanvas(matrix[0].length * side, matrix[0].length * side);
    const canvas = document.querySelector("canvas");
    canvas.style.position = "absolute";
    canvas.style.bottom = "43.5px";
    canvas.style.right = "2%";
    background('white');
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("purple");
            }
            ellipse(x * side + side / 2, y * side + side / 2, side, side);

        }
    }


    for (const g in grassArr) {
        grassArr[g].mul();
    }
    for (const g in toxicArr) {
        toxicArr[g].mul();
    }
    for (const g in grassEaterArr) {
        grassEaterArr[g].eat();
    }
    for (const g in eaterArr) {
        eaterArr[g].eat();
    }
    for (const g in Amenaker) {
        Amenaker[g].eat();
    }
}