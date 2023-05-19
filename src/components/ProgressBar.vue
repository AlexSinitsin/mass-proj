<template>
    <div class="progress-bar" ref="div" >
        <div class="nul">0</div>
        <StageBox v-for="(stage, index) in stages" :key="stage.id" :stage="stage.thresholdPoints" :stageLess="stages[index - 1] ? stages[index - 1].thresholdPoints : 0" :stageMore="stages[index + 1] ? stages[index + 1].thresholdPoints : 2000" :result="sumResult" :id="stage.id"/>
    </div>
</template>

<script>
import StageBox from './StageBox.vue'

export default {
  name: 'ProgressBar',
  components: {
    StageBox
  },
  computed: {
    stages() {
      return this.$store.getters.data
    },
    sumResult() {
      return this.$store.getters.sumResult
    },
    div() {
      console.log(this.$refs.div.offsetWidth)
      return this.$refs.div.offsetWidth
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.progress-bar {
  display: flex;
  background: rgba(239, 239, 239, 0.6);
  border-radius: 30px;
  height: 40px;
  margin: 40px;
  position: relative;
 
}

.nul {
  position: absolute;
  bottom: -19px;
  left: 8px
}
</style>
