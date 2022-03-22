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
        if (! num) throw 'num does not exist'
        if (typeof num !== 'string' && typeof num !== 'number) throw 'num is not a number'
        if (typeof num === 'string') {
           const checked = str.trim()
           if (checked.length < 1) throw 'input cannot be empty string'
           if( isNaN(parseInt(checked))) throw 'input must be a number'
           if (!Number.isInteger(Number(checked))) throw 'input should be a whole number'
           if (Number(checked) < 0) throw 'input should be greater or equal to 0'
           return Number(checked)
        }
        else {
           if (isNaN(num)) throw 'num is not a number' 
        }
        return Number(num)
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
