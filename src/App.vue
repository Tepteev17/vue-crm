<template>
  <div class="app">
    <component :is ='layout'>
        <router-view/>
    </component>
  </div>
</template>
<script>
import EmptyLayout from '@/layouts/emptyLayout.vue'
import mainLayout from '@/layouts/mainLayout.vue'
export default{
  computed:{
    layout(){
      return (this.$route.meta.layout || 'emptyLayout')
    }
  },
  components:{
    EmptyLayout, mainLayout
  }
}
</script>
<style>
@import '@/assets/styles/main-style.css';
</style>
