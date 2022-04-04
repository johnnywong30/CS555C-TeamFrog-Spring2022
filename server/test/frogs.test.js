const frogs = require('../data/frogs')
const connection = require('../config/mongoConnection')

const frogId = 33
const name = 'Starter Frog'
const url = 'https://imgur.com/cScfraF.png'
const price = 69
const testArgs = [frogId, name, url, price]
let testFrog = {}

beforeAll(async () => {
    testFrog = await frogs.createFrog(...testArgs)
})

test('Test for createFrog name', async() => {
    expect(testFrog.name).toBe(name)
})

test('Test for createFrog url', async() => {
    expect(testFrog.url).toBe(url)
})

test('Test for createFrog price', async() => {
    expect(testFrog.price).toBe(price)
})

test('Test for getFrogs', async() => {
    const froglist = await frogs.getFrogs()
    expect(froglist.length).toBeGreaterThan(0)
})

test('Test for getFrogPrice', async() => {
    const frogPrice = await frogs.getFrogPrice(frogId)
    expect(frogPrice).toBe(price)
})

test('Test for updateFrogName', async() => {
    const newFrogName = 'REEE'
    const updatedfrog = await frogs.updateFrogName(name, newFrogName)
    expect(updatedfrog.name).toBe(newFrogName)
})

test ('Test for updateFrogLink', async() => {
    const newFrogName = 'REEE'
    const newFrogUrl = 'REEE'
    const updatedfrog = await frogs.updateFrogLink(newFrogName, newFrogUrl)
    expect(updatedfrog.url).toBe(newFrogUrl)
})

afterAll(async () => {
    const newFrogName = 'REEE'
    await frogs.deleteFrog(newFrogName)
    console.log('Cleaned up leftover test data...')
    connection.closeConnection()
})