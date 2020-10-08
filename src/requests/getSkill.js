import wikiRequest from './wikiRequest';
const getSkill = async (params) => {
    const document = await wikiRequest(params.target);

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
                    value: row
                        .querySelector('td')
                        .textContent.replace(/\[ .* \]/, ' '),
                });
            }
        }
        let image = skillTable.querySelector('.skillimage img');
        if (image) image = image.src;

        pageContent.skills.push({
            image,
            heading: skillTable
                .querySelector('th')
                .textContent.replace(/\n+/, ''),
            skillRows,
        });
    }
    return pageContent;
};

export default getSkill;
