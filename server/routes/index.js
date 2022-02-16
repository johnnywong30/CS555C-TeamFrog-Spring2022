const authRoutes = require('./auth')
const path = require('path')

const routes = (app) => {
    app.use('/auth', authRoutes);
    
    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Route not found' });
    });
};

module.exports = routes;