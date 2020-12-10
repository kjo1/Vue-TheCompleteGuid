const app = Vue.createApp({
  data() {
    return {
      name: "My name",
      age: 20,
      //   ageInFiveYear: age + 5,
      favNumber: Math.random(),
      imgLink:
        "https://learntalk.org/photos/blog/header_photo/226/Learntalk_BlogPosts_02-19-2018_Some_Any.jpg",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    ranNum() {
      const ranNum = Math.random();
      return ranNum;
    },
  },
});

app.mount("#assignment");
