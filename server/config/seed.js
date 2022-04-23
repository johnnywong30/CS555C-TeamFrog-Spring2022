const dbConnection = require('./mongoConnection')
const { ObjectId } = require('mongodb')
const users = require('../data/users')

async function main() {
    const db = await dbConnection.connectToDb()
    try {
        await db.collection('frogs').drop() 
        await db.collection('users').drop()
    } catch (e) {
        // collection does not exist yet
    }

    const frogCollection = await db.collection('frogs')
    
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 0, "name": 'Green Frog', "url": "https://imgur.com/cScfraF.png", price: 0})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 1, "name": 'Yellow Frog', "url": "https://imgur.com/p5iRh9X.png", price: 500})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 2, "name": 'Blue Frog', "url": "https://imgur.com/Iyi0NpO.png", price: 2000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 3, "name": 'Purple Frog', "url": "https://imgur.com/vxiufc8.png", price: 5000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 4, "name": 'Purple Spotted Frog', "url": "https://imgur.com/BoMeidq.png", price: 10000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 5, "name": 'Orange Spotted Frog', "url": "https://imgur.com/XchqGtg.png", price: 20000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 6, "name": 'Green Fedora Frog', "url": "https://imgur.com/h5MCVRm.png", price: 20000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 7, "name": 'Yellow Fedora Frog', "url": "https://imgur.com/V2KVW1v.png", price: 20000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 8, "name": 'Blue Fedora Frog', "url": "https://imgur.com/PPP5nO4.png", price: 20000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 9, "name": 'Purple Fedora Frog', "url": "https://imgur.com/gHaplMr.png", price: 20500})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 10, "name": 'Purple Spotted Fedora Frog', "url": "https://imgur.com/3jVjqdO.png", price: 20500})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 11, "name": 'Orange Spotted Fedora Frog', "url": "https://imgur.com/ZZXRM0Q.png", price: 20500})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 12, "name": 'Green Bowtie Frog', "url": "https://imgur.com/OQtjukH.png", price: 20500})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 13, "name": 'Yellow Bowtie Frog', "url": "https://imgur.com/YANUXWV.png", price: 20500})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 14, "name": 'Blue Bowtie Frog', "url": "https://imgur.com/NaFqy9a.png", price: 25000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 15, "name": 'Purple Bowtie Frog', "url": "https://imgur.com/AypagH0.png", price: 25000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 16, "name": 'Purple Spotted Bowtie Frog', "url": "https://imgur.com/PWins9P.png", price: 25000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 17, "name": 'Orange Spotted Bowtie Frog', "url": "https://imgur.com/Y4RjTki.png", price: 25000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 18, "name": 'Green Flower Frog', "url": "https://imgur.com/FrB6ST1.png", price: 30000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 19, "name": 'Yellow Flower Frog', "url": "https://imgur.com/ay3KfQt.png", price: 30000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 20, "name": 'Blue Flower Frog', "url": "https://imgur.com/m5ht7UK.png", price: 30000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 21, "name": 'Purple Flower Frog', "url": "https://imgur.com/cHu7sMJ.png", price: 30000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 22, "name": 'Purple Spotted Flower Frog', "url": "https://imgur.com/GAwlO3f.png", price: 30500})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 23, "name": 'Orange Spotted Flower Frog', "url": "https://imgur.com/r293GXU.png", price: 30500})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 24, "name": 'Green Monocle Frog', "url": "https://imgur.com/BvxFoPY.png", price: 30500})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 25, "name": 'Yellow Monocle Frog', "url": "https://imgur.com/QPO0Sk0.png", price: 30500})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 26, "name": 'Blue Monocle Frog', "url": "https://imgur.com/j6JSa5a.png", price: 35000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 27, "name": 'Purple Monocle Frog', "url": "https://imgur.com/tUiJOix.png", price: 35000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 28, "name": 'Purple Spotted Monocle Frog', "url": "https://imgur.com/MxxbuXo.png", price: 35000})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 29, "name": 'Orange Spotted Monocle Frog', "url": "https://imgur.com/ARRpRQs.png", price: 35000})

    // All passwords are test
    await users.createTestUser('Test', 'Test', 'test@test.com', 'Testers', 9999999)
    await users.createTestUser('Clark', 'Clock', 'clark@gmail.com', 'Testers', 9999999)
    await users.createTestUser('Jordan', 'Wang', 'jwang203@stevens.edu', 'Testers', 0)
    await users.createTestUser('Johnny', 'Wong', 'jwong9@stevens.edu', 'Testers', 0)
    await users.createTestUser('Sophia', 'Zuo', 'szuo1@stevens.edu', 'Testers', 0)
    await users.createTestUser('Nicholas', 'Soriano', 'nsoriano@stevens.edu', 'Testers', 0)
    await users.createTestUser('Eric', 'Stazzone', 'estazzon@stevens.edu', 'Testers', 0)

    await dbConnection.closeConnection();
}

main()

exports = module.exports = {main}