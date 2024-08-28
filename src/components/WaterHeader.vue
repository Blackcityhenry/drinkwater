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
    <router-link to="/" class="text-decoration-none black--text">
      <v-toolbar-title>
        見字飲水
      </v-toolbar-title>
    </router-link>


    <v-spacer></v-spacer>

    <VTooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <VBtn v-bind="attrs" v-on="on" @click="showLogin" icon="mdi-login" class="white--text" v-if="!isLoggedin">
        </VBtn>
      </template>
      <span>登入</span> 
    </VTooltip>

    <!-- <v-span v-else>嗨，{{ user.nickname }}</v-span> -->

    <VTooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <VBtn v-bind="attrs" v-on="on" @click="setting = true" icon="mdi-cog">
        </VBtn>
      </template>
      <span>設定</span>
    </VTooltip>

    <VTooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <VBtn v-bind="attrs" v-on="on" @click="info = true" icon="mdi-information-outline" class="white--text">
        </VBtn>
      </template>
      <span>咩嚟</span>
    </VTooltip>
  </VAppBar>
</template>

<script>
import { VIcon, VBtn, VAppBar, VAvatar, VTooltip } from 'vuetify/components';

export default {
  name: 'WaterHeader',
  components: {
    VIcon,
    VBtn,
    VAppBar,
    VTooltip,
    VAvatar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

