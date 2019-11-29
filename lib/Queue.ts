import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {

    private queue = [];

    public size(): number {
        return this.queue.length;
    }

    public enqueue(value: string): void {
        this.queue.push(value);
    }
}