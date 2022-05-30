class ToxicGrass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }


    chooseCell(character) {
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

    mul() {
        const newCell = random(this.chooseCell(0));
        if (newCell && this.multiplay >= 11) {
            const newX = newCell[0];
            const newY = newCell[1];
            const newToxic = new ToxicGrass(newX, newY);
            toxicArr.push(newToxic);
            matrix[newY][newX] = 4;
            this.multiplay = 0;
        }
        this.multiplay++;
      }
}