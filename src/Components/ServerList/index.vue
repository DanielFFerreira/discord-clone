<template>
  <div class="container">
    <ServerButton />
  </div>
</template>
<script>
import ServerButton from './ServerButton.vue'
export default {
  components: {
    ServerButton
  }
}
</script>
<style scoped lang="scss">
  .container {
    display: flex;
    grid-area: SL;
    flex-direction: column;
    align-items: center;
    background: var(--tertiary);
    padding: 11px 0;
    max-height: 100vh;
  }
</style>
