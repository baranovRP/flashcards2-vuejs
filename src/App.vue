<template>
  <div id="app">
    <div class="carousel">
      <button class="arrow" @click="prev" v-bind:disabled="isPrevDisable" title="Previous"> &lt; </button>
      <div class="container">
        <section class="cards">
          <card v-for="(card, idx) in cards"
                v-show="idx === currentIdx"
                v-bind:original="card.word"
                v-bind:idx="idx"
                v-bind:key="card.id"></card>
        </section>
      </div>
      <button class="arrow" @click="next" v-bind:disabled="isNextDisable" title="Next"> &gt; </button>
    </div>
    <button @click="update" type="button" title="Update cards">Update</button>
  </div>
</template>

<script src="./App.js">
</script>

<style>
* {
  box-sizing: border-box;
}

.carousel {
  width: 400px;
  display: flex;
  align-items: center;
}

.container{
  width: 200px;
  padding: 0;
  margin: auto;
  overflow: hidden;
}

.cards{
  display: flex;
  padding: 0;
}

.arrow {
  width: 35px;
  height: 35px;
  border: 1px solid grey;
  border-radius: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: lightblue;
}

.arrow:disabled{
  background-color: lightgrey;
}
</style>
