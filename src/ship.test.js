import Ship from "./ship";

describe('Ship class', () => {
    test('should create a ship with a given length', () => {
        const ship = new Ship(4);
        expect(ship.getLength()).toBe(4);
    });

    test('should start with 0 hits', () => {
        const ship = new Ship(3);
        expect(ship.getHits()).toBe(0);
    });

    test('hit() should increase hits', () => {
        const ship = new Ship(3);
        ship.hit();
        expect(ship.getHits()).toBe(1);
    });

    test('isSunk() should return false when ship is not fully hit', () => {
        const ship = new Ship(3);
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    });

    test('isSunk() should return true when ship is fully hit', () => {
        const ship = new Ship(2);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });

    test('createShipByType() should create a ship of the correct type', () => {
        const battleship = Ship.createShipByType('battleship');
        expect(battleship.getLength()).toBe(4);

        const submarine = Ship.createShipByType('submarine');
        expect(submarine.getLength()).toBe(3);
    });

    test('createShipByType() should throw an error for invalid types', () => {
        expect(() => Ship.createShipByType('invalidType')).toThrow('Invalid ship type: invalidType');
    });

    test('hit() should not increase hits beyond ship length', () => {
        const ship = new Ship(2);
        ship.hit();
        ship.hit();
        ship.hit(); 
        expect(ship.getHits()).toBe(2);
        expect(ship.isSunk()).toBe(true);
    });
});
