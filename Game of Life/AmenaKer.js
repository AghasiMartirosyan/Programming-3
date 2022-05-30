class AmenaEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = []
    }
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        this.getNewCordinates();
        const found = [];
        for (const i in this.directions) {
            const x = this.directions[i][0];
            const y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        let found = this.chooseCell(0);
        let exact = random(found);

        if (exact) {
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
        this.energy--;
    }
    eat() {
        const found1 = this.chooseCell(1);
        const found2 = this.chooseCell(2);
        const found3 = this.chooseCell(3);
        const found4 = this.chooseCell(4);
        const found = found1.concat(found2, found3, found4);
        let exact = random(found);


        if (exact) {

            const x = exact[0];
            const y = exact[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.energy++;

            for (let i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (let i in toxicArr) {
                if (this.x == toxicArr[i].x && this.y == toxicArr[i].y) {
                    toxicArr.splice(i, 1);
                    break;
                }
            }
            for (let i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (let i in eaterArr) {
                if (this.x == eaterArr[i].x && this.y == eaterArr[i].y) {
                    eaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 10) {
                this.mul();
                this.energy+=5;
                this.energy = 5;

            }
        }
        else {
            this.move();
        }
        if (this.energy <= 0) {
            this.die();
        }
    }

    die() {

        for (let i in Amenaker) {
            if (this.y == Amenaker[i].y && this.x == Amenaker[i].x) {
                Amenaker.splice(i, 1);
            }
        }
        matrix[this.y][this.x] = 0;

    }
    mul() {
        const newCell = random(this.chooseCell(0));
        if (newCell) {
            const Amena = new AmenaEater(newCell[0], newCell[1]);
            Amenaker.push(Amena);
            matrix[newCell[1]][newCell[0]] = 5;
            this.energy = 5;
        }
        this.energy++;
    }
}