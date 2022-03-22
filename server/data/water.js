const { checkStr, checkId } = require('../misc/validate')
const { users } = require('../config/mongoCollections')
const { getUser } = require('./users')
const { ObjectId } = require('mongodb')

module.exports = {
    async insertWater(_email, {id, timestamp, amount} ) {
        const email = checkStr(_email)
        const userCollection = await users()
        const user = await userCollection.findOne({ email: email })
        if (user === null) throw `User with ${email} does not exist`
        const newWater = {
            _id: id ? ObjectId(id): ObjectId(),
            timestamp: timestamp,
            amount: amount
        }
        const updatedUser = {
            ...user, 
            waterHistory: [...user.waterHistory, newWater]
        }
        const updateInfo = await userCollection.updateOne(
            {email: email},
            {$set: updatedUser}
        )
        if (updateInfo.modifiedCount < 1) throw `Could not insert water successfully`
        const updated = await getUser(email)
        if (updated.length < 1) throw 'Could not get user'
        const data = updated[0]
        const { measurement } = data
        const unit = measurement === 'imperial' ? 'cups' : 'liters'
        const localizedAmount = unit === 'cups' ? amount : amount * 0.236588
        const unitString = localizedAmount !== 1 ? unit : unit.slice(0, unit.length - 1)
        return {
            ...data,
            password: 'thats not very froggers of you',
            successMsg: `Drank ${localizedAmount} ${unitString} of water at ${timestamp}`
        }

    },
    async getWater(_email, _id) {
        const email = checkStr(_email)
        const id = checkId(_id)
        const user = await getUser(email)
        if (user.length < 1) throw 'Could not get user'
        const data = user[0]
        const { waterHistory } = data
        const water = waterHistory.find( obj => obj._id.toString() === id)
        if (water === undefined) throw 'Could not get water'
        return water
    },
    async getAllWater(_email) {
        const email = checkStr(_email)
        const user = await getUser(email)
        if (user.length < 1) throw 'Could not get user'
        const data = user[0]
        const { waterHistory } = data
        return waterHistory
    },
    async deleteWater(_email, _id) {
        const email = checkStr(_email)
        const id = checkId(_id)
        const user = await getUser(email)
        if (user.length < 1) throw 'Could not get user'
        const data = user[0]
        const { waterHistory } = data
        const index = waterHistory.findIndex( obj => obj._id.toString() === id)
        if (index === -1) throw 'Could not delete water'
        waterHistory.splice(index, 1)
        const updatedUser = {
            ...user,
            waterHistory: waterHistory
        }
        const userCollection = await users()
        const updateInfo = await userCollection.updateOne(
            {email: email},
            {$set: updatedUser}
        )
        if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`
        const updated = await getUser(email)
        if (updated.length < 1) throw 'Could not get user'
        const updatedData = updated[0]
        return {
            ...updatedData,
            password: 'thats not very froggers of you',
            successMsg: 'Successfully deleted water entry'
        }
    },
    
}