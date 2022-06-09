function Algo() {}

Algo.prototype.reverse = function(str) {
    return str.split("").reverse().join('');
};

Algo.prototype.isPalindrome = function(str) {
    const reverse = new Algo().reverse(str);

    return reverse === str;
};

Algo.prototype.capitalize = function(str) {
    return str.split(0, 1).capitalize() + str.split(1);
};

module.exports = Algo;
