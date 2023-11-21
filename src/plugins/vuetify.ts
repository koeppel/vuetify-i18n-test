/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { useI18n } from 'vue-i18n'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n } from "vue-i18n";

const messages = {
	en: {
		$vuetify: {
			dataIterator: {
				rowsPerPageText: 'Items per page:',
				pageText: '{0}-{1} of {2}',
			},
		},
	},
	sv: {
		$vuetify: {
			dataIterator: {
				rowsPerPageText: 'Element per sida:',
				pageText: '{0}-{1} av {2}',
			},
		},
	},
}

const i18n = createI18n({
	legacy: false,
	locale: 'sv',
	fallbackLocale: 'en',
	messages,
})

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
	locale: {
		adapter: createVueI18nAdapter({ i18n, useI18n }),
	},
	theme: {
		themes: {
			light: {
				colors: {
					primary: '#1867C0',
					secondary: '#5CBBF6',
				},
			},
		},
	},
})
