const listRouter = require('./list');
const addRouter = require('./createbook');
const deleteRouter = require('./delete')

const appRouter = (app, fs) =>{

    app.get('/', (req, res) => {
        res.send('Success');
    });

    listRouter(app, fs);
    addRouter(app,fs);
    deleteRouter(app,fs);
   
}
module.exports = appRouter;