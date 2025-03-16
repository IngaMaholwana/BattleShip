export default class Ship {
    static lengthMapping = {
        carrier: 5,
        battleship: 4,
        destroyer: 3,
        submarine: 3,
        patrol_boat: 2,
    };

    constructor(length) {
        this.length = length;
        this.hits = 0;
    }

    // Static method to create a ship by type
    static createShipByType(type) {
        const length = Ship.lengthMapping[type.toLowerCase()];
        if (!length) {
            throw new Error(`Invalid ship type: ${type}`);
        }
        return new Ship(length);
    }

    getLength() {
        return this.length;
    }

    getHits() {
        return this.hits;
    }

    hit() {
        if (this.hits < this.length) {
            this.hits++;
        }
    }

    isSunk() {
        return this.hits >= this.length;
    }
}
