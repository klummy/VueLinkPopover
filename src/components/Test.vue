<template>
  <div class="test">
    <h1>Hello vue-link-popover!</h1>
    <input v-model="name" placeholder="Name" />
  </div>
</template>

<script>
export default {
  name: 'test',

  data () {
    return {
      name: 'world'
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  h1 {
    color: #40b883;
  }
}
</style>
