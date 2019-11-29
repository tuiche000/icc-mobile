<template>
  <div>
      <!-- 详情 {{$route.query.id}} -->
      <Head></Head>
      <Foot></Foot>
    </div>
</template>

<script>
import Foot from './footer'
import Head from './header'
export default {
    components: {
        Foot,
        Head
    }
};
</script>

<style>
</style>