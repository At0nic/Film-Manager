<template>
  <div>
    <h1>Seznam filmů</h1>
    <ul>
      <li v-for="(movie, index) in movies" :key="index">
        <strong>{{ movie.name }}</strong> od {{ movie.director }} ({{ movie.year }})
        <button @click="deleteMovie(index)">Smazat</button>
      </li>
    </ul>
    <p v-if="movies.length === 0">Žádné filmy nejsou k dispozici.</p>
  </div>
</template>

<script>
export default {
  inject: ['movies', 'deleteMovie'],
};
</script>

<style>
button {
  margin-left: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
}
</style>
