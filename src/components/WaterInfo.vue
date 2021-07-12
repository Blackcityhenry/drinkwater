<template>
  <v-dialog v-model="setting" width="700">
    <v-card>
      <v-card-title>
        設定
      </v-card-title>
      <v-card-text>
        <v-select v-model="drinkwaterInterval" label="隔幾耐飲一次水" :color="theme" :items="drinkwaterOption" item-value="interval" item-name="text"></v-select>
        <v-switch :color="theme" v-model="recurringNoti" label="提到你飲為止"></v-switch>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :class="theme" @click="setting = false">收皮</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="loginDialog" width="700">
    <v-card>
      <form v-if="!showRegister">
        <v-card-title>
          飲水都要登入
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="login.username" label="用戶名" :color="theme" ></v-text-field>
          <a @click="showRegister = true" :class="text">未飲過水？</a>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn @click="loginDialog = false">唔登入住</v-btn>
          <v-spacer></v-spacer>
          <v-btn :class="theme">見字登入</v-btn>
        </v-card-actions>
      </form>
      <form v-else @submit="">
        <v-card-title>
          飲水都要注冊
        </v-card-title>
        <v-card-text>
          <p>Q: 點解飲杯水都要注冊？</p>
          <p>A: 登入左之後可以跨裝置記錄你飲左幾多杯水，唔登入就淨係記本機。你諗你。</p>
          <v-text-field v-model="reg.username" label="用戶名" :color="theme" :type="showUsername.type" :append-icon="showUsername.icon" @click:append="toggleShowUsername()" @blur="checkUser()" :error="usernameError" :error-messages="usernameError ? '有人用左呢個用戶名喇喎' : ''"></v-text-field>
          <v-text-field v-model="reg.nickname" label="花名" :color="theme"></v-text-field>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn @click="showRegister = false">番去登入</v-btn>
          <v-spacer></v-spacer>
          <v-btn type="submit" :class="theme" :disabled="usernameError || !reg.nickname.length || !reg.nickname.length">見字注冊</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'WaterInfo',
}
</script>

<style>

</style>
