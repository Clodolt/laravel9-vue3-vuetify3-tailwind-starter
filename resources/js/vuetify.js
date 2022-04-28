import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

export const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                colors: {

                },
                dark: false,
                variables: {},
            },
        },
    },
})
