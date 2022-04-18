<template>
  <nav-bar-no-post></nav-bar-no-post>
  <div class="container">
    <h1>Информация о посте {{ $route.params.id }}</h1>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="card" v-if="post">
        <img :src="post.image.url" class="img-fluid rounded-start" />
        <div class="card-body">
          <h5 class="card-title">{{ post.image.title }}</h5>
          <p class="card-text">{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarNoPost from "@/components/NavBarNoPost";
import mixinPost from "@/mixins/mixinPost";
export default {
  name: "PAGES",
  components: { NavBarNoPost },
  mixins: [mixinPost],
  methods: {
    async fetchPostAndImage(params) {
      try {
        const url = `https://jsonplaceholder.typicode.com/posts?_limit=${params.limit}&_page=${params.page}`;
        const response = await fetch(url);
        const posts = await response.json();

        const url2 = "https://jsonplaceholder.typicode.com/photos";
        const response2 = await fetch(url2);
        const images = await response2.json();
        this.images = images;
        const result = [];
        posts.forEach((post, index) => {
          const image = images[index];
          post.image = image;
          result.push(post);
        });
        this.posts = result;
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  watch: {
    // эта функция запускается при любом изменении вопроса
    posts: function (posts) {
      console.log(posts);
      const post = posts.find((post) => {
        if (+post.id === +this.$route.params.id) {
          return true;
        } else {
          return false;
        }
      });
      this.post = post;
    },
  },
  mounted() {
    this.$route.params.id; //получаем id конкретного поста
    this.fetchPostAndImage({
      limit: this.limit,
      page: this.page,
    }); //!Вызываем fetch
    // const post = this.posts.find((post) => {
    //   //*ищем пост по условию
    //   if (+post.id === +this.$route.params.id) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

    // this.post = post; //!сохраняем пост в переменную пост
  },
};
</script>

<style scoped>
.container {
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  margin-top: 100px;
}
.card-body {
  flex: 1 1 auto;
  padding-top: 100px;
  color: black;
}
.card {
  margin: 0 auto;
}
h1 {
  margin-bottom: 60px;
  color: black;
}
</style>
