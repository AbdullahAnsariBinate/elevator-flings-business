import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { LoginComponentTypes } from './login.types'
import { useGetFormAttributes, useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import Components, { Containers, Core } from '../../../components'
import { View } from 'react-native-ui-lib'
import { screens } from '../..'
import { styles } from './login.styles'
import { BottomTabActivity } from '../../../../App'

const LoginView = (props: LoginComponentTypes) => {
  const conf = useGetFormAttributes('LOGIN')
  const { componentId } = useStateContext<NavigationComponentProps>()
  console.log(componentId)
  const handleSignup = React.useCallback(() => {
    screens.push(componentId, 'Signup')
  }, [])
  const handleLogin = React.useCallback(() => {
    screens.push(componentId, 'Home')
    screens.N.setRoot(BottomTabActivity())
  }, [])
  const handleForgot = React.useCallback(() => {
    screens.push(componentId, 'Forget')
  }, [])

  return (
    <Containers.AuthContainer
      Content={
        <View flex center>
          <View style={styles.logo}>
            <Components.LogoComponent />
          </View>
          <Core.Form
            {...conf}
            ButtonComponent={Core.Button}
            forgetPass='Forgot Password'
            onSubmit={handleLogin}
            onPress={handleForgot}
          />
        </View>
      }
      Footer={
        <View center height={60} row bg-bl style={styles.footer}>
          <Core.Text black regular>
            Do not have an account ?{' '}
          </Core.Text>
          <TouchableOpacity onPress={handleSignup}>
            <Core.Text underline pink bold>
              Register Now
            </Core.Text>
          </TouchableOpacity>
        </View>
      }
    />
  )
}

export default React.memo(LoginView)
