import { mutations } from './mutations';

describe('store user mutations', () => {
  let state;
  let list;

  beforeEach(() => {
    state = {
      list: [],
    };

    list = [
      { name: 'Vitor Nogueira', website: 'http://mindsetboaspraticas.com.br', phone: 123456 },
      { name: 'Thomas Alvarenga', website: 'http://mindsetboaspraticas.com.br', phone: 654321 },
    ];
  });

  describe('SET_LIST', () => {
    it('set the user list in state', () => {
      mutations.SET_LIST(state, list);

      expect(state.list).toEqual(list);
    });
  });
});
