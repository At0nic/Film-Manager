<template>
  <div class="container">
    <nav class="navbar">
      <router-link to="/">Domů</router-link>
      <router-link to="/movies">Seznam filmů</router-link>
      <router-link to="/add-movie">Přidat film</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  provide() {
    return {
      movies: this.movies,
      addMovie: this.addMovie,
      deleteMovie: this.deleteMovie
    };
  },
  data() {
    return {
      movies: []
    };
  },
  methods: {
    addMovie(movie) {
      this.movies.push(movie);
    },
    deleteMovie(index) {
      this.movies.splice(index, 1);
    }
  }
};
</script>