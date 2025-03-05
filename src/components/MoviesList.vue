<template>
  <div class="movies-list">
    <h2>Seznam filmů</h2>
    <ul>
      <li v-for="(movie, index) in movies" :key="index">
        {{ movie.title }} ({{ movie.director }}, {{ movie.year }})
        <button @click="deleteMovie(index)">Smazat</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ['movies', 'deleteMovie']
};
</script>