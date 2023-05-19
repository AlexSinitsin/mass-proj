<template>
  <div class="stage">
    <div :class="['game', {'not-play-game':  !(playGame === (game.id - 1))}]" v-for="item in game.games" :key="item.name">
      <div class="play-game" @click="play(game.id, item.name)">{{item.name}}</div>
      <div class="end-game" @click="endGame(game.id, item.name)">Закончить игру {{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageBox',
  data() {
    return {
      temp: 0,
      nameGame: ''
    }
  },
  props: {
    game: Object,
    gameLess: Object
  },
  computed: {
    line() {
      return this.result <= this.stage ? (this.$refs.box.offsetWidth / this.stage) * this.result : (this.$refs.box.offsetWidth / this.stage) * this.stage
    },
    result() {
     
      return this.temp
    },
    sumResult() {
      return this.$store.getters.sumResult
    },
    playGame() {
      return this.$store.getters.stageArrowId
    },
    isNameGame() {
      return this.nameGame
    }
  },
  methods: {
    play(id, name) {

      this.temp += ((this.game.thresholdPoints - this.gameLess.thresholdPoints) / 5)
      this.nameGame = name
      if(this.playGame === (id - 1)) {
   
        this.$store.commit('addBestResult', {id: id, name: name, bestResult: this.result})
      }
      
    },
    endGame(id, name) {
      if(this.playGame === (id - 1)) {
        this.$store.commit('addPlayed', {id: id, name: name})
      }
    }
  },
  watch: {
    sumResult(newValue) {
      
      if(newValue === this.game.thresholdPoints) {
        this.$store.commit('addPlayed', {id: this.game.id, name: this.isNameGame})
      }
    }
  }
}
</script>

<style scoped lang="scss">
.game {
  display: flex;
  flex-flow: column wrap;
  margin: 0px 20px;
  &.not-play-game {
    opacity: 0.5;
  }
  .play-game {
    background: green;
    color: white;
    padding: 20px;
    cursor: pointer
  }
  .end-game {
    background: red;
    color: white;
    padding: 20px;
    cursor: pointer
  }
}

</style>
