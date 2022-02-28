const users = require('../data/users')
const water = require('../data/water')
const moment = require('moment')
const connection = require('../config/mongoConnection')
const { ObjectId } = require('mongodb')
const { getAllWater } = require('../data/water')


const firstName = 'Sophia'
const lastName = 'Zuo'
const email = 'froggers@gmail.com'
const frogPassword = 'frog'
const company = 'Bronx Zoo'
const testArgs = [firstName, lastName, email, frogPassword, company]
let testUser = {}

const id = '621cff900000000000000000'
const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
const amount = 4


beforeAll(async () => {
    // Spreads the test arguments into the function 
    // so we don't have to modify the line itself
    // keeps code clear
    testUser = await users.createUser(...testArgs)
})

// async insertWater(_email, {id, timestamp, amount} ) {

test('Test for insertWater', async () => {
    const user = await water.insertWater(email, {id, timestamp, amount})
    const expected = [{
        _id: ObjectId(id),
        timestamp: timestamp,
        amount: amount
    }]
    expect(user.waterHistory).toStrictEqual(expected)
})

// async getWater(_email, _id) {
test('Test for getWater', async () => {
    const waterObj = await water.getWater(email, id)
    const expected = {
        _id: ObjectId(id),
        timestamp: timestamp,
        amount: amount
    }
    expect(waterObj).toStrictEqual(expected)
})

// async getAllWater(_email) {
test('Test for getAllWater', async () => {
    let times = amount
    while (times > 0) {
        const thisTimeStamp = moment().format('MMMM Do YYYY, h:mm:ss a')
        await water.insertWater(email, {timestamp: thisTimeStamp, amount: times})
        times--;
    }
    const waterHistory = await getAllWater(email)
    expect(waterHistory.length).toBe(5)
})

// async deleteWater(_email, _id) {
test('Test for deleteWater', async () => {
    const deleted = await water.deleteWater(email, id)
    const waterHistory = await getAllWater(email)
    expect(waterHistory.length).toBe(4)
    expect(deleted.successMsg).toBe('Successfully deleted water entry')
})

afterAll(async () => {
    await users.deleteUser(email)
    console.log('Cleaned up leftover test data...')
    connection.closeConnection()
})