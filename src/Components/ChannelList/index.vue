<template>
  <div class="channellist">
    <div class="category">
      <div>Canais de Texto</div>
      <div class="category-icon">
        <AddCategoryIcon size='21' />
      </div>
    </div>

    <ChannelButton selected channelName="🖖 boas-vindas" />
    <ChannelButton channelName="🏹 vue-js" />
    <ChannelButton channelName="🕹 jogos" />
    <ChannelButton channelName="⚒ csgo" />
    <ChannelButton channelName="💣 react-js" />
    <ChannelButton channelName="🚧 angular-js" />
    <ChannelButton channelName="🚀 javascript" />
    <ChannelButton channelName="🎨 css" />
    <ChannelButton channelName="🔋 html" />
    <ChannelButton channelName="📱 java" />

  </div>
</template>
<script>
import AddCategoryIcon from 'vue-material-design-icons/Plus';
import ChannelButton from './ChannelButton';
export default {
  components: {
    AddCategoryIcon,
    ChannelButton
  }
}
</script>
<style scoped lang="scss">
  .channellist {
    grid-area: CL;
    background: var(--secondary);
    display: flex;
    flex-direction: column;

    padding: 24px 10px 0 16px;
  }
  .category {
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
    color: var(--grey);
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    .category-icon {
      color: var(--symbol);
      cursor: pointer;
    }
  }
</style>
