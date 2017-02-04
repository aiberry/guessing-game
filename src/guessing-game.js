class GuessingGame {
    constructor(mn, mx) {this.mn=0, this.mx=0}

    setRange(min, max) {
        this.mn=min;
        this.mx=max;


    }

    guess() { return Math.round((this.mn+this.mx)/2);

    }

    lower() { this.mx=Math.round((this.mn+this.mx)/2)

    }

    greater() {this.mn=Math.round((this.mn+this.mx)/2)

    }
}

module.exports = GuessingGame;