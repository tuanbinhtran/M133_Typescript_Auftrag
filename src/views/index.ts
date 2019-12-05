import { DataStructureFactory } from "../lib/DataStructureFactory";
import { DataStructure } from "../lib/DataStructure.enum";
import { IDataStructure } from "../lib/IDataStructure";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";



const ddl = document.getElementById("ddl") as HTMLSelectElement;
const input = document.getElementById('value') as HTMLInputElement;
var selectedStructure: DataStructure;
var structure: IDataStructure;
var factory = new DataStructureFactory();

init();



function init() {
	setSelectionOptions();
	setEventListeners();
	onChange();
}

function setSelectionOptions() {
	const options = [
		{ text: 'Queue', value: DataStructure.FIFO.valueOf() },
		{ text: 'Stack', value: DataStructure.LIFO.valueOf() }
	];

	options.forEach(option => {
		var optionElement = document.createElement('option');

		optionElement.text = option.text;
		optionElement.value = option.value.toString();

		ddl.add(optionElement);
	});
}

function setEventListeners() {
	document.getElementById("btnAdd").addEventListener("click", () => add());
    document.getElementById("btnPeek").addEventListener("click", () => peek());
	document.getElementById("btnPoll").addEventListener("click", () => poll());
	ddl.addEventListener("change", () => onChange());
}

function add() {
	if (input.value.trim() != '') {
		console.log('add: ' + input.value);
		structure.add(input.value.trim());
	}
}

function peek() {
	if (structure.isEmpty())
		console.log(String(structure) + ' is empty');
	else
		console.log(structure.peek());
}

function poll() {
	if (structure.isEmpty())
		console.log(String(structure) + ' is empty');
	else
		console.log(structure.poll());
}

function onChange() {
	if (selectedOption() === DataStructure.FIFO.toString())
		structure = new Queue();
	else
		structure = new Stack();

	console.log('created structure: ' + JSON.stringify(structure));

}

function selectedOption(): string {
	var value = ddl.options[ddl.selectedIndex].value;
	return value;
}



