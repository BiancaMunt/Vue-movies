<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <h1><span>tv</span>Shows</h1>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import 'bootstrap';

#app {
  font-family: emoji, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  span {
    color: #F3C000;
  }

  h1 {
    color: #17A2B8;
  }

  a {
    text-decoration: none;
    font-weight: bold;
  }
}
</style>
