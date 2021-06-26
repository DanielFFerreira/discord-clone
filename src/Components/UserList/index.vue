<template>
  <div>

  </div>
</template>
<script>
import UserRow from './UserRow.vue';
import ramdomName from '../../data/names';
export default {
  components: {

  },
  methods: {
    generateName() {
      return randomName();
    }
  }
}
</script>
<style scoped lang="scss">

</style>
