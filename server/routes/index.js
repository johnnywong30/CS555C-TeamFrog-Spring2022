const authRoutes = require('./auth')
const userRoutes = require('./user')
const frogRoutes = require('./frog')
const path = require('path')

const routes = (app) => {
    
    app.use('/auth', authRoutes);
    app.use('/user', userRoutes);
    app.use('/frog', frogRoutes)
    
    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Route not found' });
    });
};

module.exports = routes;