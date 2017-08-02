import axios from 'axios';
import types from './types';

const actions = {};

actions.getList = ({ commit }) => axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    commit(types.SET_LIST, response.data);
  });

export default actions;
