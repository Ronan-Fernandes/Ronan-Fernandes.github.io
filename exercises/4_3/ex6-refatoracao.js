let peca = "gsdfgs";

function verificaPeca(p) {
    if (p === "pawn"){
        console.log("Pawn: move vertically forward one square, \nwith the option to move two squares if they have not yet moved. \nPawns are the only piece to capture different to how they move. \nPawns capture one square diagonally in a forward direction.\nPawns are unable to move backwards on captures or moves. \nUpon reaching the other side of the board a pawn promotes into any other piece, \nexcept for a king. Additionally, \npawns can make a special move named En Passant.");
    } else if (p === "knight") {
        console.log("Knight: move in an ‘L’ shape’: two squares in a horizontal or vertical direction, \nthen move one square horizontally or vertically.\n They are the only piece able to jump over other pieces.");
    } else if (p === "bishop") {
        console.log("Bishop: move diagonally any number of squares. They are unable to jump over pieces.");
    } else if (p === "rook") {
        console.log("Rook: move horizontally or vertically any number of squares.\n They are unable to jump over pieces.\n Rooks move when the king castles.");
    } else if (p === "queen") {
        console.log("Queen: move diagonally, horizontally, or vertically any number of squares.\n They are unable to jump over pieces.");
    } else if (p === "king") {
        console.log("King: move one square in any direction, \nso long as that square is not attacked by an enemy piece.\n Additionally, kings are able to make a special move, \nknow as castling.");
    } else {
        console.log("Isto não é uma peça de xadrez!!!")
    }
}
verificaPeca(peca.toLowerCase());