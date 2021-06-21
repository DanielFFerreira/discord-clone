<template>
  <div class="serverbutton"
      :class="{
        'serverbutton-isHome': isHome,
        'serverbutton-hasNotification': hasNotification
      }"
    >

    <img src="../../assets/discord.svg" v-if="isHome">
    <div class="mentions" v-if="mentions">{{ mentions }}</div>

  </div>
</template>

<script>
export default {
  props: {
    Selected: Boolean,
    isHome: Boolean,
    hasNotification: Boolean,
    mentions: Number
  }
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
    margin-bottom: 8px;
    background-color: var(--primary);
    cursor: pointer;
    position: relative;
    border-radius: 50%;

    img {
      width: 24px;
      height: 24px;
      color: var(--white);
    }

    &.active,
    &:hover {
      border-radius: 16px;
      background: var(--discord);
    }

    transition: all ease-in-out 0.2s;

    .mentions {
      background-color: var(--notification);
      width: auto;
      height: 24px;
      padding: 0 4px;
      position: absolute;
      bottom: -4px;
      right: -4px;
      border-radius: 12px;
      border: solid 4px var(--quaternary);
      text-align: right;
      font-size: 13px;
      font-weight: bold;
      color: var(--white);
    }
  }

  .serverbutton-isHome {
    background: var(--rocketseat);

    &:active,
    &:hover {
      border-radius: 16px;
      background: var(--rocketseat);
    }
  }

  .serverbutton-hasNotification {
    &::before {
      content: '';
      width: 10px;
      height: 10px;
      background: var(--white);
      position: absolute;
      left: -17px;
      top: calc(50% - 4.5px);
      border-radius: 50%;
      display: block;
    }
  }
</style>
