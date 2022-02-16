const { checkStr } = require('../misc/validate')
const { users } = require('../config/mongoCollections')
const { ObjectId } = require('mongodb')
const bcrypt = require('bcrypt')

module.exports = {
    async getUser(_email) {
        const email = checkStr(_email)
        const collection = await users()
        const user = await collection.findOne({ email: email })
        if (user === null) return []
        return [user]
    },
    async getUsers() {
        const collection = await users()
        const userList = await collection.find({}).toArray()
        if (!userList) throw 'could not get all users'
        return userList
    },
    async createUser(_firstName, _lastName, _email, _password, _company) {
        const email = checkStr(_email)
        const userExists = this.getUser(email)
        if (userExists.length > 0) throw 'account with that email exists'
        const firstName = checkStr(_firstName)
        const lastName = checkStr(_lastName)
        const password = checkStr(_password)
        const company = checkStr(_company)
        const collection = await users()
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            company: company,
            // ownedFrogs is an array of int ids
            // these int ids correlate with the id of a frog
            // if an id is in this array, this user owns that frog
            // all users start with frog 0
            ownedFrogs: [0],
            // friends is an array of emails of this user's friends
            friends: [], 
            money: 0,
            prestige: 0,
            // TODO: create formula for gaining exp based on current level and water drank amount
            level: 1,
            experience: 0,
            // waterHistory is an array of water objects that contain a timestamp and amount of water drank
            waterHistory: [],
            // challenges is an array of challenge objects this user has accepted
            challenges: [],
            // completedChallenges is an array of challenge objects this user has completed
            completedChallenges: [],
            // preferred system: metric vs imperial
            measurement: 'imperial', // we are flawed Americans
            // titles is an array of title ids that this user has obtained
            // 0 is 'Tadpole'
            titles: [0],
        }
        const insertInfo = await collection.insertOne(newUser)
        if (! insertInfo.acknowledged || ! insertInfo.insertedId) throw 'could not register user'

    },

    async validateUser(_email, _password) {
        const
    },
    async comparePasswords(_pass1, _pass2) {

    }
}