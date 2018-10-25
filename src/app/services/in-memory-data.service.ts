import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '@models/user';
import { ApiResponse } from '@models/api-response';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: ApiResponse = {
      type: 'members',
      code: 'T0004',
      descritpion: 'Liste des utilisateurs inscrits',
      payload: [
        {id: 1, login: 'martin'},
        {id: 2, login: 'martine'},
        {id: 3, login: 'jade'},
        {id: 4, login: 'thibault'},
        {id: 5, login: 'jimmy'},
      ],
    };

    return {
      users,
    };
  }
}
