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
    
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 0, "name": 'Green Frog', "url": "https://imgur.com/cScfraF.png", price: 0, "statusUrls": {
        "healthy": "https://imgur.com/cScfraF.png",
        "thirsty": 'https://imgur.com/f3svxvI.png',
        "dying": 'https://imgur.com/3dC8mcg.png'
    }})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 1, "name": 'Yellow Frog', "url": "https://imgur.com/p5iRh9X.png", price: 500, "statusUrls": {
        "healthy": "https://imgur.com/p5iRh9X.png",
        "thirsty": 'https://imgur.com/f3svxvI.png',
        "dying": 'https://imgur.com/3dC8mcg.png'
    }})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 2, "name": 'Blue Frog', "url": "https://imgur.com/Iyi0NpO.png", price: 2000, "statusUrls": {
        "healthy": "https://imgur.com/Iyi0NpO.png",
        "thirsty": 'https://imgur.com/f3svxvI.png',
        "dying": 'https://imgur.com/3dC8mcg.png'
    }})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 3, "name": 'Purple Frog', "url": "https://imgur.com/vxiufc8.png", price: 5000, "statusUrls": {
        "healthy": "https://imgur.com/vxiufc8.png",
        "thirsty": 'https://imgur.com/f3svxvI.png',
        "dying": 'https://imgur.com/3dC8mcg.png'
    }})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 4, "name": 'Purple Spotted Frog', "url": "https://imgur.com/BoMeidq.png", price: 10000, "statusUrls": {
        "healthy": "https://imgur.com/BoMeidq.png",
        "thirsty": 'https://imgur.com/f3svxvI.png',
        "dying": 'https://imgur.com/3dC8mcg.png'
    }})
    await frogCollection.insertOne({"_id": ObjectId(), "frogId": 5, "name": 'Orange Spotted Frog', "url": "https://imgur.com/XchqGtg.png", price: 20000, "statusUrls": {
        "healthy": "https://imgur.com/XchqGtg.png",
        "thirsty": 'https://imgur.com/f3svxvI.png',
        "dying": 'https://imgur.com/3dC8mcg.png'
    }})

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