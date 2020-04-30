const booklist = (app, fs) => {
    const dataPath = 'data.json'

    //ini untuk read data jsonnya
    app.get('/listbook', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if(err){
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
}

module.exports = booklist;