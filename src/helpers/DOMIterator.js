/**
 *Currently doesn't seem to work, Could make code a bit cleaner if this was figured out
 * @param {Object} element
 * @param {String} query
 * @param {function(Object)} callback
 */

const DOMIterator = (element, query, callback) => {
    let elements;
    try {
        elements = element.querySelectorAll(query);
    } catch (error) {}

    if (elements) {
        for (let el of elements) {
            callback(el);
        }
    }
};

export default DOMIterator;
