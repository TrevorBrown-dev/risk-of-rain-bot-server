import wikiRequest from './wikiRequest';

const formatText = (text, unlockLink) => {
    const props = [];
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');

    const healthInfo = text.match(/(?<=Health\n)(.*){1}/);
    const health = 'Health';

    const damageInfo = text.match(/(?<=Damage\n)(.*){1}/);
    const damage = 'Damage';

    const speedInfo = text.match(/(?<=Speed\n)(.*){1}/);
    const speed = 'Speed';
    
    const healthRegenInfo = text.match(/(?<=Health Regen\n)(.*){1}/);
    const healthRegen = 'Health Regen';
    
    const armorInfo = text.match(/(?<=Armor\n)(.*){1}/);
    const armor = 'Armor';
    
    const unlockInfo = text.match(/(?<=Unlock\n)(.*){1}/);
    const unlock = 'Unlock';
    
    const umbraTitleInfo = text.match(/(?<=Umbra Title\n\n)(.*){1}/);
    const umbraTitle = 'Umbra Title';
    
    const endingPhraseInfo = text.match(/(?<=Ending Phrase\n\n)(.*){1}/);
    const endingPhrase = 'Ending Phrase';

    
    if (healthInfo) props.push({ name: health, value: healthInfo[0] });
    if (damageInfo) props.push({ name: damage, value: damageInfo[0] });
    if (speedInfo) props.push({ name: speed, value: speedInfo[0] });
    if (healthRegenInfo) props.push({ name: healthRegen, value: healthRegenInfo[0] });
    if (armorInfo) props.push({ name: armor, value: armorInfo[0] });
    if (unlockInfo) props.push({
        name: unlock, value: `[${unlockInfo[0]}](${`https://riskofrain2.gamepedia.com${unlockLink}`})`
    });
    if (umbraTitleInfo) props.push({ name: umbraTitle, value: `*${umbraTitleInfo[0]}*` });
    if (endingPhraseInfo) props.push({ name: endingPhrase, value: `*${endingPhraseInfo[0]}*` });

    return props;   
};
const getSurvivor = async (params) => {
    const document = await wikiRequest(params.target);

    const name = document.querySelector('.infoboxname').textContent;
    const image = document.querySelector('.infoboxtable img').src;
    const description = document.querySelector('.infoboxdesc').textContent;
    const table = document.querySelector('.infoboxtable')
    let unlockLink = table.querySelector('a[title]')
    unlockLink = (unlockLink) ? unlockLink.href : '';
    let text = table.textContent.trim();
    text = text.replace(name, '');
    text = text.replace(/\(/g, '*(');
    text = text.replace(/\)/g, ')*');
    const body = formatText(text, unlockLink);

    return {
        name,
        description,
        image,
        body,
    };
};

export default getSurvivor;
