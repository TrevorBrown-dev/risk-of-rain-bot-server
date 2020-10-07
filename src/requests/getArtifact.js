import wikiRequest from './WikiRequest';

const formatText = (text) => {
    text = text.trim();
    text = text.replace(/\s/g, '');
    let code = '';
    code += `\`${text[0]}\` \`${text[1]}\` \`${text[2]}\`\n`;
    code += `\`${text[3]}\` \`${text[4]}\` \`${text[5]}\`\n`;
    code += `\`${text[6]}\` \`${text[7]}\` \`${text[8]}\``;
    return code;
};

const getArtifact = async (params) => {
    const document = await wikiRequest('Artifacts');

    const artifact = {
        image: '',
        title: '',
        description: '',
        password: '',
    };
    const table = document.querySelector('.article-table > tbody');
    const rows = table.querySelectorAll('tr');
    for (let row of rows) {
        //compare first td to see if it matches the artifact we have in params.target
        const headings = row.querySelectorAll('td:first-child');
        //we're getting all of the headings so that we can find the one that matches params.target
        for (let heading of headings) {
            if (heading.textContent.includes(params.target)) {
                //We have found the right artifact do stuff with THIS row.
                const tableCells = row.querySelectorAll('td');
                //First cell is title,
                //second cell is description
                //third is the password
                artifact.image = tableCells[0].querySelector('img').src;
                artifact.title = tableCells[0].textContent;
                artifact.description = tableCells[1].textContent;
                artifact.password = formatText(tableCells[2].textContent);
            }
        }
    }
    return artifact;
};

export default getArtifact;
