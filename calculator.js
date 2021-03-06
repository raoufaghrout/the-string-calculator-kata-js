function add(string) {
    if (!string) return 0;

    const separators = [',', '\n'];
    const splitString = string.split(new RegExp(separators.join('|'), 'g'));

    checkForNegatives(splitString);

    return splitString
        .map(string => Number(string))
        .filter(number => number <= 1000)
        .reduce((a, b) => a + b);
}

function checkForNegatives(splitString) {
    const negatives = splitString.filter(string => string.startsWith('-'));

    if (negatives.length > 1) throw 'Negative numbers found: ' + negatives
}

module.exports = {add};
