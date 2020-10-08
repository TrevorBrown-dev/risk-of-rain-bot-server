import jsdom from 'jsdom';
import wikiRequest from './wikiRequest';

const formatText = (text) => {
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
    text = text.replace(/\(/g, '*(');
    text = text.replace(/\)/g, ')*');
    return text;
};

const getInteractable = async (params) => {
    const document = await wikiRequest(params.target);

    const name = document.querySelector('.firstHeading').textContent;
    let description = formatText(
        document.querySelector('.mw-parser-output p').textContent
    );
    let image = document.querySelector('.thumbinner img');
    if (!image) {
        image = document.querySelector('.image img').src;
    } else image = image.src;

    return {
        name,
        description,
        image,
    };
};

export default getInteractable;
