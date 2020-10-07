import Route from './Route';
import { items, challenges, monsters, interactables, environments, drones, artifacts, survivors, skills, lores } from '../db';
export const itemsRoute = new Route({ route: 'items', target: '', database: [items] }).getRouter();
export const interactablesRoute = new Route({ route: 'interactables', target: '', database: [interactables] }).getRouter();
export const dronesRoute = new Route({ route: 'drones', target: '', database: [drones] }).getRouter();
export const challengesRoute = new Route({ route: 'challenges', target: '', database: [challenges] }).getRouter();
export const monstersRoute = new Route({ route: 'monsters', target: '', database: [monsters] }).getRouter();
export const environmentsRoute = new Route({ route: 'environments', target: '', database: [environments] }).getRouter();
export const survivorsRoute = new Route({ route: 'survivors', database: [survivors] }).getRouter();
export const skillsRoute = new Route({ route: 'skills', target: '', wikiRoute: 'survivors', database: [skills, survivors] }).getRouter();
export const loresRoute = new Route({ route: 'lores', target: '', database: [lores]})

//Route we're working on
export const artifactsRoute = new Route({ route: 'artifacts', target: '', database: [artifacts] }).getRouter();

const routes = [itemsRoute, dronesRoute, interactablesRoute, artifactsRoute, challengesRoute, monstersRoute, environmentsRoute, survivorsRoute, skillsRoute, loresRoute];
export default routes;
