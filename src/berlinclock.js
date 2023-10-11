class BerlinClock {

    time = null
    lineEnd = "\n"

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

    addLineEnd(line) {
        return line + this.lineEnd
    }

    showSeconds() {
         let seconds = this.time.split(":")[2]
         return seconds % 2 === 0 ? 'Y' : 'O'
    }

    showFiveHours() {
        let secondRow = ['O', 'O', 'O', 'O']
        let hours = this.time.split(":")[0]
        let fiveHours = Math.floor(hours / 5);
        let fiveIndex = 0;
        while(fiveIndex < fiveHours) {
            secondRow[fiveIndex] = 'R'
            fiveIndex++
        }
        return secondRow.join("")
    }

    showFivePlusHours() {
        let thirdRow = ['O', 'O', 'O', 'O']
        let hours = this.time.split(":")[0]
        let fivePlusHours = (hours-4) % 5
        let fiveIndex = 0;
        while(fiveIndex < fivePlusHours) {
            thirdRow[fiveIndex] = 'R'
            fiveIndex++
        }
        return thirdRow.join("")
    }

    showFiveMinutes() {
        let fourthRow = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
        let minutes = this.time.split(":")[1]
        let fiveMinutes = Math.floor(minutes / 5);
        let fiveIndex = 0;
        while(fiveIndex < fiveMinutes) {
            fourthRow[fiveIndex] = 'Y'
            fiveIndex++
        }
        return fourthRow.join("")
    }



    showClock() {
        let error = this.checkValidity();
        return  error === null ? this.addLineEnd(this.showSeconds())+
            this.addLineEnd(this.showFiveHours())+this.addLineEnd(this.showFivePlusHours())+
            this.addLineEnd(this.showFiveMinutes())+"YOOO": error
    }
}

const show_berlin_clock = (time) => {
    let berlinClock = new BerlinClock(time)
    return berlinClock.showClock();
}

module.exports = {BerlinClock, show_berlin_clock}