<template>
  <div class="container">
    <ServerButton isHome />
    <div class="separator"></div>
    <ServerButton :mentions="3" />
    <ServerButton />
    <ServerButton :mentions="35"  />
    <ServerButton :mentions="5" hasNotification />
    <ServerButton :mentions="1" hasNotification />
    <ServerButton :mentions="8"  />
    <ServerButton :mentions="10" hasNotification />
    <ServerButton />
    <ServerButton />
    <!-- <ServerButton v-for="servers in 18" v-if="servers.id" /> -->
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
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .separator {
    width: 32px;
    border-bottom: 2px solid var(--quaternary);
    margin-bottom: 10px;
  }
</style>
