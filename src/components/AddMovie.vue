<template>
  <div class="add-movie">
    <h2>Přidat nový film</h2>
    <form @submit.prevent="submitForm">
      <input v-model="title" placeholder="Název filmu" required />
      <input v-model="director" placeholder="Režisér" required />
      <input v-model.number="year" type="number" placeholder="Rok vydání" required />
      <button type="submit">Přidat</button>
    </form>
  </div>
</template>

<script>
export default {
  inject: ['addMovie'],
  data() {
    return {
      title: '',
      director: '',
      year: ''
    };
  },
  methods: {
    submitForm() {
      if (!this.title || !this.director || !this.year) return;
      this.addMovie({ title: this.title, director: this.director, year: this.year });
      this.title = '';
      this.director = '';
      this.year = '';
    }
  }
};
</script>