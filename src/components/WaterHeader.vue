<template>
  <v-app-bar app>

    <router-link to="/">
      <v-avatar class="white mr-3 elevation-8">
        <v-icon :class="text">
          mdi-cup
        </v-icon>
      </v-avatar>
    </router-link>
    <router-link to="/" class="text-decoration-none black--text">
      <v-toolbar-title>
        見字飲水
      </v-toolbar-title>
    </router-link>


    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" @click="showLogin" fab small text class="white--text" v-if="!isLoggedin">
          <v-icon>
            mdi-login

          </v-icon>
        </v-btn>
      </template>
      <span>登入</span>
    </v-tooltip>

    <!-- <v-span v-else>嗨，{{ user.nickname }}</v-span> -->

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" @click="setting = true" fab small text class="white--text">
          <v-icon>
            mdi-cog
          </v-icon>
        </v-btn>
      </template>
      <span>設定</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" @click="info = true" fab small text class="white--text">
          <v-icon>
            mdi-information-outline
          </v-icon>
        </v-btn>
      </template>
      <span>咩嚟</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  name: 'WaterHeader',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
