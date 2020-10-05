import Route from './Route';
import { items, challenges, monsters, interactables, environments, drones, artifacts, survivors } from '../db';
export const itemsRoute = new Route('items', items).getRouter();
export const interactablesRoute = new Route('interactables', interactables).getRouter();
export const dronesRoute = new Route('drones', drones).getRouter();
export const artifactsRoute = new Route('artifacts', artifacts).getRouter();
export const challengesRoute = new Route('challenges', challenges).getRouter();
export const monstersRoute = new Route('monsters', monsters).getRouter();
export const environmentsRoute = new Route('environments', environments).getRouter();
export const survivorsRoute = new Route('survivors', survivors).getRouter();

const routes = [itemsRoute, dronesRoute, interactablesRoute, artifactsRoute, challengesRoute, monstersRoute, environmentsRoute, survivorsRoute];
export default routes;
