<template>
  <div @click="changeMsg">
      {{ msg }}
      <About />
      </div>
</template>

<script>
import About from './about/about.vue'
export default {
name: 'App',
components:{
    About
},
data() {
    return {
        msg: 'vue-demo'
    }
},
methods:{
    changeMsg() {
        try {
            this.msg = 'vue-ddd'
            this.testRender()
        } catch (error) {
            console.log(error);
        }
    },
    testRender() {
        try {
            console.log('执行了');
            
        } catch (error) {
            
        }
    }
}
}
</script>

<style>

</style>