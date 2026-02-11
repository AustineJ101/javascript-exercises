const palindromes = function (str) {
    let cleanStr = removePunctuation(str).split(" ").join("").toLowerCase();

    let comparStr = cleanStr.split("").reverse().join("");

    return cleanStr == comparStr;
};

function removePunctuation(str) {
    return str.split('').filter(char => {
        return /[a-zA-Z0-9 ]/.test(char);
    }).join('');
}




// Do not edit below this line
module.exports = palindromes;
