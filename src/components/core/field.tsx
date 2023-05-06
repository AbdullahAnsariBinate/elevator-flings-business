import * as React from 'react'
import { StyleSheet } from 'react-native'
import { View, Incubator, TouchableOpacity, Image, TextField } from 'react-native-ui-lib'
import { theme } from '../../utils/constants'
import FastImage from 'react-native-fast-image'
import { Core } from '..'
import { ImageSource } from 'react-native-vector-icons/Icon'
import withSecureKey from './hoc/withSecure'
import withOtp from './hoc/withOtp'
import withBgField from './hoc/withBgField'

import { TextInput } from 'react-native-paper'
import { icons, images } from '../../../assets/images'
import withDropdown from './hoc/withDropdown'
import withTextbox from './hoc/withTextbox'
// const { TextField } = Incubator

type FieldHOC = {
  toggleSecure?: void
  styles?: any
  mode?: string
  outlineColor?: string
  newColor?: string
  multiLine?: boolean
  numberOfLines?: number
}

const FieldComponent = ({
  placeHolder,
  icon,
  secure,
  supportSecure,
  toggleSecure,
  spacing,
  label,
  bgColor,
  mode,
  outlineColor,
  newColor,
  multiLine,
  numberOfLines,
}: Field & FieldHOC) => {
  const [text, setText] = React.useState('')
  const [color, setColor] = React.useState(theme.color.grey)
  return (
    <TextInput
      label={label}
      value={text}
      placeholder={placeHolder}
      placeholderTextColor={theme?.color?.grey}
      onChangeText={(text) => setText(text)}
      mode={mode ? 'flat' : 'outlined'}
      multiline={multiLine}
      numberOfLines={numberOfLines}
      left={
        icon && (
          <TextInput.Icon
            icon={icon as ImageSource}
            iconColor={outlineColor ? newColor : color}
            style={styles.leftIcon}
            size={16}
          />
        )
      }
      activeOutlineColor={theme.color.pink}
      outlineColor={outlineColor}
      outlineStyle={{ borderRadius: 12 }}
      style={[{ backgroundColor: theme.color.white, marginTop: 5 }, bgColor]}
      secureTextEntry={secure}
      onFocus={() => {
        setColor(theme.color.red)
      }}
      right={
        supportSecure && (
          <TextInput.Icon
            icon={secure ? icons.Eye : icons.CutEye}
            iconColor={theme.color.grey}
            onPress={toggleSecure}
            size={16}
          />
        )
      }
    />
  )
}

export default React.memo(
  withTextbox(withTextbox(withDropdown(withBgField(withOtp(withSecureKey(FieldComponent)))))),
)

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.color.borderGray,
  },
  containerTight: {
    borderBottomWidth: 1,
    borderColor: theme.color.borderGray,
  },
  leftIcon: {
    borderRightWidth: 1,
    borderRadius: 0,
    borderColor: theme.color.grey,
    paddingRight: 10,
  },
})
