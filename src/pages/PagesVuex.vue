<template>
  <nav-bar-no-post />
  <div class="container">
    <div
      class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
      v-for="post in allPost"
      :key="post.id"
    >
      <div class="col">
        <div class="card">
          <img :src="post.image.url" class="img-fluid rounded-start" />
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarNoPost from "@/components/NavBarNoPost";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "pages-vuex",
  components: { NavBarNoPost },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPage: (state) => state.post.totalPage,
      images: (state) => state.post.images,
    }),
    ...mapGetters(["allPost"]),
  },
  methods: mapActions(["fetchPostAndImage"]),
  async mounted() {
    this.fetchPostAndImage({
      limit: this.limit,
      page: this.page,
    });
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
  margin-top: 50px;
}

.post {
  display: flex;
  border: 1px solid red;
  margin: 16px;
  flex-direction: row;
  height: 100vh;
  justify-content: space-between;
}
.post__img {
  display: flex;
  width: 18.5%;
  border: 1px solid black;
  margin: 15px;
  height: 200px;
  justify-content: space-between;
}
.post__content {
  display: flex;
  width: 40%;
  border: 1px solid black;
  margin: 15px;
  height: 200px;
  justify-content: space-between;
  color: black;
}
</style>
