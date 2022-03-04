const app = new Vue({
  el: '#app',
  data: {
    arrayEmail: [],
    email: null,
  },
  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
          this.arrayEmail.push(res.data.response);
          console.log(this.arrayEmail)
        });
    }
  },
});
