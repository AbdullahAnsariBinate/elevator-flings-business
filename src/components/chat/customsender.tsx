import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native'
import React from 'react'
import { icons } from '../../../assets/images'
import { Containers, Core } from '../../components'
import { View, Image } from 'react-native-ui-lib'
import { theme } from '../../utils/constants'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import FastImage from 'react-native-fast-image'
const CustomSender = () => {
  return (
    <View style={styles.maincontainer} paddingH-15>
      <TouchableOpacity style={styles.attachment}>
        <FastImage source={icons.Smile} style={styles.pin} resizeMode='contain' />
      </TouchableOpacity>
      <TextInput
        placeholder='Write here...'
        placeholderTextColor={theme?.color?.grey}
        style={styles.input}
      />
      <TouchableOpacity style={styles.send}>
        <Image source={icons.send} style={styles.sndicon} />
      </TouchableOpacity>
    </View>
  )
}

export default CustomSender

const styles = StyleSheet.create({
  maincontainer: {
    paddingVertical: responsiveHeight(1),
    backgroundColor: theme?.color?.flashWhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  attachment: {
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,

    borderRightWidth: 1,
    borderColor: theme?.color?.grey,
  },
  pin: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
  },
  send: {
    backgroundColor: theme?.color?.pink,
    padding: 8,
    borderRadius: 5,
    elevation: 2,
  },
  sndicon: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
  },
  input: {
    width: '74%',
  },
})
