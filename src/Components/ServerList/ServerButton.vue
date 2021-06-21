<template>
  <div class="serverbutton">

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .serverbutton {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin-bottom: 10px;
    background: var(--primary);
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    transition: 0.2s;

    &.active,
    &:hover {
      border-radius: 16px;
      background: var(--discord);
    }
  }
</style>
