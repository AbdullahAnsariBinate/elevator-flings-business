import * as React from 'react'
import { StyleSheet } from 'react-native'
import { ForgotPassComponentTypes } from './forgotpass.types'
import { useGetFormAttributes, useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import Components, { Containers, Core } from '../../../components'
import { Image, TouchableOpacity, View, Text } from 'react-native-ui-lib'
import { screens } from '../..'
import { scale } from 'react-native-size-matters'
import FastImage from 'react-native-fast-image'
import { icons, images } from '../../../../assets/images'
import { styles } from './forgotpass.styles'

const ForgotPassView = (props: ForgotPassComponentTypes) => {
  const conf = useGetFormAttributes('FORGET_PASS')

  const { componentId } = useStateContext<NavigationComponentProps>()

  const submit = React.useCallback(() => {
    screens.push(componentId, 'Otp')
  }, [])
  const backHandle = React.useCallback(() => {
    screens.pop(componentId)
  }, [])
  return (
    <Containers.AuthContainer
      Header={
        <View flex spread row>
          <TouchableOpacity onPress={backHandle}>
            <FastImage resizeMode='contain' source={icons.BackArrow} style={styles.backArrow} />
          </TouchableOpacity>
          <Core.Text medium bold mediumSize white>
            Forgot Password
          </Core.Text>
          <View width={20}>
            <Core.Text medium bold mediumSize white></Core.Text>
          </View>
        </View>
      }
      Content={
        <>
          <View flex center>
            <Components.LogoComponent />
          </View>
          <Core.Form {...conf} ButtonComponent={Core.Button} forgetPass='' onSubmit={submit} />
        </>
      }
    />
  )
}

export default React.memo(ForgotPassView)
