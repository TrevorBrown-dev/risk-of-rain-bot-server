import checkSimilarity from './checkSimilarity.js';

//Spell check will go through an array given to it.
//This is an array of objects with a key called name.
//some keys (maybe all todo later) will have aliases.
const spellCheck = (name, arr) => {
    let bestMatch = arr[0];
    let bestSimilarity = checkSimilarity(bestMatch.name, name);
    let item;
    let newSimilarity;
    for (item of arr) {
        if (item.aliases) {
            //This item has aliases to check.
            for (let alias of item.aliases) {
                //iterate through aliases
                if (alias) newSimilarity = checkSimilarity(alias.name, name);
                if (newSimilarity > bestSimilarity) {
                    bestSimilarity = newSimilarity;
                    bestMatch = item;
                }
            }
        }
        newSimilarity = checkSimilarity(item.name, name);
        if (newSimilarity > bestSimilarity) {
            bestSimilarity = newSimilarity;
            bestMatch = item;
        }
    }
    return bestMatch;
};

export default spellCheck;
