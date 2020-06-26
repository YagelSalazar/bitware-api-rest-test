import express from 'express';
import bodyParser from 'body-parser';
import clietRoutes from './routes/client'

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type: application/json');
    next();
});

app.use('/NutriNET/Cliente', clietRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})