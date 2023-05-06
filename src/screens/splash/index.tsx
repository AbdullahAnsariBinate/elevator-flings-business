import { NavigationComponentProps } from 'react-native-navigation'
import SplashScreenView from './splash.view'
import React, { useEffect } from 'react'
import { screens } from '..'
import { BottomTabActivity } from '../../../App'

const SplashScreen = ({ componentId }: NavigationComponentProps) => {
  // here we can add hooks we need in inner component

  useEffect(() => {
    setTimeout(() => {
      screens.push(componentId, 'Login')
    }, 3000)
  }, [componentId])

  return <SplashScreenView />
}

export default SplashScreen
