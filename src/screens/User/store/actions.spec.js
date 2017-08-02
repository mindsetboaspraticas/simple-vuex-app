import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import actions from './actions';

describe('store user actions', () => {
  let mock;
  let commit;

  beforeEach(() => {
    mock = new MockAdapter(axios);

    commit = jest.fn();
  });

  describe('getList', () => {
    let response;

    beforeEach(() => {
      response = [
        { name: 'Vitor Nogueira', website: 'http://mindsetboaspraticas.com.br', phone: 123456 },
        { name: 'Thomas Alvarenga', website: 'http://mindsetboaspraticas.com.br', phone: 654321 },
      ];
    });

    it('call commit with users list', (done) => {
      mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, response);

      actions.getList({ commit }).then(() => {
        expect(commit).toHaveBeenCalledWith('SET_LIST', response);
        done();
      });
    });
  });
});
