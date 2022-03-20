module.exports = {
    checkStr(str) {
        if (! str) throw 'string does not exist'
        if (typeof str !== 'string') throw 'input is not a string'
        const trimmed = str.trim()
        if (trimmed.length < 1) throw 'input cannot be empty string'
        return trimmed
    },
    checkNum(str) {
        if (! str) throw 'string does not exist'
        if (typeof str !== 'string') throw 'input is not a string'
        const checked = str.trim()
        if (checked.length < 1) throw 'input cannot be empty string'
        if( isNaN(parseInt(checked))) throw 'input must be a number'
        if (!Number.isInteger(parseInt(checked))) throw 'input should be a whole number'
        if (parseInt(checked) < 0) throw 'input should be greater or equal to 0'
        return checked
    }
}