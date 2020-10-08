import wikiRequest from './wikiRequest';

const getLore = async (params) => {
    const document = await wikiRequest(params.target);
    const lore = document.querySelector('.lore');
    return ({
        name: params.target,
        value: lore.textContent
    });
};

export default getLore;
