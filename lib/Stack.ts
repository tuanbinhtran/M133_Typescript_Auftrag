import { IDataStructure } from './IDataStructure';

export class Stack implements IDataStructure {

	private stack = [];

	enqueue(value: any): void {
		throw new Error("Method not implemented.");
	}
	peek() {
		throw new Error("Method not implemented.");
	}
	poll() {
		throw new Error("Method not implemented.");
	}
	isEmpty(): boolean {
		throw new Error("Method not implemented.");
	}
	
	size(): number {
		throw new Error("Method not implemented.");
	}

}