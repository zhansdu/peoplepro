<template>
  <div class="text-start">
    <div class="py-5 bg-grey-light padding text-darkgrey">
      <h1>
        {{ $t('cv.title') }}
      </h1>
    </div>
    <div class="d-flex flex-column">
      <div class="padding pt-5 w-600 fw-bold ls-0 font-size-14 lh-normal">
        {{ $t('cv.desc') }}
      </div>
      <form action="">
        <div class="mt-5">
          <div action="" class="grid mw-780 padding">
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
              <select class="in-text w-240 p-2 font-size-14 bg-white">
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
          </div>
        </div>

        <div class="mt-5 mb-5 padding d-flex">
          <div class="d-flex me-5">
            <label
              class="d-flex align-items-center text-blue"
              for="upload"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="attach_file_24px">
                  <path
                    id="icon/editor/attach_file_24px"
                    d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5V5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5V5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5V17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                    fill="currentColor"
                    fill-opacity="0.54"
                  />
                </g>
              </svg>
              {{ $t('cv.attach_cv') }}
              <input
                id="upload"
                type="file"
                style="display:none"
              >
            </label>
          </div>
          <router-link class="btn btn-primary  rounded-extra px-5 py-2 font-size-13" :to="'/success'">{{ $t('cv.send') }}</router-link>
        </div>
      </form>
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