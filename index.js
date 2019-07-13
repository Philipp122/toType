/**
 * A better alternative to the typeof-operator in JS. Utilizes the internal [[CLASS]] property.
 * @param value
 * @return {string}
 */
let toType = (value) => {
    return ({}).toString.call(value).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

module.exports = toType;