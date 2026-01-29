/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, i) {
        if(i === word.length) return true;
        if(r < 0 || c < 0 ||
        r >= rows || c >= cols ||
        board[r][c] !== word[i]) return false;

        const temp = board[r][c];
        board[r][c] = "#";

        const found = 
        dfs(r + 1, c, i+1) ||
        dfs(r - 1, c, i+1) ||
        dfs(r, c + 1, i+1) ||
        dfs(r, c - 1, i+1);

        board[r][c] = temp;

        return found;
    }

    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            if(dfs(i, j, 0)) return true;
        }
    }

    return false;
};