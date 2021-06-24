<template>
  <div class="container" :class="{ active: selected }">
    <div class="channel-info">
      <HashTagIcon class="hash-icon" :size="20" />
      <div>{{ channelName }}</div>
    </div>
    <div class="channel-actions">
      <InviteIcon class="icon-actions" :size="18" />
      <SettingsIcon class="icon-actions" :size="18" />
    </div>
  </div>
</template>
<script>
import HashTagIcon from "vue-material-design-icons/Pound";
import InviteIcon from "vue-material-design-icons/AccountPlus";
import SettingsIcon from "vue-material-design-icons/CogOutline";

export default {
  components: {
    HashTagIcon,
    InviteIcon,
    SettingsIcon
  },
  props: {
    channelName: String,
    selected: Boolean
  }
}
</script>
<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;
    background: transparent;
    transition: all ease-out 0.2s;

    div {
      display: flex;
      align-items: center;
    }

    .channel-info {
      div {
        color: var(--senary);
        margin-left: 5px;
      }
      .hash-icon {
        color: var(--symbol);
      }
    }
    .channel-actions {
      display: none;
      .icon-actions {
        color: var(--symbol);
        transition: all ease-out 0.2s;
        margin-left: 4px;
        &:hover {
          color: var(--white);
        }
      }
    }

    &.active,
    &:hover {
      background: var(--quinary);
      .channel-info {
        div {
          color: var(--white);
        }
      }
      .channel-actions {
        display: flex;
      }
    }
  }
</style>
