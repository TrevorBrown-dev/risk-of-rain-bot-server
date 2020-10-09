import wikiRequest from './wikiRequest';

const getChallenge = async (params) => {
    const document = await wikiRequest(params.target);

    const name = document.querySelector('.infoboxname').textContent;
    const table = document.querySelector('.infoboxtable');
    const rows = table.querySelectorAll('tr');
    const title = rows[0].textContent.trim().replace(/\n+/g, '');
    const description = rows[2].querySelector('td').textContent;
    const image = rows[1].querySelector('img').src;
    const unlock = { name: 'Unlocks', value: rows[3].querySelectorAll('td')[1].textContent.replace(/\n+/g, '') };
    
    
    return {
        title,
        image,
        description,
        unlock,
    };
};

export default getChallenge;
