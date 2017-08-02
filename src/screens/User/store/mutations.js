import types from './types';

export const state = {
  list: [],
};

export const mutations = {
  [types.SET_LIST](state, list) {
    state.list = list;
  },
};
