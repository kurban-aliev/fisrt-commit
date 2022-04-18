<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="span">
      <span>FAQ</span>
      <span>Contact</span>
    </div>
    <div
      class="ya-share2"
      data-curtain
      data-size="s"
      data-color-scheme="blackwhite"
      data-services="facebook,twitter,whatsapp,pinterest"
    ></div>
  </nav>
</template>

<script>
export default {
  name:"nv-bar"
};
</script>

<style scoped>
.span {
  padding-left: 10%;
}
.bg-dark {
  --bs-bg-opacity: 1;
  background-color: black !important;
}

.ya-share2 {
  margin-left: auto;
  padding-right: 10%;
}
span {
  padding: 10px;
}
</style>
