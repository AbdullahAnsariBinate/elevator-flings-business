import { StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import { icons } from '../../../assets/images'
import { useStateContext } from '../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import { screens } from '../../screens'

const HeaderRight2 = () => {
  const { componentId } = useStateContext<NavigationComponentProps>()
  const navBar = React.useCallback(() => {
    console.log('msg')
    screens.push('Component10', 'ChatList')
  }, [])
  const noti = React.useCallback(() => {
    console.log('edit')
    screens.push('Component10', 'EditMyprofile')
  }, [])

  return (
    <View flex row spread centerV bg-white>
      <TouchableOpacity style={styles.msgBtn} onPress={navBar}>
        <FastImage source={icons.Message} style={styles.msg} resizeMode='contain' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.notiBtn} onPress={noti}>
        <FastImage source={icons.Edit} style={styles.noti} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderRight2

const styles = StyleSheet.create({
  noti: { height: '100%', width: '100%' },
  notiBtn: { height: 25, width: 25, marginRight: 15, marginLeft: 10 },
  msg: { height: '100%', width: '100%' },
  msgBtn: { height: 30, width: 30 },
})
