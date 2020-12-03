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
  if ( n === 0) {
    return 1;
  }
  var factorial = function(n) {
    if ( n === 0) { return 1; }
    return n * factorial(n - 1);
  };
  var solutionCount = factorial(n);
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

  var board = new Board({n: n});

  var checkMoves = function(rowIndex) {

    var row = board.get(rowIndex);
    for ( let i = 0; i < row.length; i++) {
      board.togglePiece(rowIndex, i);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(rowIndex, i);
      } else {
        if (rowIndex === (n - 1)) {
          board.togglePiece(rowIndex, i);
          solutionCount++;
          return;
        } else {
          checkMoves(rowIndex + 1);
          board.togglePiece(rowIndex, i);
        }
      }
    }
  };
  checkMoves(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
