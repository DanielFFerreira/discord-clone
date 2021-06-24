<template>
  <div class="userinfo">
    <div class="profile">
      <div class="avatar">
        <img src="https://avatars.githubusercontent.com/u/50724196?v=4" alt="">
      </div>
      <div class="userdata">
        <strong>Daniel Ferreira</strong><span>#2654</span>
      </div>
    </div>
    <div class="actions">
      <Mic :size="20" />
      <HeadPhones :size="20" />
      <Settings :size="20" />
    </div>
  </div>
</template>
<script>
import Mic from "vue-material-design-icons/Microphone";
import HeadPhones from "vue-material-design-icons/Headphones";
import Settings from "vue-material-design-icons/CogOutline";
export default {
  components: {
    Mic,
    HeadPhones,
    Settings
  }
}
</script>
<style lang="scss">
  .userinfo {
    grid-area: UI;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: var(--quaternary);
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 0 0;
  }
  .profile {
    display: flex;
    align-items: center;
  }
  .avatar {
    width: 37px;
    height: 37px;
    border-radius: 50%;
    background: var(--grey);

    img {
      width: 37px;
      height: 37px;
      border-radius: 50%;
    }
  }
  .userdata {
    display: flex;
    flex-direction: column;
    margin-left: 10 px;
    font-size: 13px;

    strong {
      margin-left: 10px;
      display: block;
      color: var(--white);
    }
    span {
      padding-left: 10px;
      color: var(--grey);
    }
  }
  .actions {
    color: var(--grey);

    span {
      cursor: pointer;
      transition: all ease-in-out 0.2s;

      &:hover {
        color: var(--white);
      }
    }
  }
</style>
