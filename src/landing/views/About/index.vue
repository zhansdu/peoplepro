<template>
  <div class="text-start">
    <div class="py-5 bg-grey padding text-darkgrey">
      <h1>
        {{ $t('about.title') }}
      </h1>
    </div>
    <div class="padding pt-5">
      <div class="m-5">
        <div>
          For searching of people
        </div>
        <div class="mt-3">
          <form class="grid">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
  }
</style>
