import { config } from 'dotenv';
import express from 'express';
import path from 'path';
const app = express();
config();
const __dirname = path.resolve();
const port = 3000;

const appName = process.env.APP_NAME || 'MyApp';

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by ${appName}`);
});

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});