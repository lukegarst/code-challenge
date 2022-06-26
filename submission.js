const findSum = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }

     return sum

};

const findFrequency = function(array) {
    let mf = array[0], maxCount = 0, i, j;

    let len = array.length
    for (let i = 0; i < len; i++) {
        let count1 = 0
        for (j = i + 1; j < len; j++) {
            if (array[i] === array[j]) {
                count1++;
            }
        }
        if (maxCount < count1) {
            maxCount = count1;
            mf = array[i];
        }
    }
    return mf;
};

const isPalindrome = function(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
};

const largestPair = function(array) {
    let max = -Infinity;
    for (let i = 1; i < array.length; i++) {
        max = Math.max(array[i] * array[i - 1], max);
    }

    return max;
};

const removeParenth = function(str) {
    return str.replace(/ *\([^)]*\) */g, "");
};

const scoreScrabble = function(str) {
str = str.toLowerCase();

for (i = 0; i < str.length; i++) {
    let score = 0;

    if (str.includes('a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't')) {
    score = score + 1;
}
return score
}
};
