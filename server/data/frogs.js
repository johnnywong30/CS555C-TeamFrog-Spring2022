const { frogs } = require('../config/mongoCollections')
const { ObjectId } = require('mongodb')
const { checkStr } = require('../misc/validate')

module.exports = {
    async getFrog(_name) {
        const name = checkStr(_name)
        const collection = await frogs()
        const frog = await collection.findOne({ name: name })
        if (frog === null) return []
        return [frog]
    },

    async getFrogs() {
        const collection = await frogs()
        const frogList = await collection.find({}).toArray()
        if (!frogList) throw 'could not get all users'
        return frogList
    },

    async createFrog(_name, _link) {
        const name = checkStr(_name);
        const link = checkStr(_link)
        const frogExists = await this.getFrog(name)
        if (frogExists.length > 0) throw 'Frog with this name exists'
        const newFrog = {
            name: name,
            link: link
        }
        const insertInfo = await collection.insertOne(newFrog)
        if (! insertInfo.acknowledged || ! insertInfo.insertedId) throw 'Could not register frog'
        const frog = await this.getFrog(name)
        if (frog.length < 1) throw 'Could not get frog'
        const ret = {
            ...frog[0]
        }
        return ret
    },

    async deleteFrog(_name) {
        const name = checkStr(_name)
        const collection = await frogs()
        const deletionInfo = await collection.deleteOne({name: name})
        if (deletionInfo.deleteCount === 0) throw `Could not delete frog ${name}`
        return true
    },
    
    async updateFrogName(_name, _newName) {
        const name = checkStr(_name);
        const newName = checkStr(_newName);
        const frogExists = await this.getFrog(name)
        if (frogExists.length < 1) throw 'This frog does not exist'
        const frog = frogExists[0]
        if (frog.name === newName) throw 'New frog name cannot be the same as the original'
        const collection = await frogs()
        const updatedFrog = {
            ...frog,
            name: newName
        }
        const updateInfo = await collection.updateOne({name: name}, {$set: updatedFrog})
        if (updatedFrog.modifiedCount < 1) throw `Could not update frog successfully`
        const updated = await this.getFrog(name)
        if (updated.length < 1) throw 'Could not get frog'
        const data = updated[0]
        return {
            ...data,
            successMsg: 'Successfully updated frog name'
        }
    },

    async updateFrogLink(_name, _newLink) {
        const name = checkStr(_name)
        const link = checkStr(_newLink)
        const frogExists = await this.getFrog(name)
        if (frogExists.length < 1) throw 'This frog does not exist'
        const frog = frogExists[0]
        if (frog.link === link) throw 'New frog name cannot be the same as the original'
        const collection = await frogs()
        const updatedFrog = {
            ...frog,
            link: link
        }
        const updateInfo = await collection.updateOne({link: link}, {$set: updatedFrog})
        if (updatedFrog.modifiedCount < 1) throw `Could not update frog successfully`
        const updated = await this.getFrog(name)
        if (updated.length < 1) throw 'Could not get frog'
        const data = updated[0]
        return {
            ...data,
            successMsg: 'Successfully updated frog link'
        }
    }
}