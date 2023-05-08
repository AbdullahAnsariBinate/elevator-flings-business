import * as React from 'react'
import { SignupComponentTypes } from './signup.types'
import { useGetFormAttributes, useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import Components, { Containers, Core } from '../../../components'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import { icons, images } from '../../../../assets/images'
import { styles } from './signup.styles'
import { screens } from '../..'

const SignupView = (props: SignupComponentTypes) => {
  const conf = useGetFormAttributes('SIGNUP')

  const { componentId } = useStateContext<NavigationComponentProps>()

  const handleLogin = React.useCallback(() => {
    screens.push(componentId, 'Login')
  }, [])

  const handleForgot = React.useCallback(() => {
    screens.push(componentId, 'Forget')
  }, [])
  return (
    <Containers.AuthContainer
    marginT-10
      Header={
        <View center>
          <View width={120} style={styles.imagesContainer}>
            <View center height={120} width={120} marginT-50>
              <FastImage
                source={images.UploadImg}
                style={styles.uploadProImg}
                resizeMode='contain'
              />
            </View>
            <View center height={30} width={30} bg-red style={styles.uploadIcon}>
              <FastImage source={icons.Upload} style={styles.uploadIconImg} resizeMode='contain' />
            </View>
          </View>
        </View>
      }
      Content={
        <View flex center>
          <Core.Form
            {...conf}
            ButtonComponent={Core.Button}
            forgetPass=''
            onSubmit={handleLogin}
            onPress={handleForgot}
          />
        </View>
      }
      Footer={
        <View center height={60} row marginT-30 marginB-20>
          <Core.Text black regular center>
            Already have an account?{' '}
          </Core.Text>
          <TouchableOpacity onPress={handleLogin}>
            <Core.Text underline pink bold>
              Login
            </Core.Text>
          </TouchableOpacity>
        </View>
      }
    />
  )
}

export default React.memo(SignupView)
