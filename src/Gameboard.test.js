import { Gameboard } from "./Gameboard.js";

describe("Gameboard", () => {
    let gameboard;
    
    beforeEach(() => {
        gameboard = new Gameboard();
    });

    test("places a ship on the board", () => {
        const ship = { length: 3 };
        gameboard.placeShip(ship, 0);
        
        expect(gameboard.ships.length).toBe(1);
        expect(gameboard.board.length).toBe(3);
        expect(gameboard.board[0].ship).toBe(ship);
    });

    test("registers a hit on a ship", () => {
        const ship = { length: 3 };
        gameboard.placeShip(ship, 1);
        
        gameboard.receiveAttack(1);
        
        expect(gameboard.board[0].hit).toBe(true);
    });

    test("registers a missed attack", () => {
        gameboard.receiveAttack(5);
        
        expect(gameboard.missedAttacks).toContain(5);
    });

    test("returns false if not all ships are sunk", () => {
        const ship = { length: 2 };
        gameboard.placeShip(ship, 0);
        
        expect(gameboard.allShipsSunk()).toBe(false);
    });

    test("returns true if all ships are sunk", () => {
        const ship = { length: 2 };
        gameboard.placeShip(ship, 0);
        
        gameboard.receiveAttack(0);
        gameboard.receiveAttack(1);
        
        expect(gameboard.allShipsSunk()).toBe(true);
    });
});
