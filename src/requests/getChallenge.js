import jsdom from 'jsdom';
import axios from 'axios';
const { JSDOM } = jsdom;

const formatText = (text) => {
    text = text.replace('Unlock', '**Unlock:**');
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
    text = text.replace(/\(/g, '*(');
    text = text.replace(/\)/g, ')*');
    return text;
};

const getChallenge = async ({ params }) => {
    //We assume the user did !rchallenge <term>

    const response = await axios.get(`https://riskofrain2.gamepedia.com/${params.target}`).catch((error) => {
        console.log(error);
    });
    const page = new JSDOM(response.data);
    const { document } = page.window;
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
