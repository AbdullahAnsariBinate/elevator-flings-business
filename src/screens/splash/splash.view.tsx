import * as React from 'react'
import { StyleSheet } from 'react-native'

import Components, { Core } from '../../components'
import { View } from 'react-native-ui-lib'

interface SplashScreenViewProps {}

// eslint-disable-next-line no-empty-pattern
const SplashScreenView = ({}: SplashScreenViewProps) => {
  return (
    // <Components.Gradient style={styles.container}>
    <View bg-white style={styles.container}>
      <View flex center>
        <Components.LogoComponent resizeMode='contain' style={styles.logo} />
      </View>
      <View height={50} marginB-40>
        <Core.Text white center regularSize semibold>
          Powered By{'\n'}Technado
        </Core.Text>
      </View>
    </View>
    // </Components.Gradient>
  )
}

export default SplashScreenView

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 220,
    height: 234,
  },
})
