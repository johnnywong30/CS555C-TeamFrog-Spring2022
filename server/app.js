const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')

const configRoutes = require('./routes');
const connection = require('./config/mongoConnection');

const appName = "Frog Nanny"
const port = 8000

app.use(express.json())
app.use(cors())

// **** REACT APP ****
app.use(express.static(path.join(__dirname, '../../', 'client', 'public')));
app.get("/*", (req, res) => res.sendFile(path.resolve(__dirname, '../../', 'client', 'public', 'index.html')));


configRoutes(app);

app.listen(port, async () => {
    //  COLOR FOR TEXT
    const db = await connection.connectToDb();
    console.log('\x1b[32m%s\x1b[0m', `*************************************\n${appName} Application Started Smoothly on port ${port}\n*************************************`)
});

// Process killed callback
process.once('SIGUSR2', async () => {
    //  COLOR FOR TEXT
    await connection.closeConnection();
    console.log('Done!');
    console.log('\x1b[31m%s\x1b[0m', `*************************************\nSTOPPING SERVER\n*************************************`)
})

// sigint catch to run process killed callback
process.on('SIGINT', async () => {
    //stop sigint > emit sigusr2 > reinit sigint
    process.emit('SIGUSR2')
    process.exit()
})

