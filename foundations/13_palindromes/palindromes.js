const palindromes = function (word) {
    const originalWord = word.toLowerCase().replace(/[^a-z0-9]/gi, "");
    const reversedWord = originalWord.split('').reverse().join('');

    return originalWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
