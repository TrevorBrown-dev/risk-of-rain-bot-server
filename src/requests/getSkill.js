import jsdom from 'jsdom';
import axios from 'axios';
import e from 'express';

const { JSDOM } = jsdom;
/**
 *
 * @param {String} text A string containing all of the text related to a skill
 */
const makeSkill = (text) => {
    if (!text) return text;
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
    text = text.replace(/\n/, '');
    return text;
};

const getSkill = async (params) => {
    const response = await axios
        .get(`https://riskofrain2.gamepedia.com/${params.target}`)
        .catch((error) => {
            console.log(`Error accessing url: ${error.config.url}`);
            return {};
        });
    const page = new JSDOM(response.data);
    const { document } = page.window;
    let count = 1;
    let skills = [];

    let skillbox = document.querySelector(
        `.skillbox:nth-last-of-type(${count})`
    );
    while (skillbox) {
        let prop = {
            row: [],
        };
        skillbox = document.querySelector(
            `.skillbox:nth-last-of-type(${count})`
        );

        if (skillbox) {
            let sCount = 1;
            let skill = skillbox.querySelector(
                `.skill:nth-last-of-type(${sCount})`
            );
            while (skill) {
                skill = skillbox.querySelector(
                    `.skill:nth-last-of-type(${sCount})`
                );
                if (skill) {
                    prop.skillName = skill.querySelector('th').textContent;
                    prop.skillImage = skill.querySelector('img').src;

                    let rCount = 1;
                    let row = skill.querySelector(
                        `tr:nth-last-of-type(${sCount})`
                    );

                    while (row) {
                        row = skill.querySelector(
                            `tr:nth-last-of-type(${rCount})`
                        );
                        //TODO I'm so close to figuring out how to serialize these tables
                        if (row) {
                            console.log(row.outerHTML);
                            prop.row.push({
                                // title: row.querySelector('th').textContent,
                                // text: row.querySelector('td').textContent,
                            });
                        }

                        rcount++;
                    }

                    // console.log(skill.querySelector('img').src);

                    skills.unshift(prop);
                }
                sCount++;
            }
            count++;
        }
    }

    // for (let skill of skills) {
    //     skill.text = makeSkill(skill.text);
    // }
    // console.log(skills[2]);

    // const body = formatText(text);

    return skills;
};

export default getSkill;
