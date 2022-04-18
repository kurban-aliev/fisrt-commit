<template>
  <nav-bar-no-post />
  <div class="content">
    <!-- <div class="post__content" v-for="post in posts" :key="post.id">
      <div style="color: darkorange">{{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}<br /></div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
      <my-button @click="$router.push(`/pagesVuex/${post.id}`)"
        >Открыть</my-button
      >

    </div> -->
    <post-item v-for="post in posts" :key="post.id" :post="post" />
    <div class="page__wraper">
      <div
        class="page"
        v-for="pageNumber in totalPage"
        :key="pageNumber"
        :class="{ current_page: page === pageNumber }"
        @click="pageClick(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import NavBarNoPost from "@/components/NavBarNoPost.vue";
// import MyButton from "@/components/MyButton";
import { mapActions, mapMutations, mapState } from "vuex"; // getters -функция позволяет взять данные из state  и возвращает как данные
export default {
  name: "post-page-vuex",
  components: { NavBarNoPost, PostItem },
  methods: {
    ...mapMutations(["setPage"]),
    ...mapActions(["fetchPostAndImage"]),

    pageClick(pageNumber) {
      this.setPage(pageNumber)
      this.fetchPostAndImage({
        limit: this.limit,
        page: pageNumber,
      });
    },
  },
  mounted() {
    this.fetchPostAndImage({
      limit: this.limit,
      page: this.page,
    });
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPage: (state) => state.post.totalPage,
      images: (state) => state.post.images,
    }),
    // computed: {
    //   allPost() {
    //     return this.$store.getters.allPost;
    //   },
    //   ...mapGetters(["allpost"]),
    // },
    // ...mapGetters(["allpost"]),
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid red;
  margin-top: 40px;
}
/* .post__content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 2px solid darkmagenta;
  margin-left: 151.913px;
  margin-right: 151.913px;
  margin-top: 15px;
  color: black;
  text-align: left;
  padding: 10px;
} */
.page__wraper {
  display: flex;
  border: 1px solid darkorange;
  margin-left: 151.913px;
  margin-right: 300px;
  margin-top: 10px;
  padding: 8px;
  background: rgb(0, 0, 0);
}
.page {
  cursor: pointer;
  color: rgb(243, 0, 0);
  padding-left: 15px;
  font-size: 25px;
}

.current_page {
  border: 2px solid rgb(28, 28, 138);
}
</style>
