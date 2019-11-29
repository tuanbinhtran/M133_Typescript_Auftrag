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

        // it.skip('can enqueue artist and has size of 1', () => {
        //     const artist = 'Rich Brian';


        //     const result = queue.isEmpty();

        //     expect(result).to.equal(expected);
        // });
    })

    // describe("Factory", () => {
    //     it("can create Queue", () => {
    //         const structureType = DataStructures.Queue;
    //         const result = DataStructureFactory.create(structureType);
    //         expect(result).to.be.an.instanceOf(Queue);
    //     })
    // })
})