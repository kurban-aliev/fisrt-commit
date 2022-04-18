export const post = {
  state: {
    posts: [],
    images: [],
    totalPage: 0,
    page: 1,
    limit: 5,
  },
  getters: {
    allPost(state) {
      return state.posts;
    },
    allImage(state) {
      return state.images;
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setTotalPage(state, totalPage) {
      state.totalPage = totalPage;
    },
    setPage(state, page) {
      state.page = page;
    },
    setImages(state, images) {
      state.images = images;
    },
  },

  actions: {
    async fetchPost({ commit }, state) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${state.limit}&_page=${state.page}`
          // "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
        );
        const posts = await response.json();
        console.log(response);
        // state.posts = posts;
        commit("setPosts", posts);
        console.log(posts);
        commit(
          "setTotalPage",
          Math.ceil(response.headers.get("x-total-count") / state.limit)
        );
      } catch (error) {
        console.log(error.message);
      }
    },
    async fetchPostAndImage({ commit }, params) {
      try {
        const url = `https://jsonplaceholder.typicode.com/posts?_limit=${params.limit}&_page=${params.page}`;
        const response = await fetch(url);
        const posts = await response.json();
        const url2 = "https://jsonplaceholder.typicode.com/photos";
        const response2 = await fetch(url2);
        const images = await response2.json();
        commit("setImages", images);
        commit(
          "setTotalPage",
          Math.ceil(response.headers.get("x-total-count") / params.limit)
        );

        posts.forEach((post, index) => {
          const image = images[index];
          post.image = image;
        });
        commit("setPosts", posts);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
