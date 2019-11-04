<template>
  <div>
    <div id="container" @mouseenter="moveEnter" @mouseleave="moveOut">
      <div
        id="bigBox"
        class="fix"
        ref="aa"
        :style="{width:bigBoxWidth+'px',tranform:'translateX(0px)'}"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
var timer;
export default {
  props: ["autoplay", "delay", "width"],
  data() {
    return {
      init: 0,
      play: this.autoplay,
      bigBoxWidth: 0,
      translateX: 0
    };
  },
  methods: {
    moveEnter() { //鼠标移入事件，规定移入轮播暂停，移出轮播继续
      this.play = this.play ? false : true;
      this.$forceUpdate();
      if (!this.play) {
        clearInterval(timer);
      } else {
        this.handleChangePosition();
      }
    },
    moveOut() { //鼠标移出事件，规定移入轮播暂停，移出轮播继续
      this.play = this.play ? false : true;
      this.$forceUpdate();
      if (!this.play) {
        clearInterval(timer);
      } else {
        this.handleChangePosition();
      }
    },
    handleChangePosition() {  //动画事件，采用setInterval和requestAnimationFrame
      var temp = () => {
        if (this.init * -100 == -this.bigBoxWidth) {
          clearInterval(timer);
          requestAnimationFrame(() => {
            this.$refs.aa.style.transition = "none";
            this.$refs.aa.style.transform = `translateX(0px)`;
            requestAnimationFrame(() => {
              this.$refs.aa.style.transition = "all 1s ease";
              this.$refs.aa.style.transform = `translateX(-100px)`;
              this.init = 1;
              this.init++;
              this.handleChangePosition();
            });
          });
        } else {
          this.$refs.aa.style.transition = "all 1s ease";
          this.translateX = this.init * -100;
          this.init++;
        }
        this.$refs.aa.style.transform = `translateX(${this.translateX}px)`;
        this.$forceUpdate();
        return temp;
      };
      timer = setInterval(temp, 1000);
    }
  },
  mounted() { //利用钩子重新构造大盒子里的元素（操作了dom所以在这个钩子中）
    this.$refs.aa.appendChild(this.$refs.aa.children[0].cloneNode(true));
    this.bigBoxWidth = this.$refs.aa.children.length * this.width;
    this.handleChangePosition(); //触发动画函数
  }
};
</script>

<style lang="scss" scoped>
.fix::after {
  content: "";
  display: block;
  clear: both;
}
#container {
  width: 100px;
  height: 50px;
  position: relative;
  overflow: hidden;
}
#bigBox {
}
</style>