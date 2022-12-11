import { PlayerShip, shipNames, ShipType } from "./ship";

export type Position = `${string}-${number}`; // create typeOf literal type
type PossibleValue = "" | "hit" | "miss" | ShipType;
type GridState = Record<Position, PossibleValue>;

abstract class Grid {
	state: GridState = {};
	type: "player" | "computer";
	element: HTMLElement;
	squares: HTMLElement[] = [];

	constructor(type: "player" | "computer") {
		this.type = type;

		// Create the Grid State
		// create all the keys from a-1 to j-10 and put them into gridState
		// with a value of empty string
		const gridChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
		for (let i = 0; i < gridChars.length; i++) {
			//letter interration
			for (let j = 1; j <= 10; j++) {
				// nested another for loof interration over numbers -> in total 100 interrations
				const position: Position = `${gridChars[i]}-${j}`;
				this.state[position] = "";
			}
		}
		// create a element for the grid
		// assign that element to your element field
		// put the grid into the html (WITH JAVASCRIPT NOT HTML)
		this.element = document.createElement("div");
		this.element.classList.add("grid");
		this.element.id =
			this.type === "player" ? "player-grid" : "computer-grid";
		const container = document.querySelector(
			"grid-container"
		) as HTMLElement;
		container.appendChild(this.element); // change in main.ts
	}

	// implement a method createBoard
	// that creates all 100 divs with the appropriate id
	// and puts them into the grid element on the document
	// store all the divs in the square array
	// ! OUTSIDE OF CONSTRUCTOR ! INSIDE OF GRID
	createBoard(): void {
		// iterate over the state object
		for (const key in this.state) {
			// create a square(div)
			const square = document.createElement("div");
			// give the square an id -> e.g. player-a-1 computer-b-2
			square.id = `${this.type}-${key}`;
			// append the squares to the grid
			this.element.appendChild(square);
			// add the squares also to the squares field
			this.squares.push(square); //emty array of HTML elements
		}
	}
}

export class PlayerGrid extends Grid {
	shipsToBePlaced: PlayerShip[] = [];
	//shipsToBePlaced: PlayerShip[];
	constructor() {
		super("player");
		shipNames.forEach((shipName) =>
			this.shipsToBePlaced.push(new PlayerShip(shipName))
		);
	}
}

export class ComputerGrid extends Grid {
	constructor() {
		super("computer");
	}
}
