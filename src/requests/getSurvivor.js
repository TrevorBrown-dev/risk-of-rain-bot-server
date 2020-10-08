import wikiRequest from './wikiRequest';

const formatText = (text) => {
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
    const health = 'Health';
    const healthInfo = text.match(/(?<=Health\n)(.*){1}/);
    const damage = 'Damage';
    const damageInfo = text.match(/(?<=Damage\n)(.*){1}/);
    const speed = 'Speed';
    const speedInfo = text.match(/(?<=Speed\n)(.*){1}/);
    const healthRegen = 'Health Regen';
    const healthRegenInfo = text.match(/(?<=Health Regen\n)(.*){1}/);
    const armor = 'Armor';
    const armorInfo = text.match(/(?<=Armor\n)(.*){1}/);
    const unlock = 'Unlock';
    const unlockInfo = text.match(/(?<=Unlock\n)(.*){1}/);
    const umbraTitle = 'Umbra Title';
    const umbraTitleInfo = text.match(/(?<=Umbra Title\n\n)(.*){1}/);
    const endingPhrase = 'Ending Phrase';
    const endingPhraseInfo = text.match(/(?<=Ending Phrase\n\n)(.*){1}/);

    return {
        health: {
            name: health,
            value: healthInfo ? healthInfo[0] : '',
        },
        damage: {
            name: damage,
            value: damageInfo ? damageInfo[0] : '',
        },
        speed: {
            name: speed,
            value: speedInfo ? speedInfo[0] : '',
        },
        healthRegen: {
            name: healthRegen,
            value: healthRegenInfo ? healthRegenInfo[0] : '',
        },
        armor: {
            name: armor,
            value: armorInfo ? armorInfo[0] : '',
        },
        unlock: {
            name: unlock,
            value: unlockInfo ? unlockInfo[0] : '',
        },
        umbraTitle: {
            name: umbraTitle,
            value: umbraTitleInfo ? umbraTitleInfo[0] : '',
        },
        endingPhrase: {
            name: endingPhrase,
            value: endingPhraseInfo ? endingPhraseInfo[0] : '',
        },
    };
};
const getSurvivor = async (params) => {
    const document = await wikiRequest(params.target);

    const name = document.querySelector('.infoboxname').textContent;
    const image = document.querySelector('.infoboxtable img').src;
    const description = document.querySelector('.infoboxdesc').textContent;
    let text = document.querySelector('.infoboxtable').textContent.trim();
    text = text.replace(name, '');
    text = text.replace(/\(/g, '*(');
    text = text.replace(/\)/g, ')*');
    const body = formatText(text);

    return {
        name,
        description,
        image,
        ...body,
    };
};

export default getSurvivor;
