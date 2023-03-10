<template>
  <div
    class="d-flex flex-column p-4 mr-4"
    :class="{border:border}"
    :style="'width:' + width+';height:'+height"
  >
    <!-- title -->
    <div class="d-flex">
      <div class="icon me-3">
        <img class="icon-img" src="images/rectangle-5-2@2x.png" alt="mc">
      </div>
      <div>
        <div class="font-size-14">
          MCdonalds
        </div>
        <div class="font-size-12 text-grey">
          udalenka
        </div>
      </div>
    </div>
    <!-- /title -->
    <div class="mt-3">
      <div class="font-size-12 text-darkblack">
        Product manager
      </div>
      <div class="font-size-10 text-grey">
        che tam
      </div>
    </div>
    <div class="font-size-9 grey-text mt-3 line-clamp">
      Posposobstvuyem chtukam
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti numquam deserunt dolor cumque harum, consectetur excepturi officia, fugit modi ad ipsum, recusandae minus asperiores et perspiciatis eligendi autem! Incidunt, distinctio!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti numquam deserunt dolor cumque harum, consectetur excepturi officia, fugit modi ad ipsum, recusandae minus asperiores et perspiciatis eligendi autem! Incidunt, distinctio!
    </div>
    <div class="mt-3">
      <div class="font-size-14">
        <span class="text-darkblack">100$</span>
        <span class="text-grey">/mesyac</span>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <button class="btn bg-darkwhite outline-blue border-transparent rounded-extra p-2 px-5 font-size-12">
        {{ $t('card.view') }}
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    width: {
      type: String,
      default () {
        return "15.625em";
      }
    },
    height: {
      type: String,
      default () {
        return "18.75em";
      }
    },
    border: {
      type: Boolean,
      default () {
        return true;
      }
    }
  },
  setup () {

  }
});
</script>
<style scoped>
  .grey-text{
    color:#828282 !important;
  }
  .icon{
    width:2.5em;
    height: 2.5em;
    border-radius:.3125em;
  }

  .icon-img{
    width: inherit;
  }
  .line-clamp{
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
