<template>
  <div class="hello">
    <ul>
      <li v-for="user in users">
        <span><b>Nome:</b> {{ user.name }}</span>
        <span><b>Telefone:</b> {{ user.phone }}</span>
        <span><b>Site:</b> {{ user.website }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserList',
  created() {
    this.getList();
  },
  methods: mapActions({
    getList: 'user/getList',
  }),
  computed: mapGetters({
    users: 'user/list',
  }),
};
</script>

<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  padding: 15px 0;
  border-bottom: 1px dashed #ccc;
}

li:last-child {
  border-bottom: none;
}

span {
  display: block;
  line-height: 1.4;
}

a {
  color: #42b983;
}
</style>
