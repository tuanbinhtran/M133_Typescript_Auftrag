import { DataStructureFactory } from "../lib/DataStructureFactory";

// import { IDataStructure } from "../lib/IDataStructure";

const ddl = document.getElementById("ddl") as HTMLSelectElement;
var selectedStructure = null;
var factory = new DataStructureFactory();
init();



function init() {
	document.getElementById("btnAdd").addEventListener("click", () => add());
	document.getElementById("btnPeek").addEventListener("click", () => peek());
	document.getElementById("btnPoll").addEventListener("click", () => poll());
	ddl.addEventListener('change', () => onChange());

	
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
	// selectedStructure = ddl.options[ddl.selectedIndex].value;
    console.log(ddl.value);
}



