import getArtifact from './getArtifact';
import { getDrone, getEnvironment, getInteractable, getItem, getMonster, getSurvivor, getChallenge, getSkill } from './index';
const fetchData = async (params) => {
    switch (params.route) {
        case 'items':
            return await getItem(params);
        case 'interactables':
            return await getInteractable(params);
        case 'monsters':
            return await getMonster(params);
        case 'survivors':
            return await getSurvivor(params);
        case 'drones':
            return await getDrone(params);
        case 'environments':
            return await getEnvironment(params);
        case 'challenges':
            return await getChallenge(params);
        case 'skills':
            return await getSkill(params);
        case 'artifacts':
            return await getArtifact(params);
    }
};

export default fetchData;
