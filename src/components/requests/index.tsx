import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import { Core } from '..'
import { images } from '../../../assets/images'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { theme } from '../../utils/constants'

type Props = {
  imgs?: any
  btn?: any
  name?: string
  name2?: string
}

const Requests = ({ imgs, btn, name, name2 }: Props) => {
  return (
    <View row spread bg-flashWhite paddingV-10 paddingH-10 marginV-4 br30>
      <View row centerV>
        <FastImage source={imgs} style={styles.profile} />
        <Core.Text marginL-8 black medium bold numberOfLines={2}>
          John
        </Core.Text>
      </View>
      {btn && (
        <View row centerV>
          <TouchableOpacity style={styles.btn}>
            <Core.Text white>{name}</Core.Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1}>
            <Core.Text black>{name2}</Core.Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Requests

const styles = StyleSheet.create({
  profile: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: 50,
  },
  btn: {
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: theme.color.pink,
    height: responsiveHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(0.5),
    borderRadius: 10,
  },
  btn1: {
    paddingHorizontal: responsiveWidth(3),
    height: responsiveHeight(5),
    backgroundColor: theme.color.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(0.5),
    borderRadius: 10,
    borderColor: theme.color.black,
    borderWidth: 2,
    marginLeft: responsiveWidth(1),
  },
})
