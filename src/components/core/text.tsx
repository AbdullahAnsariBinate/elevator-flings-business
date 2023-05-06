import React from 'react'
import { TextStyle } from 'react-native'
import {
  Text as UILibText,
  TypographyModifiers,
  MarginModifiers,
  PaddingModifiers,
} from 'react-native-ui-lib'

type TextProps = {
  light?: boolean
  lightItalic?: boolean
  regular?: boolean
  semibold?: boolean
  semiboldItalic?: boolean
  extraLight?: boolean
  extraLightItalic?: boolean
  bold?: boolean
  boldItalic?: boolean
  extraBold?: boolean
  extraBoldItalic?: boolean
  medium?: boolean
  popinsSemibold?: boolean
  extraSmall?: boolean
  extraVSmall?: boolean
  smallest?: boolean
  small?: boolean
  mediumSize?: boolean
  large?: boolean
  extraLarge?: boolean
  regularSize?: boolean
  heading?: boolean
  children?: unknown

  bg?: boolean
  red?: boolean
  white?: boolean
  icnBlue?: boolean
  fadeBlack?: boolean
  headingBlue?: boolean
  gray?: boolean
  textBlue?: boolean
  bgBlue?: boolean
  darkBlue?: boolean
  statusBar?: boolean
  borderGray?: boolean
  textPurple?: boolean

  adjustsFontSizeToFit?: boolean
  numberOfLines?: number
  onPress?: PVoid
  style?: TextStyle
}

const Component: React.FC<TextProps & TypographyModifiers & MarginModifiers & PaddingModifiers> = (
  props,
) => {
  return <UILibText {...props} />
}

export const Text = React.memo(Component)
