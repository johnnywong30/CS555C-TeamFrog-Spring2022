const users = require('../data/users')
const connection = require('../config/mongoConnection')


const firstName = 'Sophia'
const lastName = 'Zuo'
const email = 'frog@gmail.com'
const frogPassword = 'frog'
const company = 'Bronx Zoo'
const testArgs = [firstName, lastName, email, frogPassword, company]
let testUser = {}

beforeAll(async () => {
    // Spreads the test arguments into the function 
    // so we don't have to modify the line itself
    // keeps code clear
    testUser = await users.createUser(...testArgs)
})

test('Test for createUser firstName', async () => {
    expect(testUser.firstName).toBe(firstName)
})

test('Test for createUser lastName', async () => {
    expect(testUser.lastName).toBe(lastName)
})
test('Test for createUser email', async () => {
    expect(testUser.email).toBe(email)
})
test('Test for createUser password', async () => {
    expect(testUser.password).toStrictEqual('thats not very froggers of you')
})
test('Test for createUser company', async () => {
    expect(testUser.company).toBe(company)
})
test('Test for createUser ownedFrogs', async () => {
    expect(testUser.ownedFrogs).toStrictEqual([0])
})
test('Test for createUser friends', async () => {
    expect(testUser.friends).toStrictEqual([])
})
test('Test for createUser money', async () => {
    expect(testUser.money).toBe(0)
})
test('Test for createUser prestige', async () => {
    expect(testUser.prestige).toBe(0)
})
test('Test for createUser level', async () => {
    expect(testUser.level).toBe(1)
})
test('Test for createUser waterHistory', async () => {
    expect(testUser.waterHistory).toStrictEqual([])
})
test('Test for createUser challenges', async () => {
    expect(testUser.challenges).toStrictEqual([])
})
test('Test for createUser completedChallenges', async () => {
    expect(testUser.completedChallenges).toStrictEqual([])
})
test('Test for createUser measurement', async () => {
    expect(testUser.measurement).toStrictEqual('imperial')
})
test('Test for createUser titles', async () => {
    expect(testUser.titles).toStrictEqual([0])
})
test('Test for createUser email', async () => {
    expect(testUser.email).toBe(email)
})
test('Test for createUser title', async () => {
    expect(testUser.title).toBe(0)
})

test('Test for getUser', async () => {
    const user = await users.getUser(email)
    const { password, successMsg, ...equal } = testUser
    expect(user).toStrictEqual([{...equal, password: frogPassword}])
})

test('Test for getUsers', async () => {
    const userList = await users.getUsers()
    expect(userList.length).toBeGreaterThan(0)
})

test('Test for updateFirstName', async () => {
    const newFirstName = 'Reee'
    const updatedFrogger = await users.updateFirstName(email, newFirstName)
    expect(updatedFrogger.firstName).toBe(newFirstName)
})

test('Test for updateLastName', async () => {
    const newLastName = 'Reee'
    const updatedFrogger = await users.updateLastName(email, newLastName)
    expect(updatedFrogger.lastName).toBe(newLastName)
})

test('Test for updateCompany', async () => {
    const newCompany = 'Reee'
    const updatedFrogger = await users.updateCompany(email, newCompany)
    expect(updatedFrogger.company).toBe(newCompany)
})

test('Test for updateChallenge', async () => {
    const challenge = 'challenge1'
    const updatedChallenge = await users.updateChallenges(email, challenge)
    expect(updatedChallenge.challenges[0]).toBe(challenge)
})

test('Test for updateMeasurement', async () => {
    const measurement = 'metric'
    const updatedMeasurement = await users.updateMeasurement(email, measurement)
    expect(updatedMeasurement.measurement).toBe(measurement)
})

afterAll(async () => {
    await users.deleteUser(email)
    console.log('Cleaned up leftover test data...')
    connection.closeConnection()
})