/*Might be needed */
import express from 'express';
import spellCheck from '../helpers/spellCheck';
import fetchData from '../requests/fetchData';
class Route {
    constructor(params) {
        const { route, database } = params;
        const router = express.Router();
        router.get(`/${route}`, (req, res) => {
            res.send(database);
        });

        router.get(`/${route}/:name`, (req, res) => {
            //spell check gets the proper url name for us for the get request to the risk of rain wiki
            //only need the name of the route might remove the .name later
            params.target = spellCheck(req.params.name, database[0]).name;
            if (params.wikiRoute) params.target = spellCheck(req.params.name, database[1]).name;
            if (req.query.singleSkill === 'true') {
                const reroute = spellCheck(req.params.name, database[0]);
                params.target = spellCheck(reroute.name, database[1]).name;
                params.reroute = reroute.name;
            }
            //Fetch data is pretty much a general form of our get functions in the client, we check what function in fetch data we need to execute based
            //on the route
            fetchData(params).then((data) => {
                res.send(data);
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
