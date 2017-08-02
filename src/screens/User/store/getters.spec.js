import getters from './getters';

describe('store user getters', () => {
  let state;

  beforeEach(() => {
    state = {
      list: [
        { name: 'Vitor Nogueira', website: 'http://mindsetboaspraticas.com.br', phone: 123456 },
        { name: 'Thomas Alvarenga', website: 'http://mindsetboaspraticas.com.br', phone: 654321 },
      ],
    };
  });

  describe('list', () => {
    it('return the user list in state', () => {
      expect(getters.list(state)).toEqual(state.list);
    });
  });
});
