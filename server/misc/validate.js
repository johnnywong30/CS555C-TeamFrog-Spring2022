const { ObjectId } = require('mongodb')

module.exports = {
    checkNum(num) {
        if (!num) throw "number does not exist";
        if (typeof int !== "number") throw "input is not a number";
        return num;
    },
    checkStr(str) {
        if (! str) throw 'string does not exist'
        if (typeof str !== 'string') throw 'input is not a string'
        const trimmed = str.trim()
        if (trimmed.length < 1) throw 'input cannot be empty string'
        return trimmed
    },
    checkId(id) {
        if ( ! id) throw 'id does not exist'
        if (typeof id !== 'string') throw 'id is not a string'
        const trimmed = id.trim()
        if (trimmed.length < 1) throw 'id cannot be empty'
        if (! ObjectId.isValid(id)) throw 'id is not valid'
        return trimmed
    }
}
