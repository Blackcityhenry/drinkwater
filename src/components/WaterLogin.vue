<template>
  <VTooltip location="bottom" text="登入">
    <template v-slot:activator="{ props }">
      <VBtn v-bind="props" @click="loginDialogModel = true" icon="mdi-account" class="text-white">
      </VBtn>
    </template>
  </VTooltip>

  <v-dialog v-model="loginDialogModel" width="700">
    <v-card>
      <form v-if="!showRegister">
        <v-card-title>
          飲水都要登入
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="login.username" label="用戶名" :color="primary"></v-text-field>
          <a @click="showRegister = true" :class="text">未飲過水？</a>
        </v-card-text>
        <v-card-actions class="pa-5">
          <VBtn @click="loginDialogModel = false">唔登入住</VBtn>
          <v-spacer></v-spacer>
          <VBtn class="bg-primary">見字登入</VBtn>
        </v-card-actions>
      </form>
      <form v-else @submit="regUser()">
        <v-card-title>
          飲水都要注冊
        </v-card-title>
        <v-card-text>
          <p>Q: 點解飲杯水都要注冊？</p>
          <p>A: 登入左之後可以跨裝置記錄你飲左幾多杯水，唔登入就淨係記本機。你諗你。</p>
          <v-text-field v-model="reg.username" label="用戶名" :color="primary" :type="showUsername ? 'text' : 'password'"
            :append-icon="showUsername ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showUsername = !showUsername"
            :append-inner-icon="usernameStatusIcon" @blur="checkUser()" :error="usernameError"
            :error-messages="usernameError ? '有人用左呢個用戶名喇喎' : ''"></v-text-field>
          <v-text-field v-model="reg.nickname" label="花名" :color="primary"></v-text-field>
        </v-card-text>
        <v-card-actions class="pa-5">
          <VBtn @click="showRegister = false">番去登入</VBtn>
          <v-spacer></v-spacer>
          <VBtn type="submit" class="bg-primary"
            :disabled="usernameError || !reg.nickname.length || !reg.nickname.length">見字注冊</VBtn>
        </v-card-actions>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WaterLogin',
  data() {
    return {
      loginDialogModel: false,
      showRegister: false,
      showUsername: false,
      usernameStatusIcon: '', // show username ok, taken, loading
      login: {
        username: '',
      },
      reg: {
        username: '',
        nickname: '',
      },
      usernameError: false,
    }
  },
  methods: {
    checkUser() {
      let endpoint = '/checkuser';
      let data = {
        username: this.reg.username
      }

      this.usernameStatusIcon = 'mdi-loading mdi-spin';

      axios.post(endpoint, data).then(res => {
        if (res.data.result === "true") {
          // true means username taken

          this.usernameStatusIcon = 'mdi-alert-circle-outline';
          this.usernameError = true;
        } else {
          // false means username available

          this.usernameStatusIcon = 'mdi-check';
          this.usernameError = false;
        }
      })
    },
    regUser() {
      let endpoint = 'register';
      let data = this.reg;

      axios.post(endpoint, data).then(res => {

      })
    },
    loginUser() {
      let endpoint = '/login';
      let data = this.login;

      axios.post(endpoint, data).then(res => {

      })
    }
  }
}
</script>

<style></style>
