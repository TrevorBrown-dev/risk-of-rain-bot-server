import jsdom from 'jsdom';
import axios from 'axios';
import e from 'express';

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
    };
};

const getSkill = async (params) => {
    const response = await axios.get(`https://riskofrain2.gamepedia.com/${params.target.name}`).catch((error) => {
        console.log(`Error accessing url: ${error.config.url}`);
        return {};
        // console.log(error);
    });
    const page = new JSDOM(response.data);
    const { document } = page.window;
    let count = 1;
    let skills = [];
    let skillbox = document.querySelector(`.skillbox:nth-last-of-type(${count})`);
    while (skillbox) {
        skillbox = document.querySelector(`.skillbox:nth-last-of-type(${count})`);

        if (skillbox) {
            let sCount = 1;
            let skill = skillbox.querySelector(`.skill:nth-last-of-type(${sCount})`);
            while (skill) {
                skill = skillbox.querySelector(`.skill:nth-last-of-type(${sCount})`);
                if (skill) {
                    skills.unshift({ skillText: skill.textContent });
                }
                sCount++;
            }

            count++;
        }
    }
    // console.log(skills[2]);

    // const body = formatText(text);

    return skills;
};

export default getSkill;
