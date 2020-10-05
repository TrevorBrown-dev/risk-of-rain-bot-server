import '@babel/polyfill';
import express from 'express';
import routes from './routes';
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 5000;
app.use(routes);
app.listen(5000, () => {
    console.log(`Risk of Rain 2 database is listening on https://localhost:${PORT}`);
});
