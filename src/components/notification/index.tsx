import { StyleSheet, Text } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Core } from '..'
import { icons, images } from '../../../assets/images'
import { View } from 'react-native-ui-lib'
import { responsiveWidth } from 'react-native-responsive-dimensions'
type Props = {
  imgs?: any
}
const Notification = ({ imgs }: Props) => {
  return (
    <View bg-flashWhite br-30 paddingH-10 row paddingV-10 marginV-5 br40 spread>
      <View row>
        <FastImage source={imgs} style={styles.img} />
        <View marginL-10>
          <View row>
            <Core.Text medium fontBlack>
              Beatrice Foster
            </Core.Text>
            <FastImage source={icons.celendar} style={styles.iconss} />
          </View>
          <Core.Text small fontBlack numberOfLines={1}>
            Has send you a request{' '}
          </Core.Text>
        </View>
      </View>
      <View right>
        <View bg-red br50 centerH centerV width={17} height={17} marginB-5>
          <Core.Text white extraSmall>
            1
          </Core.Text>
        </View>
        <View>
          <Core.Text extraSmall black>
            11:45 PM
          </Core.Text>
        </View>
      </View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  img: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    resizeMode: 'contain',
  },
  iconss: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    resizeMode: 'contain',
    marginLeft: 3,
  },
})
