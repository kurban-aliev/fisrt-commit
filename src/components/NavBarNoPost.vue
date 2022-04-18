<template>
  <h1>mono blog.</h1>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link dropdown-toggle active"
              aria-current="page"
              href="/"
              >HOME</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-toggle">PAGES</a>
          </li>
          <li class="nav-item" toggle="blank">
            <a class="nav-link dropdown-toggle">PORTFOLIO</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"> BLOG </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-toggle" href="#">SHOP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-toggle" href="#">FEATURES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-toggle" href="#">ELEMENTS</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <hr style="color: black" />
</template>

<script>
export default {
  name: "nav-bar-no-post",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
h1 {
  margin-top: 40px;
  margin-bottom: 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: normal;
  color: black;
  text-align: center;
}
.nav-item {
  padding-right: 30px;
}
.navbar-light .navbar-nav .nav-link {
  color: black;
}
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .show > .nav-link {
  color: rgba(76, 1, 197, 0.9);
}
</style>
