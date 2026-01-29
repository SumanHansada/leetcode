/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longestPrefix = strs[0];

    for(let i=0; i<strs.length; i++) {
        while(!strs[i].startsWith(longestPrefix)) {
            longestPrefix = longestPrefix.slice(0, -1);
            if(!longestPrefix) return "";
        }
    }

    return longestPrefix;
};