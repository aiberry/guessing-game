
class GuessingGame {
    constructor() {}


    setRange(min, max) {//this method accepts min and max value of range of number to guess



        var array = [];

        for (var number = min; number <= max; number = number + 1)

            array.push(number);


        return array;
    }


    guess() {
        var array = [];

        for (var number = 0; number <= 4048; number = number + 1)

            array.push(number);
        return array[409];
        //this method returns solution candidate (you make an assumption based on range and previous assumptions)

    }

    lower() { this.array.max=math.floor((this.array.min+this.array.max)/2) //this method is called if prev call of guess() returned number which is lower than answer

    }

    greater() {this.array.min=math.floor((this.array.min+this.array.max)/2)  //this method is called if prev call of guess() returned number which is greater than answer

    }
}


const game = new GuessingGame();game.setRange(0, 10)
console.log(game);

console.log(game.guess());