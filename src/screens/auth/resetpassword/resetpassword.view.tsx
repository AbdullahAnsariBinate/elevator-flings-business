import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { ResetPassComponentTypes } from './resetpassword.types'
import Components, { Containers, Core } from '../../../components'
import { View } from 'react-native-ui-lib'
import { useGetFormAttributes, useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import { screens } from '../..'

const ResetPassView = (props: ResetPassComponentTypes) => {
  const conf = useGetFormAttributes('RESET_PASSWORD')
  const { componentId } = useStateContext<NavigationComponentProps>()

  const handleLogin = React.useCallback(() => {
    screens.push(componentId, 'Login')
  }, [])
  const handleForgot = React.useCallback(() => {
    screens.push(componentId, 'Forget')
  }, [])

  return (
    <Containers.AuthContainer
      Content={
        <View flex center>
          <Components.LogoComponent />
          <Core.Form
            {...conf}
            ButtonComponent={Core.Button}
            forgetPass=''
            onSubmit={handleLogin}
            onPress={handleForgot}
          />
        </View>
      }
    />
  )
}

export default ResetPassView

const styles = StyleSheet.create({})
