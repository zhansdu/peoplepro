<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light padding position-sticky top-0">
    <div class="container-fluid">
      <router-link
        class="navbar-brand"
        :to="'/'"
      >
        <img
          src="@/assets/images/icon.png"
        >
        <span class="fs-4 fw-bolder fst-italic">
          PeoplePro
        </span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarScroll"
        class="collapse navbar-collapse"
      >
        <router-link
          class="fw-normal text-decoration-none me-4 ms-auto"
          :to="{name:'home'}"
        >
          {{ $t('home') }}
        </router-link>
        <router-link
          class="fw-normal text-decoration-none me-4"
          :to="{name:'vacancies'}"
        >
          {{ $t('vacancies') }}
        </router-link>
        <router-link
          class="fw-normal text-decoration-none me-4"

          :to="{name:'about'}"
        >
          {{ $t('about') }}
        </router-link>
        <div class="ms-4">
          <button class="btn btn-primary rounded-extra px-5 py-2">
            {{ $t('apply') }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {

};
</script>

<style scoped>
</style>
