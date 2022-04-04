const dbConnection = require('./mongoConnection')
const { ObjectId } = require('mongodb')

async function main() {
    const db = await dbConnection.connectToDb()
    try {
        await db.collection('frogs').drop() 
    } catch (e) {
        // collection does not exist yet
    }

    const frogCollection = await db.collection('frogs')
    
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 0, "name": 'Green Frog', "url": "https://imgur.com/cScfraF.png"})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 1, "name": 'Yellow Frog', "url": "https://imgur.com/p5iRh9X.png"})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 2, "name": 'Blue Frog', "url": "https://imgur.com/Iyi0NpO.png"})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 3, "name": 'Purple Frog', "url": "https://imgur.com/vxiufc8.png"})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 4, "name": 'Purple Spotted Frog', "url": "https://imgur.com/BoMeidq.png"})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 5, "name": 'Orange Spotted Frog', "url": "https://imgur.com/XchqGtg.png"})
    
    await dbConnection.closeConnection();
}

main()

exports = module.exports = {main}