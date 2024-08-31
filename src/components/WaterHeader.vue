<template>
  <VAppBar app class="bg-primary">

    <template v-slot:prepend>
      <RouterLink to="/">
        <VAvatar class="bg-white mr-3 elevation-8">
          <VIcon class="text-primary">
            mdi-cup
          </VIcon>
        </VAvatar>
      </RouterLink>
    </template>
    <VAppBarTitle>
      <RouterLink to="/" class="text-decoration-none text-black">
        見字飲水
      </RouterLink>
    </VAppBarTitle>

    <template v-slot:append>
      <WaterLogin />
      <WaterSetting />
      <WaterInfo />
    </template>

    <!--   <VTooltip location="bottom" text="登入"> -->
    <!--     <template v-slot:activator="{ on, attrs }"> -->
    <!--       <VBtn v-bind="attrs" v-on="on" @click="showLogin" icon="mdi-login" class="white--text" v-if="!isLoggedin"> -->
    <!--       </VBtn> -->
    <!--     </template> -->
    <!--   </VTooltip> -->
    <!---->
    <!--   <!-- <v-span v-else>嗨，{{ user.nickname }}</v-span> -->
    <!---->
    <!--   <VTooltip location="bottom" text="設定"> -->
    <!--     <template v-slot:activator="{ on, attrs }"> -->
    <!--       <VBtn v-bind="attrs" v-on="on" @click="setting = true" icon="mdi-cog"> -->
    <!--       </VBtn> -->
    <!--     </template> -->
    <!--   </VTooltip> -->
    <!---->
    <!--   <VTooltip location="bottom" text="咩嚟"> -->
    <!--     <template v-slot:activator="{ on, attrs }"> -->
    <!--       <VBtn v-bind="attrs" v-on="on" @click="info = true" icon="mdi-information-outline" class="white--text"> -->
    <!--       </VBtn> -->
    <!--     </template> -->
    <!--   </VTooltip> -->
  </VAppBar>
</template>

<script>
import { VIcon, VAppBar, VAvatar, VAppBarTitle } from 'vuetify/components';
import { RouterLink } from 'vue-router';
import WaterSetting from './WaterSetting.vue';
import WaterLogin from './WaterLogin.vue';
import WaterInfo from './WaterInfo.vue';

export default {
  name: 'WaterHeader',
  components: {
    VIcon,
    VAppBar,
    VAvatar,
    RouterLink,
    WaterSetting,
    WaterInfo,
    WaterLogin,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
