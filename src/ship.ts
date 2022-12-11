export type ShipType =
	| "destroyer"
	| "submarine"
	| "cruiser"
	| "battleship"
	| "carrier";

//definde helper array:
export const shipNames: ShipType[] = [
	"destroyer",
	"submarine",
	"cruiser",
	"battleship",
	"carrier",
];

//creating base ship class
export class Ship {
	type: ShipType;
	length: number;
	isHorizontal: boolean = true;

	constructor(type: ShipType) {
		this.type = type;

		switch (this.type) {
			case "destroyer":
				this.length = 2;
				break;
			case "submarine":
			case "cruiser":
				this.length = 3;
				break;
			case "battleship":
				this.length = 4;
				break;
			case "carrier":
				this.length = 5;
				break;
		}
	}
}

export class PlayerShip extends Ship {
	element: HTMLElement;

	constructor(type: ShipType) {
		super(type);
		this.element = document.querySelector(
			`.${this.type}-container`
		) as HTMLElement;
	}
	rotate() {
		this.isHorizontal = !this.isHorizontal;
		this.element.classList.toggle(`${this.type}-container-vertical`);
	}
}
