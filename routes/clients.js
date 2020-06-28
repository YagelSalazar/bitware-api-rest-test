
const userRoutes = (app, fs) => {

    const dataPath = './data/clients.json';

    // Helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                res.send({ Cve_Error: err, Cve_Mensaje: "Algo salio mal" });
            }
            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {
        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                res.send({ Cve_Error: err, Cve_Mensaje: "Algo salio mal" });
            }
            callback();
        });
    };

    // Get all clients
    app.get('/NutriNET/Cliente', async (req, res) => {
        await fs.readFile(dataPath, 'utf8', (err, data) => {
            res.send(JSON.parse(data));
        });
    });

    // Get a client by ID
    app.get('/NutriNET/Cliente/:id', async (req, res) => {
        await readFile(data => {
            const userId = req.params["id"];
            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(data[userId]);
            });
        },
            true);
    });

    // Create client
    app.post('/NutriNET/Cliente', async (req, res) => {

        await readFile(data => {
            const newUserId = Object.keys(data).length + 1;
            // add the new client
            data[newUserId.toString()] = req.body;
            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send({CVE_MENSAJE: "Se ha agregado el cliente",  client: req.body });
            });
        },
            true);
    });


    // Update client
    app.put('/NutriNET/Cliente/:id', async (req, res) => {
        await readFile(data => {
            // add the new client
            const userId = req.params["id"];
            data[userId] = req.body;
            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send({CVE_MENSAJE: `Client id:${userId} updated`,  client: req.body });
            });
        },
            true);
    });


    // Delete by ID
    app.delete('/NutriNET/Cliente/:id', async (req, res) => {
        await readFile(data => {
            const userId = req.params["id"];
            delete data[userId];
            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send({CVE_MENSAJE: `Client id:${userId} removed`,  client: req.body });
            });
        },
            true);
    });
};

module.exports = userRoutes;