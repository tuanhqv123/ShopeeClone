import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HOME_EN from '~/locales/en/home.json'
import HOME_VI from '~/locales/vi/home.json'
import PRODUCTDETAIL_VI from '~/locales/vi/productDetail.json'
import PRODUCTDETAIL_EN from '~/locales/en/productDetail.json'

export const locales = {
  en: 'English',
  vi: 'Tiếng việt'
} as const
export const resources = {
  en: {
    home: HOME_EN,
    product: PRODUCTDETAIL_EN
  },
  vi: {
    home: HOME_VI,
    product: PRODUCTDETAIL_VI
  }
} as const

export const defaultNS = 'home'

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  ns: ['home', 'product'],
  defaultNS,
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false
  }
})
