/* eslint-disable react/display-name */
import React, { PropsWithChildren } from 'react'
import {
  NavigationComponentProps,
  NavigationFunctionComponent,
  Navigation,
} from 'react-native-navigation'

import { ServicesProvider } from '../services'
import { StoresProvider } from '../stores'
import { createStateContext } from './help'

export const SSProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <StoresProvider>
      <ServicesProvider>{children}</ServicesProvider>
    </StoresProvider>
  )
}

// RNN component wrapper (provider)
export const withSS = (C: NavigationFunctionComponent) => (props: NavigationComponentProps) =>
  (
    <SSProvider>
      <C {...props} />
    </SSProvider>
  )

export const withNavigationPropsDrilling =
  (C: NavigationFunctionComponent) => (props: NavigationComponentProps) => {
    const StateContext = createStateContext<NavigationComponentProps>()
    return (
      <StateContext.Provider value={props}>
        <C {...props} />
      </StateContext.Provider>
    )
  }
