class BerlinClock {

    time = null

    constructor(time) {
        this.time = time
    }

    checkValidity() {
        let error = null
        if (this.time === null || typeof this.time === 'undefined') {
            error = "Input time is required"
        } else if (this.time.length > 8 || this.time.length < 8) {
            error = "Time required in HH:mm:ss format"
        }
        return error
    }

    showSeconds() {
         let seconds = this.time.split(":")[2]
         return seconds % 2 === 0 ? 'Y' : 'O'
    }

    showFiveHours() {
        let secondRow = ['O', 'O', 'O', 'O']
        let hours = this.time.split(":")[0]
        console.log(hours)
        let fiveHours = Math.floor(hours / 5);
        console.log(fiveHours)
        let fiveIndex = 0;
        while(fiveIndex < fiveHours) {
            secondRow[fiveIndex] = 'R'
            fiveIndex++
        }
        return secondRow.join("")
    }



    showClock() {
        let error = this.checkValidity();
        return  error === null ? this.showSeconds()+"\n"+
            this.showFiveHours()+"\nRROO\nYYRYYRYYRYY\nYOOO": error
    }
}

const show_berlin_clock = (time) => {
    let berlinClock = new BerlinClock(time)
    return berlinClock.showClock();
}

module.exports = {BerlinClock, show_berlin_clock}