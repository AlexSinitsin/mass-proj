<template>
  <div class="stage" ref="div">
    <div :class="['result-and-stars', { 'result-and-stars-end': id === 6}]">
          <div>
            <div class="result-end" v-if="id === 6"></div>
            <div :class="['star', {'filled-star': (result >= stage)}]" v-else></div>
          </div>
          <div :class="['divider', {'no-divider': id === 6}]"></div>
          <div class="result" ref="result" :style="{left: '-' + (isResultWidth / 2) + 'px'}">{{ (result <= stage && result > stageLess)  ? (result + ' / ' + stage) : stage}}</div>
    </div>
    <div :class="['wrapper-line', {'wrapper-start': id === 1, 'wrapper-end': id === 6}]">
      <div class="line" :style="{width: fill }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageBox',
  props: {
    stage: Number,
    stageLess: Number,
    stageMore: Number,
    result: Number,
    id: Number
  },
  data() {
    return {
      line: 0,
      resultWidth: 0
    }
  },
  mounted() {
    this.line = this.$refs.div.offsetWidth
    this.resultWidth = this.$refs.result.offsetWidth
  },
  updated() {
    this.line = this.$refs.div.offsetWidth
    this.resultWidth = this.$refs.result.offsetWidth
  },
  computed: {
    isLine() {
      return (this.line / (this.stage - this.stageLess)) * (this.result - this.stageLess)
    },
    isResultWidth() {
      return this.resultWidth
    },
    fill() {
      if(this.result < this.stage && this.result >= 0) {
        if(this.result === 0 || this.result > this.stageLess && this.result <= this.stage) {
          return this.isLine + 'px'
        } else return '0%'
      } else return '100%'
    }
  }
}
</script>

<style scoped lang="scss">
.stage {
  flex-grow: 1;
  position: relative;
  
  .wrapper-line {
    height: 40px;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    &.wrapper-start {
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      overflow: hidden
    }
    &.wrapper-end {
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      overflow: hidden
    }
  }
  .line {
    background: #3300FF;
    height: 40px;
    opacity: 0.8;
  }
  .result-and-stars {
    position: absolute;
    right: 0px;
    width: 0px;
    &.result-and-stars-end {
      right: 25px;
    }
    .divider {
      width: 1px;
      height: 40px;
      background: #C4C4C4;
      &.no-divider {
        background: rgba(239, 239, 239, 0.6);;
      }
    }
    .result {
      display: inline-block;
      position: relative;
      white-space: nowrap;
    }
.result-end {
  background: url('../assets/end.svg');
  width: 48px;
  height: 25px;
  position: absolute;
  top: -30px;
  left: -24px;
}  
.star {
  background: url('../assets/star-empty.svg');
  width: 24px;
  height: 22px;
  position: absolute;
  top: -30px;
  left: -12px;
}
.filled-star {
  background: url('../assets/star.svg');
  width: 24px;
  height: 24px;
  background-size: 100%;
}
  }
}

</style>
