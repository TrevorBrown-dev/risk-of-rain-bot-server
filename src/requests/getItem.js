import wikiRequest from './wikiRequest';
const formatText = (text) => {
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
    text = text.replace(/\(/g, '*(');
    text = text.replace(/\)/g, ')*');
    return text;
};

const getItem = async (params) => {
    const document = await wikiRequest(params.target);

    const name = document.querySelector('.infoboxname').textContent;
    const caption = document.querySelector('.infoboxcaption').textContent;

    let description = formatText(document.querySelector('.infoboxdesc').textContent);
    const image = document.querySelector('.infoboxtable img').src;
    return {
        name,
        caption,
        description,
        image,
    };
};

export default getItem;
