import { StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import { icons } from '../../../assets/images'
import { screens } from '../../screens'

const HeaderRight = (props:any) => {
  const navBar = () => {
    screens.push('Component3', 'ChatList')
  }
  const noti = React.useCallback(() => {
    screens.push('Component8', 'Notification')
  }, [])

  return (
    <View flex row spread centerV bg-white>
      <TouchableOpacity style={styles.msgBtn} onPress={navBar}>
        <FastImage source={icons.Message} style={styles.msg} resizeMode='contain' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.notiBtn} onPress={noti}>
        <FastImage source={icons.Notification} style={styles.noti} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderRight

const styles = StyleSheet.create({
  noti: { height: '100%', width: '100%' },
  notiBtn: { height: 30, width: 30, marginHorizontal: 10 },
  msg: { height: '100%', width: '100%' },
  msgBtn: { height: 30, width: 30 },
})
