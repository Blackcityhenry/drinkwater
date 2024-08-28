import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
// import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.lightBlue.lighten2
        }
      }
    }
  }
});
