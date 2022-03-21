const frogs = require('../data/frogs')
const connection = require('../config/mongoConnection')

const name = 'Starter Frog'
const link = 'https://imgur.com/cScfraF.png'
const testArgs = [name, link]
beforeAll(async () => {
    testFrog = await frogs.createFrog(...testArgs)
})

test('Test for createFrog name', async() => {
    expect(testFrog.name).toBe(name)
})

test('Test for createFrog link', async() => {
    expect(testFrog.link).toBe(link)
})

test('Test for getFrogs', async() => {
    const froglist = await frogs.getFrogs()
    expect(froglist.length).toBeGreaterThan(0)
})

test('Test for updateFrogName', async() => {
    const newFrogName = 'REEE'
    const updatedfrog = await frogs.updateFrogName(name, newFrogName)
    expect(updatedfrog.name).toBe(newFrogName)
})

test ('Test for updateFrogLink', async() => {
    const newFrogLink = 'REEE'
    const updatedfrog = await frogs.updateFrogLink(name, newFrogLink)
    expect(updatedfrog.link).toBe(newFrogLink)
})

afterAll(async () => {
    await frogs.deleteFrog(name)
    console.log('Cleaned up leftover test data...')
    connection.closeConnection()
})