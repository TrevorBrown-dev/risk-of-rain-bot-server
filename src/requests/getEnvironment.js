import jsdom from 'jsdom';
import axios from 'axios';

const { JSDOM } = jsdom;
const formatText = (text) => {
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
    const stage = 'Stage';
    const stageInfo = text.match(/(?<=Stage\n)(.*){1}/);
    const soundtrack = 'Soundtrack';
    const soundtrackInfo = text.match(/(?<=Soundtrack\n)(.*){1}/);
    const quote = 'Lunar Seer Quote';
    const quoteInfo = text.match(/(?<=Lunar Seer Quote\n)(.*){1}/);

    return {
        stage: {
            name: stage,
            value: stageInfo ? stageInfo[0] : '',
        },
        soundtrack: {
            name: soundtrack,
            value: soundtrackInfo ? soundtrackInfo[0] : '',
        },
        quote: {
            name: quote,
            value: quoteInfo ? quoteInfo[0] : '',
        },
    };
};
const getEnvironment = async (environmentName) => {
    const response = await axios.get(`https://riskofrain2.gamepedia.com/${environmentName}`).catch((error) => {
        console.log(error);
    });
    const page = new JSDOM(response.data);
    const { document } = page.window;
    const name = document.querySelector('.infoboxname').textContent;
    let text = document.querySelector('.infoboxtable').textContent.trim();
    const description = document.querySelector('.mw-parser-output p').textContent;
    const image = document.querySelector('.infoboxtable img').src;
    let caption = document.querySelector('.infoboxcaption');
    caption = caption ? caption.textContent.trim().replace(/\n+/, '') : '';
    text = text.replace(name, '');
    text = text.replace(caption, '');
    const body = formatText(text);
    return {
        name,
        caption,
        description,
        image,
        ...body,
    };
};

export default getEnvironment;
