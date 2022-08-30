<template>
  <navbar-view />
  <router-view />
</template>
<script>
import NavbarView from "./navbar";
export default {
  components: {
    "navbar-view": NavbarView
  }
};
</script>
