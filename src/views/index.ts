import { DataStructureFactory } from "../lib/DataStructureFactory";
import { DataStructure } from "../lib/DataStructure.enum";
import { IDataStructure } from "../lib/IDataStructure";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";



const ddl = document.getElementById("ddl") as HTMLSelectElement;
const input = document.getElementById('value') as HTMLInputElement;
const messagesElement = document.getElementById('messages') as HTMLDivElement;
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
	document.getElementById("btnReset").addEventListener("click", () => reset());
	ddl.addEventListener("change", () => onChange());
}

function add() {
	if (input.value.trim() != '') {
		structure.add(input.value.trim());
		notify(`➕ Added '${input.value}'`);
	}
	else {
		notify('💩 Input is empty or invalid')
	}
}

function peek() {
	if (structure.isEmpty()) {
		notify(`💩 ${String(structure)} is empty`);
	}
	else {
		notify(`🔍 Peek: ${structure.peek()}`);
	}
}

function poll() {
	if (structure.isEmpty()) {
		notify(`💩 ${String(structure)} is empty`);
	}
	else
		notify(`🛒 Poll: ${structure.poll()}`);
}

function reset() {
	resetMessageElement();

	notify('♻ Resetting ...');
	input.value = '';
	onChange();
}

function onChange() {
	if (selectedOption() === DataStructure.FIFO.toString()) {
		structure = new Queue();
		notify('🆕 Queue created');
	}
	else {
		structure = new Stack();
		notify('🆕 Stack created');
	}
}

function selectedOption(): string {
	var value = ddl.options[ddl.selectedIndex].value;
	return value;
}

function resetMessageElement(): void {
	messagesElement.innerHTML = '';
}

function notify(message: string) {
	var messageElement = document.createElement('p');
	var time = new Date().toLocaleTimeString('en-US', {
		hour12: false,
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	});

	messageElement.textContent = `${time} | ${message}`;
	console.log(`${time} | ${message}`);
	messagesElement.prepend(messageElement);
}



