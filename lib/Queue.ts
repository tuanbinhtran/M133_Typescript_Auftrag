import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {

    private queue = [];

    public size(): number {
        return this.queue.length;
    }

    public enqueue(value: any): void {
        this.queue.push(value);
    }

    public peek(): any {
        return this.queue[0];
    }

    public isEmpty(): boolean {
        return (this.size() == 0) ? true : false;
    }
}