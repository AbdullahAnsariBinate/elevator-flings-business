import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import { icons, images } from '../../../assets/images'
import { useStateContext } from '../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import { screens } from '../../screens'
import { id } from 'date-fns/locale'

const HeaderChat = () => {
  return (
    <View flex row spread centerV bg-white>
      <TouchableOpacity style={styles.msgBtn}>
        <FastImage source={icons.Setting} style={styles.msg} resizeMode='contain' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.notiBtn}>
        <FastImage source={images.Profile} style={styles.noti} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderChat

const styles = StyleSheet.create({
  noti: { height: '100%', width: '100%' },
  notiBtn: { height: 35, width: 35, marginHorizontal: 15 },
  msg: { height: '100%', width: '100%' },
  msgBtn: { height: 25, width: 25 },
})
