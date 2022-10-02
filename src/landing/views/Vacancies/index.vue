<template>
  <div class="text-start">
    <div class="py-5 bg-grey padding text-darkgrey">
      <h1>
        {{ $t('vacancies.title') }}
      </h1>
    </div>
    <div class="padding pt-5">
      <div class="text-blue mt-5">
        <dropdown-vue :title="'Last vacancies'" />
      </div>
      <div class="grid mt-4 px-4">
        <card-vue
          v-for="(vacancy) in vacancies"
          :key="vacancy"
          class="mt-3"
        />
      </div>
      <div class="d-flex justify-content-center my-4">
        <button class="btn outline-blue py-2 px-4">
          Show more
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

import CardVue from "@/landing/components/Card.vue";
import DropdownVue from "@/landing/components/Dropdown.vue";

const vacancies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default defineComponent({
  components: {
    CardVue,
    DropdownVue
  },
  setup () {
    return { vacancies };
  }
});
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}
</style>
