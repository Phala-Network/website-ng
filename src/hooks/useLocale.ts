import { getCurrentLangKey } from 'ptz-i18n'
import { locales } from '../config/locales'
import { useLocation } from '@reach/router'

export const useLocale = () => {
  const location = useLocation()
  const langKey = getCurrentLangKey(locales, 'en', location.pathname)

  return langKey
}
