import "./style.css";
import { PlayerGrid, ComputerGrid } from "./grid";

const startButton = document.getElementById("start") as HTMLElement;
const rotateButton = document.getElementById("rotate") as HTMLElement;

const computerGrid = new ComputerGrid();
const playerGrid = new PlayerGrid();

playerGrid.createBoard();
computerGrid.createBoard();

rotateButton.addEventListener("click", () => {
	playerGrid.shipsToBePlaced.forEach((ship) => ship.rotate());
});
