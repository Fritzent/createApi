const listRouter = require('./list');

const appRouter = (app, fs) =>{

    app.get('/', (req, res) => {
        res.send('Success');
    });

    listRouter(app, fs);
   
}
module.exports = appRouter;