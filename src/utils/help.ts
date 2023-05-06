import { once } from 'lodash'
import { createContext, useContext } from 'react'
import { pageConfiguration } from './constants'
import { sharedElements } from './animations'
import { NavigationComponentProps } from 'react-native-navigation'

export const randomStr = (len = 16) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const charsLength = chars.length
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength))
  }

  return result
}

// const {componentId} = useStateContext<NavigationComponentProps>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createStateContext = once(<T>() => createContext({} as unknown))
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStateContext = <T>() =>
  useContext(createStateContext<NavigationComponentProps | unknown>()) as NavigationComponentProps

export const useGetFormAttributes = (page: Page) => {
  switch (page) {
    case 'LOGIN':
      return pageConfiguration.LOGIN
    case 'SIGNUP':
      return pageConfiguration.SIGNUP
    case 'FORGET_PASS':
      return pageConfiguration.FORGET_PASS
    case 'VERIFY_CODE':
      return pageConfiguration.VERIFY_CODE
    case 'LEAGUE_SIGN':
      return pageConfiguration.LEAGUE_SIGN
    case 'EDIT_PROFILE':
      return pageConfiguration.EDIT_PROFILE
    case 'RESET_PASSWORD':
      return pageConfiguration.RESET_PASSWORD
    case 'ADD_NEWEVENT':
      return pageConfiguration.ADD_NEWEVENT
    case 'ADD_NEWPROPERTY':
      return pageConfiguration.ADD_NEWPROPERTY
    case 'EDIT_PROPERTY':
      return pageConfiguration.EDIT_PROPERTY
    case 'EDIT_EVENT':
      return pageConfiguration.EDIT_EVENT
  }
}

type Pages = 'LEAGUES'
export const useGetSharedElementConfig = (page: Page | Pages) => {
  switch (page) {
    case 'LOGIN':
      return sharedElements.LOGIN
    case 'FORGET_PASS':
      return sharedElements.FORGET_PASS
    case 'LEAGUES':
      return sharedElements.LEAGUES
  }
}
