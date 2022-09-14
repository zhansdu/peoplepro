<template>
  <!-- Footer -->
  <footer class="bg-black text-center text-white">
    <div class="d-flex align-items-center justify-content-between top-container-height padding border-bottom border-dark">
      <router-link
        class="navbar-brand"
        :to="'/'"
      >
        <img
          src="@/landing/assets/images/logo_dark.png"
        >
      </router-link>
      <form class="d-flex flex-column">
        <a
          href="#"
          class="align-self-end text-decoration-none link-light"
        >
          {{ $t('main_view.apply_text') }}
        </a>
        <div class="form_input mt-3">
          <input
            class="rounded-extra px-3 small w-100 h-100"
            type="text"
            :placeholder="$t('main_view.mail')"
          >
          <button class="btn btn-primary rounded-extra">
            {{ $t('main_view.follow') }}
          </button>
        </div>
      </form>
    </div>
    <div class="center-container-height padding">
      <div class="d-flex mt-5">
        <div>
          <button class="btn btn-primary">
            {{ $t('main_view.apply') }}
          </button>
        </div>
        <div class="m-auto">
          <router-link
            v-for="(link,index) in links"
            :key="index"
            class="fw-normal text-decoration-none link-light me-5"
            :to="link.link"
          >
            {{ $t(link.name) }}
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="text-center padding bg-darkgrey bottom-container-height d-flex align-items-center justify-content-between"
    >
      <div>
        © 2022 • PeoplePro • All rights reserved
      </div>
      <a
        class="text-white"
        href="https://mdbootstrap.com/"
      >MDBootstrap.com</a>
    </div>
  <!-- Copyright -->
  </footer>
<!-- Footer -->
</template>

<script>
const links = [
  {
    name: "main_view.home",
    link: "/"
  },
  {
    name: "main_view.jobs",
    link: "jobs"
  },
  {
    name: "main_view.people",
    link: "people"
  },
  {
    name: "main_view.vacancies",
    link: "vacancies"
  },
  {
    name: "main_view.about",
    link: "about"
  }
];
export default {
  setup () {
    return {
      links
    };
  }
};
</script>

<style scoped>
  .top-container-height{
    /* 150px / 16 */
    height: 9.375em;
  }

  .center-container-height{
    /* 300px / 16 */
    height: 18.75em;
  }
  .bottom-container-height{
    /* 100px / 16 */
    height: 6.25em;
  }

  .form_input{
    position: relative;
    /* 472px / 16 */
    width:29.5em;
    /* 50px / 16 */
    height:3.125em;
  }

  .form_input>button{
    position: absolute;
    right:7px;
    top:6px;
  }

</style>
