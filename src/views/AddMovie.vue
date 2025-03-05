<template>
  <div>
    <h1>Přidat film</h1>
    <form @submit.prevent="addMovie">
      <div>
        <label>Název filmu:</label>
        <input v-model="newMovie.name" required />
      </div>
      <div>
        <label>Režisér:</label>
        <input v-model="newMovie.director" required />
      </div>
      <div>
        <label>Rok vydání:</label>
        <input type="number" v-model="newMovie.year" required />
      </div>
      <button type="submit">Přidat</button>
    </form>
  </div>
</template>

<script>
export default {
  inject: ['addMovie'],
  data() {
    return {
      newMovie: {
        name: '',
        director: '',
        year: null,
      },
    };
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
}
button {
  background: green;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
}
</style>
