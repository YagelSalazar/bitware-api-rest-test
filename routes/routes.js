const userRoutes = require('./clients');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('This is a code made for Yagel to e-Bitware as a test');
    });

    userRoutes(app, fs);

};

module.exports = appRouter;