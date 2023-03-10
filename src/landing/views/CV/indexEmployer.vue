<template>
  <div class="text-start">
    <div class="py-5 bg-grey padding text-darkgrey">
      <h1>
        {{ $t('employer.title') }}
      </h1>
    </div>
    <div class="padding mt-5 d-flex flex-column">
      <form action="">
        <div class="pt-5 w-600 fw-bold ls-0 font-size-14 lh-normal">
          {{ $t('employer.desc') }}
        </div>
        <div class="d-flex flex-column mt-3">
          <div class="text-start font-size-14 fw-bold">
            {{ $t('employer.company') }}
          </div>
          <div class="d-flex mt-3">
            <div class="d-flex flex-column me-4">
              <div class="flex-start font-size-12">{{ $t('employer.company_name') }}</div>
              <input type="text" class="in-text w-240 p-2 font-size-14">
            </div>
            <div class="d-flex flex-column">
              <div class="flex-start font-size-12">{{ $t('employer.company_site') }}</div>
              <input type="text" class="in-text w-240 p-2 font-size-14">
            </div>
          </div>
        </div>
        <div class="d-flex flex-column mt-3">
          <div class="text-start font-size-14 fw-bold">
            {{ $t('employer.company_info') }}
          </div>
          <div class="d-flex mt-3">
            <div class="d-flex flex-column me-4">
              <div class="flex-start font-size-12">{{ $t('employer.position') }}</div>
              <input type="text" class="in-text w-240 p-2 font-size-14">
            </div>
            <div class="d-flex flex-column me-4">
              <div class="flex-start font-size-12">{{ $t('employer.employment') }}</div>
              <select type="text" class="in-text w-240 p-2 font-size-14 bg-white">
                <option value="0">{{$t('employer.full')}}</option>
                <option value="1">{{$t('employer.half')}}</option>
                <option value="2">{{$t('employer.online')}}</option>
              </select>
            </div>
            <div class="d-flex flex-column">
              <div class="flex-start font-size-12">{{ $t('employer.city') }}</div>
              <input type="text" class="in-text w-240 p-2 font-size-14">
            </div>
          </div>
          <div class="d-flex mt-3">
            <div class="d-flex flex-column me-4">
              <div class="flex-start font-size-12">{{ $t('employer.salary') }}</div>
              <input type="text" class="in-text w-240 p-2 font-size-14">
            </div>
            <div class="d-flex flex-column">
              <div class="flex-start font-size-12">{{ $t('employer.experience') }}</div>
              <input type="number" class="in-text w-240 p-2 font-size-14" min="0" max="30">
            </div>
          </div>
          <div class="d-flex flex-column mt-3">
            <div class="flex-start font-size-12">{{ $t('employer.position_desc') }}</div>
            <textarea v-model="textArea" class="font-size-14 p-2 textarea" rows="4"></textarea>
          </div>
        </div>
        <div class="d-flex flex-column mt-3">
          <div class="text-start font-size-14 fw-bold">
            {{ $t('employer.contacts') }}
          </div>
          <div class="d-flex mt-3">
            <div class="d-flex flex-column me-4">
              <div class="flex-start font-size-12">{{ $t('employer.name') }}</div>
              <input type="text" class="in-text w-240 p-2 font-size-14">
            </div>
            <div class="d-flex flex-column me-4">
              <div class="flex-start font-size-12">{{ $t('employer.phone') }}</div>
              <input type="text" class="in-text w-240 p-2 font-size-14">
            </div>
            <div class="d-flex flex-column">
              <div class="flex-start font-size-12">{{ $t('employer.email') }}</div>
              <input type="text" class="in-text w-240 p-2 font-size-14">
            </div>
          </div>
          <div class="mt-5 mb-5">
            <input type="file" onchange="" ref="file" class="file">
            <router-link class="btn btn-primary  rounded-extra px-5 py-2 font-size-13" :to="'/success'">{{ $t('cv.send') }}</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexEmployer"
}
</script>

<style scoped>
  .w-600{
    width:40.25em;
  }
  .ls-0{
    letter-spacing: 0;
  }
  .lh-normal{
    line-height: normal;
  }
  .in-text, .textarea{
    border: 1px solid gray;
    border-radius: 5px;
  }
  .w-240{
    width: 18.25em;
  }
</style>