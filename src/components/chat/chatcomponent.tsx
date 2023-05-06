import { StyleSheet, Text } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Core } from '..'
import { images } from '../../../assets/images'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import { responsiveWidth } from 'react-native-responsive-dimensions'
type Props = {
  imgs?: any
  handleChat?: any
}
const ChatComponent = ({ imgs, handleChat }: Props) => {
  return (
    <TouchableOpacity
      bg-flashWhite
      br-30
      paddingH-10
      row
      paddingV-10
      marginV-5
      br40
      spread
      onPress={handleChat}
    >
      <View row>
        <FastImage source={imgs} style={styles.img} />
        <View marginL-10>
          <Core.Text medium fontBlack>
            Alex
          </Core.Text>
          <Core.Text small fontBlack numberOfLines={1}>
            alex alex alex laex alexchudid alex alex{' '}
          </Core.Text>
        </View>
      </View>
      <View>
        <View bg-red br50 centerH centerV width={17} height={17} marginB-5>
          <Core.Text white extraSmall>
            1
          </Core.Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ChatComponent

const styles = StyleSheet.create({
  img: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    resizeMode: 'contain',
  },
})
