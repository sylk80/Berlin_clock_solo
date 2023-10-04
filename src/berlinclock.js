class BerlinClock {

}

const show_berlin_clock = (time) => {
    let result = null
    if(time === null || typeof time === 'undefined') {
        result = "Input time is required"
    } else if(time.length > 8 || time.length < 8) {
        result = "Time required in HH:mm:ss format"
    } else {
        result = "O\n" +
            "RROO\n" +
            "RROO\n" +
            "YYRYYRYYRYY\n" +
            "YOOO"
    }
    return result;
}

module.exports = {BerlinClock, show_berlin_clock}