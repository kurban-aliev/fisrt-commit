<template>
  <div class="footer">
    <div class="footer__info" >
      
    </div>
  </div>
</template>

<script>
export default {
  name: "page-footer",
};
</script>

<style>
.footer {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid darkblue;
  height: 20vh;
  margin-top: 15px;
}
.footer__info {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid rgb(8, 8, 7);
  height: 18vh;
  margin: 10px;
}
</style>
