<template>
  <div class="text-start">
    <div class="py-5 bg-grey padding text-darkgrey">
      <h1>
        {{ $t('cv.title') }}
      </h1>
    </div>
    <div class="d-flex flex-column">
      <div class="padding pt-5 w-600 fw-bold ls-0 font-size-14 lh-normal">
        {{ $t('cv.desc') }}
      </div>
      <div class="mt-5">
        <form action="" class="grid mw-780 padding">
          <div class="d-flex flex-column mb-3">
            <div class="text-start font-size-14">
              {{ $t('cv.name') }}
            </div>
            <input type="text" class="in-text w-240 p-2 font-size-14">
          </div>
          <div class="d-flex flex-column">
            <div class="text-start font-size-14">
              {{ $t('cv.surname') }}
            </div>
            <input type="text" class="in-text w-240 p-2 font-size-14">
          </div>
          <div class="d-flex flex-column">
            <div class="text-start font-size-14">
              {{ $t('cv.gender') }}
            </div>
            <select type="text" class="in-text w-240 p-2 font-size-14 bg-white">
              <option value="0">{{$t('vacancies.man')}}</option>
              <option value="1">{{$t('vacancies.woman')}}</option>
            </select>
          </div>
          <div class="d-flex flex-column mb-3">
            <div class="text-start font-size-14">
              {{ $t('cv.experience') }}
            </div>
            <input type="number" class="in-text w-240 p-2 font-size-14" min="0" max="30">
          </div>
          <div class="d-flex flex-column">
            <div class="text-start font-size-14">
              {{ $t('cv.position') }}
            </div>
            <input type="text" class="in-text w-240 p-2 font-size-14">
          </div>
          <div class="d-flex flex-column">
            <div class="text-start font-size-14">
              {{ $t('cv.salary') }}
            </div>
            <input type="text" class="in-text w-240 p-2 font-size-14">
          </div>
          <div class="d-flex flex-column mb-3">
            <div class="text-start font-size-14">
              {{ $t('cv.city') }}
            </div>
            <input type="text" class="in-text w-240 p-2 font-size-14">
          </div>
          <div class="d-flex flex-column">
            <div class="text-start font-size-14">
              {{ $t('cv.phone') }}
            </div>
            <input type="text" class="in-text w-240 p-2 font-size-14">
          </div>
          <div class="d-flex flex-column">
            <div class="text-start font-size-14">
              {{ $t('cv.email') }}
            </div>
            <input type="text" class="in-text w-240 p-2 font-size-14">
          </div>
        </form>
      </div>

      <div class="mt-5 mb-5 padding">
          <input type="file" onchange="" ref="file" class="file">
          <router-link class="btn btn-primary  rounded-extra px-5 py-2 font-size-13" :to="'/success'">{{ $t('cv.send') }}</router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
  .w-600{
    width:60.25em;
  }
  .ls-0{
    letter-spacing: 0;
  }
  .lh-normal{
    line-height: normal;
  }
  .grid{
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .mw-780{
    max-width: 78.25em;;
  }
  .w-240{
    width: 18.25em;
  }
  .in-text{
    border: 1px solid gray;
    border-radius: 5px;
  }
  .file{

  }
</style>