import jsdom from 'jsdom';
import axios from 'axios';
const { JSDOM } = jsdom;
const getSkill = async (params) => {
    // console.log(params);
    const response = await axios.get(`https://riskofrain2.gamepedia.com/${params.target}`).catch((error) => {
        console.log(`Error accessing url: ${error.config.url}`);
        return {};
    });
    const page = new JSDOM(response.data);
    const { document } = page.window;
    const skillTables = document.querySelectorAll('table.wikitable.skill');

    const pageContent = {
        reroute: params.reroute,
        survivor: params.target,
        skills: [],
    };
    for (let skillTable of skillTables) {
        const rows = skillTable.querySelectorAll('tr');
        const skillRows = [];
        for (let row of rows) {
            if (row.querySelector('th.skillrow')) {
                skillRows.push({
                    name: row.querySelector('th').textContent,
                    value: row.querySelector('td').textContent.replace(/\[ .* \]/, ' '),
                });
            }
        }
        let image = skillTable.querySelector('.skillimage img');
        if (image) image = image.src;

        pageContent.skills.push({
            image,
            heading: skillTable.querySelector('th').textContent.replace(/\n+/, ''),
            skillRows,
        });
    }
    return pageContent;
};

export default getSkill;
