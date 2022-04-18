<template>
  <div>
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name:'my-button'
};
</script>

<style scoped>
.btn {
  padding: 8px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
  color: black;
  float: right;
}
</style>
