module.exports = {
    checkString(str) {
        if (! str) throw 'string does not exist'
        if (typeof str !== 'string') throw 'input is not a string'
        const trimmed = str.trim()
        if (trimmed.length < 1) throw 'input cannot be empty string'
        return trimmed
    }
}