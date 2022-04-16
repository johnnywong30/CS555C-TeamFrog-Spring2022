const users = require('../data/users')
const connection = require('../config/mongoConnection')


const firstName = 'Sophia'
const lastName = 'Zuo'
const email = 'froggers@gmail.com'
const email2 = 'hi@gmail.com'
const frogPassword = 'frog'
const company = 'Bronx Zoo'
const testArgs = [firstName, lastName, email, frogPassword, company]
const testArgs2 = ["hi", 'p', email2, 'fr', 'y']
let testUser = {}
let testUser2 = {}

beforeAll(async () => {
    // Spreads the test arguments into the function 
    // so we don't have to modify the line itself
    // keeps code clear
    testUser = await users.createUser(...testArgs)
    testUser2 = await users.createUser(...testArgs2)
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
    expect(testUser.titles).toStrictEqual(['Tadpole'])
})
test('Test for createUser email', async () => {
    expect(testUser.email).toBe(email)
})
test('Test for createUser title', async () => {
    expect(testUser.title).toBe(0)
})
test('Test for createUser default frog', async () => {
    expect(testUser.frog).toBe(0)
})
test('Test for createUser frogNames default', async() => {
    expect(testUser.frogNames[0]).toStrictEqual({id: 0, name: "Green Frog"})
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
    const challenge = 'Challenge 1'
    const updatedChallenge = await users.updateChallenges(email, challenge)
    expect(updatedChallenge.challenges[0]).toBe(challenge)
})

test('Test for updateCompletedChallenge', async () => {
    const completedChallenge = 'Challenge 1'
    const updatedCompletedChallenge = await users.updateCompletedChallenges(email, completedChallenge)
    expect(updatedCompletedChallenge.completedChallenges[0]).toBe('Challenge 1')
})

test('Test for addFriend', async () => {
    const updatedFriends = await users.updateFriendsList(email, email2)
    expect(updatedFriends.friends[0]).toBe(email2) 
})

test('Test for removeFriend', async () => {
    const updatedFriends = await users.removeFriend(email, email2)
    expect(updatedFriends.friends.length).toBe(0)
})

test('Test for updateMeasurement', async () => {
    const measurement = 'metric'
    const updatedMeasurement = await users.updateMeasurement(email, measurement)
    expect(updatedMeasurement.measurement).toBe(measurement)
})

test('Test for addTitle', async () => {
    const title = 'Beluga Frog'
    const updated = await users.addTitle(email, title)
    expect(updated.titles).toStrictEqual(['Tadpole', title])
})

test('Test for updateTitle', async () => {
    const i = 1
    const updated = await users.updateTitle(email, i)
    expect(updated.title).toBe(i)
})

test('Test for updateFrog', async () => {
    const i = 69
    const updated = await users.updateFrog(email, i)
    expect(updated.frog).toBe(i)
})

test('Test for updateFrogName', async () => {
    const name = 'Jayson Infante'
    const updated = await users.updateFrogName(email, 0, name)
    console.log(updated)
    expect(updated.frogNames[0].name).toBe(name)
})

afterAll(async () => {
    await users.deleteUser(email)
    await users.deleteUser(email2)
    console.log('Cleaned up leftover test data...')
    connection.closeConnection()
})