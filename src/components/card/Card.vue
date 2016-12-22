<template>
  <section class="card-container" :class="resultClass">
    <div class="card">
      <h3 v-text="original"></h3>
      <form @submit.prevent="checkTranslation()">
        <input type="text"
               placeholder="translation..."
               v-model.trim="translation"
               autofocus>
        <button type="submit">OK</button>
      </form>
      <span class="answer" v-text="answer"></span>
    </div>
  </section>
</template>

<script src="./Card.js">
</script>

<style>
.green {
  background-color: lightgreen;
}

.red {
  background-color: pink;
}

.card {
  border: 1px solid grey;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.answer{
  font-style: italic;
  text-transform: lowercase;
}
</style>
