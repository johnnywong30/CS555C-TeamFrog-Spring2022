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
        if (user.length < 1) throw 'Could not get user'
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
    
    async updateFirstName(_email, _firstName) {
        const email = checkStr(_email)
        const firstName = checkStr(_firstName)
        const userExists = await this.getUser(email)
        if (userExists.length < 1) throw 'This user does not exist'
        const user = userExists[0]
        if (user.firstName === firstName) throw 'New first name cannot be the same as the original'
        const collection = await users()
        const updatedUser = {
            ...user,
            firstName: firstName
        }
        const updateInfo = await collection.updateOne(
            {email: email},
            {$set: updatedUser}
        )
        if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`
        const updated = await this.getUser(email)
        if (updated.length < 1) throw 'Could not get user'
        const data = updated[0]
        return {
            ...data,
            password: 'thats not very froggers of you',
            successMsg: 'Successfully updated First Name'
        }
    },
    async updateLastName(_email, _lastName) {
        const email = checkStr(_email)
        const lastName = checkStr(_lastName)
        const userExists = await this.getUser(email)
        if (userExists.length < 1) throw 'This user does not exist'
        const user = userExists[0]
        if (user.lastName === lastName) throw 'New last name cannot be the same as the original'
        const collection = await users()
        const updatedUser = {
            ...user,
            lastName: lastName
        }
        const updateInfo = await collection.updateOne(
            {email: email},
            {$set: updatedUser}
        )
        if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`
        const updated = await this.getUser(email)
        if (updated.length < 1) throw 'Could not get user'
        const data = updated[0]
        return {
            ...data,
            password: 'thats not very froggers of you',
            successMsg: 'Successfully updated Last Name'
        }
    },
    async updateCompany(_email, _company) {
        const email = checkStr(_email)
        const company = checkStr(_company)
        const userExists = await this.getUser(email)
        if (userExists.length < 1) throw 'This user does not exist'
        const user = userExists[0]
        if (user.company === company) throw 'New company cannot be the same as the original'
        const collection = await users()
        const updatedUser = {
            ...user,
            company: company
        }
        const updateInfo = await collection.updateOne(
            {email: email},
            {$set: updatedUser}
        )
        if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`
        const updated = await this.getUser(email)
        if (updated.length < 1) throw 'Could not get user'
        const data = updated[0]
        return {
            ...data,
            password: 'thats not very froggers of you',
            successMsg: 'Successfully updated Company'
        }
    },
    // TODO: do the rest of the updates, Johnny doesn't have to do them yet because they're not part of his user stories
}