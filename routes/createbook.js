const addBook = (app, fs) => {
    const dataPath = 'data.json';


    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    //ini untuk create data jsonnya
    app.post('/createBook', (req, res) => {

        readFile(data => {

            const variBaru = data.book.length ;
            
            data.book[variBaru.toString()] = req.body;
            console.log(data)
            
            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new user added');
            });
        },
            true);
    });
};

module.exports = addBook;