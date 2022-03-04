const app = new Vue({
  el: '#app',
  data: {
    randomMail: '',
    listRandomMail: [],
  },
  mounted() {
    let i = 0;
    while (i < 10) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          this.randomMail = response.data.response;
          //console.log(this.randomMail);
          if (!this.listRandomMail.includes(this.randomMail)) {
            this.listRandomMail.push(this.randomMail);
            //console.log(this.listRandomMail);
          }
        });

      i++;
    }
  },
});
