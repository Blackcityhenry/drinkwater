<template>
  <v-btn fab class="drink-button white--text" :style="'background: linear-gradient(to bottom, #eee 0% , #eee ' + waterarea + ' , #4fc3f7 ' + emptyarea + ' , #4fc3f7 100% )'" @click="drinkWater()">
    <v-icon>
      mdi-cup
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'WaterButton',
  computed: {
    waterlevel: function(){
      var temp = this.countingSec / this.drinkwaterInterval * 100;
      return temp;
    },
    waterarea: function(){
      var temp;
      temp = this.waterlevel - 1 > 0 ? this.waterlevel - 1 : 0;
      temp += '%';
      return temp;
    },
    emptyarea: function(){
      var temp;
      temp = this.waterlevel - 1 < 0 ? 0 : this.waterlevel + 1;
      temp += '%';
      return temp;
    },
  },
  methods:{
    drinkWater(){
      this.resetClock();
      this.cupsOfWaterDrank++;
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
