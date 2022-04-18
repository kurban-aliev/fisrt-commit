<template>
  <div class="content">
    <!-- <div class="post__content" v-for="post in posts" :key="post.id">
      <div style="color: darkorange">{{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}<br /></div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
      <my-button @click="$router.push(`/pages/${post.id}`)">Открыть</my-button>

      <router-link :to="{ path: `/pages/${post.id}` }"> Открыть </router-link>
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
import mixinPost from "@/mixins/mixinPost";
import PostItem from "@/components/PostItem.vue";
export default {
  name: "posts-page",
  components: { PostItem },
  mixins: [mixinPost],
  methods: {
    pageClick(pageNumber) {
      this.page = pageNumber;
      this.fetchPost();
    },
    async fetchPost() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`
          // "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
        );
        const posts = await response.json();
        this.posts = posts;
        console.log(posts);

        this.totalPage = Math.ceil(
          response.headers.get("x-total-count") / this.limit
        );
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  mounted() {
    this.fetchPost();
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
.post__content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border: 2px solid darkmagenta;
  margin-left: 151.913px;
  margin-right: 151.913px;
  margin-top: 15px;
  color: black;
  text-align: left;
  padding: 10px;
}
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
