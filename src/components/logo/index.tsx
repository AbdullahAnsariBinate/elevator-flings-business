import * as React from 'react'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Assets } from '../../../assets'
import { MarginModifiers, View } from 'react-native-ui-lib'
import { FlexModifiers } from 'react-native-ui-lib/src/commons/modifiers'
import { responsiveScreenWidth, responsiveHeight } from 'react-native-responsive-dimensions'

interface LogoProps {
  style?: { width: number; height: number }
  resizeMode?: 'cover' | 'contain'
  blue?: boolean
}
const Logo = ({
  style,
  blue,
  resizeMode = 'contain',
  ...modifiers
}: LogoProps & MarginModifiers & FlexModifiers) => {
  return (
    <View {...modifiers}>
      <FastImage
        nativeID='logo'
        resizeMode={resizeMode}
        style={style || styles.container}
        source={blue ? Assets.Images.images.Logo : Assets.Images.images.Logo}
      />
    </View>
  )
}

export default React.memo(Logo)

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(70),
    height: responsiveScreenWidth(40),
  },
})
