const { checkStr } = require('../misc/validate')
const { users } = require('../config/mongoCollections')
const { ObjectId } = require('mongodb')
const bcrypt = require('bcryptjs')

module.exports = {
    async getUser(_email) {
        const email = checkStr(_email)
        const collection = await users()
        const user = await collection.findOne({ email: email })
        if (user === null) return []
        // make sure we always remove the password using removeKey when we send it back to the client
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
        const userExists = await this.getUser(email)
        if (userExists.length > 0) throw 'Account with that email exists'
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
            // title is the currently selected title
            title: 0
        }
        const insertInfo = await collection.insertOne(newUser)
        if (! insertInfo.acknowledged || ! insertInfo.insertedId) throw 'Could not register user'
        const user = await this.getUser(email)
        return {
            ...user,
            password: 'thats not very froggers of you',
            successMsg: `Successfully registered account for ${email}!`
        }
    },

    async validateUser(_email, _password) {
        const email = checkStr(_email)
        const inputPassword = checkStr(_password)
        const userExists = await this.getUser(email)
        const errorMsg = 'Invalid email or password'
        if (userExists.length < 1) throw errorMsg
        const user = userExists[0]
        const { password } = user
        const match = await bcrypt.compare(inputPassword, password)
        if (match) {
            return {
                ...user,
                password: 'thats not very froggers of you'
            }
        } else {
            throw errorMsg
        }
    },
    
    // TODO: updates for each individual User field 
}