<template>
  <q-page padding>
      <!-- content -->
      <q-jumbotron>
    <div class="q-display-3">Galeria</div>
    <div class="q-subheading">
      This is a simple hero unit, a simple jumbotron-style component for calling extra
      attention to featured content or information.
    </div>
    <hr class="q-hr q-my-lg">
  </q-jumbotron>
    <div class="row">
    <q-card-media class="col-lg-4">
      <img src="~assets/ponte.jpg">
      <!-- Notice the slot="overlay" -->
    <q-card-title slot="overlay">
    Title
    <span slot="subtitle">Subtitle</span>
    </q-card-title>
    </q-card-media>
    <q-card-media class="col-lg-4">
    <img src="~assets/ponte2.jpg">
    <!-- Notice the slot="overlay" -->
    <q-card-title slot="overlay">
    Title
    <span slot="subtitle">Subtitle</span>
    </q-card-title>
    </q-card-media>
    <q-card-media class="col-lg-4">
    <img src="~assets/ponte3.jpg">
    <!-- Notice the slot="overlay" -->
    <q-card-title slot="overlay">
    Title
    <span slot="subtitle">Subtitle</span>
    </q-card-title>
    </q-card-media>

    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
</style>
