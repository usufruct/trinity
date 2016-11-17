<template>
  <div class="hello">hello {{ msg }}</div>
</template>

<script>
export default {
  props: ['msg'],
  data () {
    return {};
  }
}
</script>

<style>
.hello {
  color: blue;
}
</style>
