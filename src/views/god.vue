<template>
  <div class="panel" @click="onClick">
    <text class="text">gods</text>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: ["A", "B", "C", "D", "E"]
    };
  },

  methods: {
    onClick(e) {
      weex.requireModule("navigator").pop({
        animated: "true"
      });

      // let navigator = weex.requireModule("navigator");
      // navigator.push(
      //   {
      //     url: targetUrl,
      //     animated: "true"
      //   },
      //   event => {
      //     console.log("callback: ", event);
      //   }
      // );
      // weex.requireModule("modal").toast({
      //   message: `This is a ${this.name}`,
      //   duration: 0.5
      // });
    }
  }
};
</script>

<style scoped>
.panel {
  width: 600px;
  height: 300px;
  margin-left: 75px;
  margin-top: 35px;
  margin-bottom: 35px;
  flex-direction: column;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
}
.text {
  font-size: 88px;
  text-align: center;
  color: #41b883;
}
</style>