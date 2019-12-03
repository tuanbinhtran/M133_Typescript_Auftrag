import { DataStructureFactory } from "../lib/DataStructureFactory";
import { DataStructure } from "../lib/DataStructure.enum";
import { IDataStructure } from "../lib/IDataStructure";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";

const options = [
	{ text: 'Queue', value: DataStructure.FIFO },
	{ text: 'Stack', value: DataStructure.LIFO }
];


const ddl = document.getElementById("ddl") as HTMLSelectElement;
var selectedStructure: DataStructure;
var structure: IDataStructure;
var factory = new DataStructureFactory();

init();



function init() {
	setSelectionOptions();
	setEventListeners();
}

function setSelectionOptions() {
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
	console.log('ima add');
	
}

function peek() {
	console.log('ima peek');
}

function poll() {
	console.log('poll');
}

function onChange() {
	if (selectedOption() == DataStructure.FIFO) {
		structure = new Queue();
	}
	else {
		structure = new Stack();
	}
	
	console.log(selectedOption());
	
	console.log(structure);
	
}

function selectedOption(): DataStructure {
	var value = ddl.options[ddl.selectedIndex].value;
	
	return DataStructure[value];
}



