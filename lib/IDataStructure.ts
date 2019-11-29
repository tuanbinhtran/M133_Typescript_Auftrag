export interface IDataStructure {

    /**
     * Retuns the size of the data structure
     */
    size(): number;

    /**
     * Enqueues the value
     * @param value to enqueue
     */
    enqueue(value: any): void;

    /**
     * Retuns the structure
     */
    peek(): any;

    /**
     * Polls the next value
     */
    poll(): any;

    /**
     * Checks if the structure is empty
     */
    isEmpty(): boolean;
}