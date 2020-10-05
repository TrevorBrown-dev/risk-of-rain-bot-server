/*Might be needed */
import express from 'express';
import spellCheck from '../helpers/spellCheck';
import fetchData from '../requests/fetchData';
class Route {
    constructor(param, database) {
        const router = express.Router();
        router.get(`/${param}`, (req, res) => {
            res.send(database);
        });
        router.get(`/${param}/:name`, (req, res) => {
            const item = spellCheck(req.params.name, database);
            //Fetch data is pretty much a general form of our get functions in the client, we check what function in fetch data we need to execute based
            //on the param
            fetchData(param, item.name).then((data) => {
                const response = { ...item, ...data };
                res.send(response);
            });
            //We want to also send the parsed html stuff we need
        });

        this._router = router;
    }

    getRouter() {
        return this._router;
    }
}
export default Route;
