import { IDataStructure } from './IDataStructure';
import { Queue } from './Queue';
import { Stack } from './Stack';
import { DataStructure } from './DataStructure.enum';
export class DataStructureFactory {

	public create(dataStructure: DataStructure): IDataStructure {
		return dataStructure === DataStructure.FIFO ? new Queue() : new Stack();
	}
}