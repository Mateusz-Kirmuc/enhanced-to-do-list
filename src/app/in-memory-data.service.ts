import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lists = [
      // { id: 1, name: 'First list' }
    ];
    return { lists };
  }
}
