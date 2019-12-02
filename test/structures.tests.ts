import { expect } from "chai";
import { Queue } from "../lib/Queue";
import { DataStructureFactory } from "../lib/DataStructureFactory";
import { DataStructure } from "../lib/DataStructure.enum";

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

        it('can enqueue artist and queue has size of 1', () => {
            const artist = 'Rich Brian';
            const expected = 1;

            queue.enqueue(artist);
            const result = queue.size();

            expect(result).to.equal(expected);
        });

        it('can enqueue 5 artist and queue has size of 5', () => {
          const artists = [
              'Rich Brian',
              'Darude',
              'Jackson Wang',
              'G-Dragon',
              'Hans'
            ];
          const expected = 5;

          artists.forEach(artist => queue.enqueue(artist));
          
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

        it('can peek from empty queue', () => {
            const expected = undefined;

            const result = queue.peek();

            expect(result).to.equal(expected);
        });

        it('can peek from queue with artist', () => {
            const artist = 'Rich Brian';

            queue.enqueue(artist);
            const result = queue.peek();

            expect(result).to.equal(artist); 
        });

        it("can peek from queue with 3 artists", () => {
            const artists = ["G-Dragon", "Darude", "Jackson Wang", "Rich Brian", "Hans"];
            const expected = 'G-Dragon';

            artists.forEach(artist => queue.enqueue(artist));
            const result = queue.peek();

            expect(result).to.equal(expected);
        });

        it('can poll from empty queue', () => {
            const expected = undefined;

            const result = queue.poll();

            expect(result).to.equal(expected);
        });

        it('can poll artist from queue with 4 artists', () => {
            const artists = ["Hans", "Darude", "Jackson Wang", "G-Dragon"];
            const expected = 'Hans';

            artists.forEach(artist => queue.enqueue(artist));
            const result = queue.poll();

            expect(result).to.equal(expected);
        });

        it('can poll artists in correct order', () => {
            const artists = ["Hans", "Darude", "Jackson Wang", "G-Dragon"];

            artists.forEach(artist => queue.enqueue(artist));
            var result = [];

            while (!queue.isEmpty())
                result.push(queue.poll());

            expect(result).to.deep.equal(artists);
        });

        it('peeked artist is not equal the polled artist', () => {
            const artists = ["Darude", "Hans", "Jackson Wang", "G-Dragon"];
            const expected = 'Darude';

            artists.forEach(artist => queue.enqueue(artist));
            queue.poll();
            const result = queue.peek();

            expect(result).to.not.equal(expected);
        });
    })

    describe("Factory", () => {
        var dataStructureFactory: DataStructureFactory;

        beforeEach(() => {
            dataStructureFactory = new DataStructureFactory();
        });

        it("can create Queue", () => {
            const structureType = DataStructure.FIFO; // todo to => DataStructure.Queue
            const result = dataStructureFactory.create(structureType);
            expect(result).to.be.an.instanceOf(Queue);
        })
    })
})