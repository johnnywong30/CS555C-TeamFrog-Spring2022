const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session');

const configRoutes = require('./routes');
const connection = require('./config/mongoConnection');

const appName = "Frog Nanny"
const port = 8000

const secret = 'BS6e4a9aC6Fm8hK4jssTFCSXdYh94SaTsEiny14MSl5ERAvlbODzMSqoXCVWgIFYoyi47sTYVg+MFBSAnWnwtzRvdHja7N6qgsLLJ4pyxw3QzEcv9vstlg8tD6E/bTz2JXj7q8w3qhDCdEsrBWrn4i9sGcKbFAM7aNcmsT86bP3+tJIbuv11tLwKfWzg5oFcY8pxNmJ8wT2q+vEzl5iJPx81P/Advj/+E3dnMk5xbKFQubZhIcqW7vABHif/D+zuz4iC4xOAE/oB2ILfsUW7C0oH7AjiG+93XvdhgxPZjqJgff8/Gq+rsg+PptJQAAjaS0+Rzg29LO+eF31nyKuerQ=='

app.use(express.json())
app.use(cors())
app.use(cookieParser());

app.use(session({
    name: 'AuthCookie',
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false
    }
}))


configRoutes(app);

// **** REACT APP ****
app.use(express.static(path.join(__dirname, '../../', 'client', 'public')));
app.get("/*", (req, res) => res.sendFile(path.resolve(__dirname, '../../', 'client', 'public', 'index.html')));



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

