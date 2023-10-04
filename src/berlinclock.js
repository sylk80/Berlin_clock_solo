class BerlinClock {}

const show_berlin_clock = (time) => {
    let result = null
    if(time === null || typeof time === 'undefined') {
        result = "Input time is required"
    }
    return result;
}

module.exports = {BerlinClock, show_berlin_clock}