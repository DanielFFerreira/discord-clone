<template>
  <div id="grid">
    <ServerList />
    <ServerName />
    <ChannelInfo />
    <ChannelList />
    <UserInfo />
    <ChannelData />
    <UserList />
  </div>
</template>
<script>
import ServerList from './ServerList';
import ServerName from './ServerName';
import ChannelList from './ChannelList';
import UserInfo from './UserInfo';
import ChannelInfo from './ChannelInfo';
import ChannelData from './ChannelData';
import UserList from './UserList';
export default {
  components: {
    ServerList,
    ServerName,
    ChannelList,
    UserInfo,
    ChannelInfo,
    ChannelData,
    UserList
  }
};
</script>

<style scoped>
  #grid {
    display: grid;
    height: 100vh;
    grid-template-columns: 71px 240px auto 240px;
    grid-template-rows: 46px auto 52px;
    grid-template-areas:
      "SL SN CI CI"
      "SL CL CD UL"
      "SL UI CD UL"
    ;
  }
</style>
