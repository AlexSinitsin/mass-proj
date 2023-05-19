<template>
  <div id="app">
    <ProgressBar/>
    <div class="game-box">
      <GameBox v-for="(game, index) in games" :key="game.id" :game="game" :gameLess="games[index - 1] ? games[index - 1] : {thresholdPoints: 0}"/>
    </div>
    
  </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import GameBox from './components/GameBox.vue'

export default {
  name: 'App',
  components: {
    ProgressBar,
    GameBox
  },
  computed: {
    games() {
      return this.$store.getters.data
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.game-box {
  display: flex;
}
</style>
