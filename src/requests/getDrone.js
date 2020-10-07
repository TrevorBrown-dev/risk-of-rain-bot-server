import wikiRequest from './WikiRequest';

const getDrone = async (params) => {
    const document = await wikiRequest(params.target);

    const name = document.querySelector('.infoboxname').textContent;
    const description = document.querySelector('.mw-parser-output p').textContent;
    const image = document.querySelector('.infoboxtable img').src;
    const table = document.querySelector('.infoboxtable');

    const stats = [];
    let rows = table.querySelectorAll('tr');
    for (let i = 2; i < rows.length; i++) {
        let cells = rows[i].querySelectorAll('td');
        {
            stats.push({
                name: cells[0].textContent,
                value: cells[1].textContent.replace(/\(/g, '*(').replace(/\)/g, ')*'),
            });
        }
    }

    return {
        name,
        description,
        image,
        stats,
    };
};

export default getDrone;
