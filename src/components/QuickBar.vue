<template>
  <div class="quick-bar">
    <input v-model="query" @input="onInput" placeholder="Type to search..." />
    <ul v-if="results.length">
      <li v-for="result in results" :key="result.id">{{ result.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'QuickBar',
  setup() {
    const query = ref('');
    const results = ref([]);

    const onInput = () => {
      // Simulate a search operation
      results.value = query.value
        ? [{ id: 1, name: 'Result 1' }, { id: 2, name: 'Result 2' }]
        : [];
    };

    return {
      query,
      results,
      onInput,
    };
  },
};
</script>

<style scoped>
.quick-bar {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 300px;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.quick-bar input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

.quick-bar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quick-bar li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
</style> 