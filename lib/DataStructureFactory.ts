import { IDataStructure } from './IDataStructure';
import { Queue } from './Queue';
import { Stack } from './Stack';
export class DataStructureFactory {

	public create(dataStructure: DataStructure): IDataStructure {
		return dataStructure === DataStructure.FIFO ? new Queue() : new Stack();
	}
}