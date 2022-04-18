<template>
  <div class="post">
    <div>
      <div style="color:darkorange;">{{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btn">
      <!--Создаем слушатель события делаем эмит, создаем события слушателя и наверз прокидываем сам пост
       мы отдаем пост по цепочке наверх
       -->
      <!--Для кнопки открыть мы делаем логику чтобы по каждому посту с бекенда получали информацию о посте -->
      <my-button @click="$router.push(`/pages/${post.id}`)">
        <!-- <router-link :to="{ path: `/pages/${post.id}` }"> Открыть </router-link> -->
        Отркыть
      </my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton";
export default {
  name: "post-item",
  components: { MyButton },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  border: 2px solid darkmagenta;
  margin-left: 151.913px;
  margin-right: 151.913px;
  color: black;
  padding: 10px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
}
.post__btn {
  display: flex;
  justify-content: space-between;
}
</style>
