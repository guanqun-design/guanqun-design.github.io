
let directions = [[1, 0], [1, 1], [0, 1], [1, -1]];

let map = [" ", "x", "o"];

function createGame(size) {
    return {
        size: size,
        board: Array.from({length: size}, () => Array(size).fill(0)),
        currentPlayer: 1,
        onWin: player => {
            console.log("player {} Win!", player);
        },
        onInvalidPlace: (x, y) => {
            console.log("There are already chess pieces here: ({},{})", x, y);
        },
    };
}

function checkInBoard(game, x, y) {
    return x >= 0 && y >= 0 && x < game.size && y < game.size;
}

function count(game, px, py, dx, dy) {
    let nx = px + dx;
    let ny = py + dy;
    if (checkInBoard(nx, ny)) {
        return 0;
    }
    if (game.board[nx][ny] === game.currentPlayer) {
        return count(game, nx, ny, dx, dy) + 1;
    }
    return 0;
}

function placePiece(game, px, py) {
    // check
    if (game.board[px][py] !== 0 || !checkInBoard(game, px, py)) {
        game.onInvalidPlace(px, py);
        return;
    }
    // place
    game.board[py][px] = game.currentPlayer;
    // check win
    for (let d of directions) {
        if (count(game, px, py, d[0], d[1]) + count(game, px, py, -d[0], -d[1]) >= 4) {
            game.onWin(game.currentPlayer);
            return;
        }
    }
    // next player
    game.currentPlayer = 3 - game.currentPlayer;
}

function toString(game) {
    let str = "";
    game.board.forEach(line => {
        line.forEach(p => {
            str += map[p];
        })
        str += "\n";
    })
    return str;
}

let game;

function create() {
    game = createGame(15);
}

function place(x,y){
    placePiece(game, x, y);
    console.log(toString(game));
}