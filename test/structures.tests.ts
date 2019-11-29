import { expect } from "chai";
import { Queue } from "../lib/Queue";

describe("Data structures", () => {
    describe("Queue", () => {
        var queue: Queue;

        beforeEach(() => {
            queue = new Queue();
        });

        it("has size of 0", () => {
            const expected = 0

            const result = queue.size();

            expect(result).to.equal(expected);
        });

        it('can enqueue artist and has size of 1', () => {
            const artist = 'Rich Brian';
            const expected = 1;

            queue.enqueue(artist);
            const result = queue.size();

            expect(result).to.equal(expected);
        });

        it('is empty', () => {
            const expected = true;

            const result = queue.isEmpty();

            expect(result).to.equal(expected);
        });

        it('is not empty', () => {
            const artist = "Rich Brian";
            const expected = false;

            queue.enqueue(artist);
            const result = queue.isEmpty();

            expect(result).to.equal(expected);
        });

        it('can peek next value from empty queue', () => {
            const expected = undefined;

            const result = queue.peek();

            expect(result).to.equal(expected);
        });
    })

    // describe("Factory", () => {
    //     it("can create Queue", () => {
    //         const structureType = DataStructures.Queue;
    //         const result = DataStructureFactory.create(structureType);
    //         expect(result).to.be.an.instanceOf(Queue);
    //     })
    // })
})