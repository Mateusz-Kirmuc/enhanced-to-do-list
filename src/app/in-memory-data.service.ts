import { InMemoryDbService } from 'angular-in-memory-web-api';

// Class that primes the in-memory database.
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // Array of List objects.
    const lists = [];
    return { lists };
  }
}
