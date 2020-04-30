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

    //ini untuk delete data jsonnya
    app.delete('/book/:BookName', (req, res) => {

        readFile(data => {

            // add the new user
            const bookTitle = req.params["BookName"];
            console.log(req.params)
            console.log(data.book[0])
            for(var i=0 ; i < data.book.length ; i++){
                if(data.book[i].BookName == bookTitle){
                    delete data.book[i];
                }
            }   

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`book:${bookTitle} removed`);
            });
        },
            true);
    });
};

module.exports = addBook;