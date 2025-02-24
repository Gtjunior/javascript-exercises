const palindromes = function (str) {

    let alphanumerical = 'abecdefghijeklmnopqrstuvwxyz0123456789';

    let newStr = str.toLowerCase().split('').filter(char => alphanumerical.includes(char)).join('');

    let reverseStr = newStr.split('').reverse('').join('');

    return newStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
