<template>
  <div>
    <div id="content" :class="content%2==0 ? red : blue">{{content}}</div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data(){
    return {
      red:'red',
      blue:'blue'
    }
  }
};
</script>

<style lang="scss" scoped>
#content {
  width: 100px;
  height: 50px;
  float: left;
}
.red{
  background: red;
}
.blue{
  background: blue;
}
</style>