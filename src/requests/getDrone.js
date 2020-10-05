import jsdom from 'jsdom';
import axios from 'axios';

const { JSDOM } = jsdom;

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
    const cost = 'Base Cost';
    const costInfo = text.match(/(?<=Base Cost\n)(.*){1}/);

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
        cost: {
            name: cost,
            value: costInfo ? costInfo[0] : '',
        },
    };
};

const getDrone = async (droneName) => {
    const response = await axios.get(`https://riskofrain2.gamepedia.com/${droneName}`).catch((error) => {
        console.log(error);
    });
    const page = new JSDOM(response.data);
    const { document } = page.window;
    const name = document.querySelector('.infoboxname').textContent;
    let text = document.querySelector('.infoboxtable').textContent.trim();
    const description = document.querySelector('.mw-parser-output p').textContent;
    text = text.replace(name, '');
    text = text.replace(/\(/g, '*(');
    text = text.replace(/\)/g, ')*');
    const body = formatText(text);
    const image = document.querySelector('.infoboxtable img').src;
    return {
        name,
        description,
        image,
        ...body,
    };
};

export default getDrone;
