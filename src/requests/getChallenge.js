import wikiRequest from './WikiRequest';

const formatText = (text) => {
    text = text.replace('Unlock', '**Unlock:**');
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
    text = text.replace(/\(/g, '*(').replace(/\)/g, ')*');
    text = text;
    return text;
};

const getChallenge = async (params) => {
    const document = await wikiRequest(params.target);

    const name = document.querySelector('.infoboxname').textContent;
    let text = document.querySelector('.infoboxtable').textContent.trim();
    text = text.replace(name, '');
    text = formatText(text);
    let description = formatText(document.querySelector('.mw-parser-output p').textContent);
    const image = document.querySelector('.infoboxtable img').src;
    return {
        name,
        image,
        text,
    };
};

export default getChallenge;
