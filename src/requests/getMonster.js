import wikiRequest from './wikiRequest';

const getMonster = async (params) => {
    const document = await wikiRequest(params.target);

    const name = document.querySelector('.infoboxname').textContent;
    const description = document.querySelector('.mw-parser-output p')
        .textContent;
    const image = document.querySelector('.infoboxtable img').src;

    let caption = document.querySelector('.infoboxcaption');
    caption = caption ? caption.textContent.trim().replace(/\n+/, '') : '';

    const table = document.querySelector('.infoboxtable');

    const stats = [];
    let rows = table.querySelectorAll('tr');

    for (let i = caption ? 3 : 2; i < rows.length; i++) {
        let cells = rows[i].querySelectorAll('td');
        stats.push({
            name: cells[0].textContent,
            value: cells[1].textContent
                .replace(/\(/g, '*(')
                .replace(/\)/g, ')*'),
        });
    }
    return {
        name,
        image,
        caption,
        description,
        stats,
    };
};

export default getMonster;
