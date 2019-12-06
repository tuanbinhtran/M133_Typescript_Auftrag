import { DataStructureFactory } from "../lib/DataStructureFactory";
import { DataStructure } from "../lib/DataStructure.enum";
import { IDataStructure } from "../lib/IDataStructure";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";
import { Http2ServerRequest } from "http2";
import { request } from "http";



const ddl = document.getElementById("ddl") as HTMLSelectElement;
const input = document.getElementById('value') as HTMLInputElement;
const messagesElement = document.getElementById('messages') as HTMLDivElement;
var selectedStructure: DataStructure;
var structure: IDataStructure;
var factory = new DataStructureFactory();

init();



function init(): void {
	setSelectionOptions();
	setEventListeners();
	onChange();
}

function setSelectionOptions(): void {
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
	document.getElementById("btnClear").addEventListener("click", () => clearMessages());
	input.addEventListener('keypress', (e) => inputOnKeyPress(e));
	ddl.addEventListener("change", () => onChange());
}

function add(): void {
	if (input.value.trim() != '') {
		structure.add(input.value.trim());
		output(`➕ Added '${input.value}'`);
	}
	else {
		output('💩 Input is empty or invalid')
	}
}

function peek(): void {
	if (structure.isEmpty())
		output(`💩 ${String(structure)} is empty`);
	else
		output(`🔍 Peek: ${structure.peek()}`);
}

function poll(): void {
	if (structure.isEmpty())
		output(`💩 ${String(structure)} is empty`);
	else
		output(`🛒 Poll: ${structure.poll()}`);
}

function reset(): void {
	output('♻ Resetting ...');
	input.value = '';
	onChange();
}

function clearMessages(): void {
	messagesElement.innerHTML = '';
	output('♻ ...');

	fetch('https://meme-api.herokuapp.com/gimme')
		.then((response) => response.json())
		.then((data) => {
			var imgElement = document.createElement('img');
			imgElement.src = data.url;
			messagesElement.prepend(imgElement);
		});
}

function inputOnKeyPress(e: KeyboardEvent): void {
	if (e.key == 'Enter')
		add();
}

function onChange(): void {
	if (selectedOption() === DataStructure.FIFO.toString()) {
		structure = new Queue();
		output('🆕 Queue created');
	}
	else {
		structure = new Stack();
		output('🆕 Stack created');
	}
}

function selectedOption(): string {
	var value = ddl.options[ddl.selectedIndex].value;
	return value;
}

function output(message: string) {
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



