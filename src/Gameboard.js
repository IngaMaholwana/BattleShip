export class Gameboard{
    constructor(){
        this.board = [];
        this.missedAttacks = [];
        this.ships = [];
    }

    placeShip(ship, startCoordinate) {
        this.ships.push(ship);
        for (let i = 0; i < ship.length; i++) {
            this.board.push({ ship: ship, position: startCoordinate + i, hit: false });
        }
    }

    receiveAttack(coordinates) {
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i].position === coordinates) {
                this.board[i].hit = true;
                return;
            }
        }
        this.missedAttacks.push(coordinates);
    }

    allShipsSunk(){
        for(let i = 0; i < this.board.length; i++){
            if(this.board[i].hit == false){
                return false;
            }
        }
        return true;
    }

}