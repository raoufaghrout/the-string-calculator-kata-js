function add(string) {
    if (!string) return 0;

    let separators = [',', '\n'];
    let splitString = string.split(new RegExp(separators.join('|'), 'g'));

    checkForNegatives(splitString);

    return splitString
        .map(string => Number(string))
        .filter(number => number <= 1000)
        .reduce(addFunc);
}

function checkForNegatives(splitString) {
    let negatives = splitString.filter(string => string.startsWith('-'));

    if (negatives.length > 1) {
        throw 'Negative numbers found: ' + negatives
    }
}

const addFunc = (a, b) => {
    return a + b;
};

module.exports = { add };