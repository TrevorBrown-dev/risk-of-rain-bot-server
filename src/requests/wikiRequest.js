import axios from 'axios';
import jsdom from 'jsdom';
const wikiRequest = async (route) => {
    const response = await axios.get(`https://riskofrain2.gamepedia.com/${route}`).catch((error) => {
        console.log(`Error accessing url: ${error.config.url}`);
    });
    const page = new jsdom.JSDOM(response.data);
    return page.window.document;
};

export default wikiRequest;
