import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

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
