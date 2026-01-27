/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let i=0, maxLength=0;
    for(let j=0; j<s.length; j++) {
        let ch = s[j];
        if(map.has(ch)) {
            i = Math.max(i, map.get(ch) + 1);
        }
        map.set(ch, j);
        maxLength = Math.max(maxLength, j-i+1);
    }
    return maxLength;
};