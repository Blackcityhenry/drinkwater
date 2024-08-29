<template>
  <VAppBar app class="bg-primary">

    <template v-slot:prepend>
      <router-link to="/">
        <VAvatar class="bg-white mr-3 elevation-8">
          <VIcon class="">
            mdi-cup
          </VIcon>
        </VAvatar>
      </router-link>
    </template>
    <VAppBarTitle>
      <router-link to="/" class="text-decoration-none black--text">
        見字飲水
      </router-link>
    </VAppBarTitle>

    <template v-slot:append>
      <WaterSetting />
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
import { VIcon, VBtn, VAppBar, VAvatar, VAppBarTitle } from 'vuetify/components';
import WaterSetting from './WaterSetting.vue';

export default {
  name: 'WaterHeader',
  components: {
    VIcon,
    VBtn,
    VAppBar,
    VAvatar,
    WaterSetting
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

