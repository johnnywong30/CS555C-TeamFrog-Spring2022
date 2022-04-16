const { ObjectId } = require('mongodb')

module.exports = {
    checkStr(str) {
        if (! str) throw 'string does not exist'
        if (typeof str !== 'string') throw 'input is not a string'
        const trimmed = str.trim()
        if (trimmed.length < 1) throw 'input cannot be empty string'
        return trimmed
    },
    checkNum(num) {
        if (! num) throw new Error(`number does not exist!`)
        const ret = Number(num)
        if (typeof ret !== 'number' || isNaN(ret)) throw `input is not a number!`
        return ret
    },
    checkId(id) {
        if ( ! id) throw 'id does not exist'
        if (typeof id !== 'string') throw 'id is not a string'
        const trimmed = id.trim()
        if (trimmed.length < 1) throw 'id cannot be empty'
        if (! ObjectId.isValid(id)) throw 'id is not valid'
        return trimmed
    },
    checkFrogId(id) {
        if (typeof id === 'undefined') throw new Error(`number does not exist!`)
        const ret = Number(id)
        if (typeof ret !== 'number' || isNaN(ret)) throw `input is not a number!`
        return ret
    }
}
