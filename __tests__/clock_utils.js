const getNthRow = (clockString, row) => {
    let rows = clockString.split("\n")
    return rows[row]
}

module.exports = { getNthRow }