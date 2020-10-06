import jsdom from 'jsdom';
import axios from 'axios';
const { JSDOM } = jsdom;

const formatText = (text) => {
    text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
    text = text.replace(/\(/g, '*(');
    text = text.replace(/\)/g, ')*');
    return text;
};

const getInteractable = async (params) => {
    const response = await axios
        .get(`https://riskofrain2.gamepedia.com/${params.target}`)
        .catch((error) => {
            // console.log(error);
        });
    const page = new JSDOM(response.data);
    const { document } = page.window;

    const name = document.querySelector('.firstHeading').textContent;
    let description = formatText(
        document.querySelector('.mw-parser-output p').textContent
    );
    let image = '';
    if (!interactableName.includes('Launch Pads'))
        image = document.querySelector('.thumbinner img').src;
    return {
        name,
        description,
        image,
    };
};

export default getInteractable;
