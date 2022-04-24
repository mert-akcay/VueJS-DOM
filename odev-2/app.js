const app = Vue.createApp({
  data() {
    return {
      value: "",
    };
  },
  methods: {
    giveAlert(){
      alert();
    }
  }
});
app.mount("#exercise");
