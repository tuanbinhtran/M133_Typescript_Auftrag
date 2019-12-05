import { IDataStructure } from './IDataStructure';

export class Stack implements IDataStructure {

	private stack = [];

	add(value: any): void {
		this.stack.push(value);
	}
	peek() {
		return this.stack[(this.size() - 1)];
	}
	poll() {
		return this.stack.pop();
	}
	isEmpty(): boolean {
		return (!this.size()) ? true : false;
	}

	size(): number {
		return this.stack.length;
	}
}
