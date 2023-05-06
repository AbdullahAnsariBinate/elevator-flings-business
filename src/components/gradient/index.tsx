import * as React from 'react'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Assets } from '../../../assets'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

interface GradientProps {
  children?: React.ReactNode
  style?: unknown
}

const Gradient = ({ children, style }: GradientProps) => {
  return (
    <FastImage source={Assets.Images.images.BG} style={style || styles.container}>
      {children}
    </FastImage>
  )

  // <RadialGradient
  //
  //   colors={['#208DEE', '#073395']}
  //   stops={[0.35, 1]}
  //   radius={420}
  // >
  //   {children}
  // </RadialGradient>
}

export default React.memo(Gradient)

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
})
