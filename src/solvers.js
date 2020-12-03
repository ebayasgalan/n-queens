/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  if (n === 0) { return 1; }
  // create a board n by n
  var board = new Board({n: n});
  // create a inner recursive function that a paramater for row index starting at zero
  var checkMoves = function(rowIndex) {
    // create var for the specific row
    var row = board.get(rowIndex);
    // iterate over that row
    for ( let i = 0; i < row.length; i++) {
      //   place a piece on col zero of the row - board.togglePiece(rowIndex, i);
      board.togglePiece(rowIndex, i);
      //   check to see if there's conflict using a helper function
      //     if there's a conflict, toggle off! - board.togglePiece(rowIndex, i);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(rowIndex, i);
      } else {
        //   if no conflict, compare rowIndex to n-1. Toggle piece off and increment the counter if it's the last row
        //   if rowIndex does not equal n-1, call inner recursive function with rowIndex+1
        if (rowIndex === (n - 1)) {
          board.togglePiece(rowIndex, i);
          solutionCount++;
        } else {
          checkMoves(rowIndex + 1);
          board.togglePiece(rowIndex, i);
          return;
        }
      }

    }
  };
  checkMoves(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  // debugger;
  return solutionCount;
};
