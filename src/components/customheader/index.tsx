import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native-ui-lib'
import { Core } from '..'
import { scale } from 'react-native-size-matters'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import FastImage from 'react-native-fast-image'
import { icons } from '../../../assets/images'

type Props = {
  title?: string
  back?: boolean
  leftText?: string
  backPress?: any
  msgPress?: any
  notiPress?: any
  icon1?: any
  icon2?: any
  icon3?:any
  addPress?:any
}

export const CustomHeader: React.FC<Props> = memo(
  ({ title, back, leftText, backPress, msgPress, notiPress, icon1, icon2, icon3, addPress }: Props) => {
    return (
      <View style={styles.container}>
        <View width={'33%'}  >
          {back && (
            <TouchableOpacity onPress={backPress}>
              <FastImage source={icons?.Back} style={styles.header} resizeMode='contain' />
            </TouchableOpacity>
          )}
          {leftText && (
            <Core.Text bold black large>
              {leftText}
            </Core.Text>
          )}
        </View>
        <View width={'33%'} center>
          {title && (
            <Core.Text bold black large>
              {title}
            </Core.Text>
          )}
        </View>
        <View style={styles.leftHeader} width={'33%'} >
          <TouchableOpacity onPress={addPress}>
            <FastImage source={icon3} style={styles.icons} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity onPress={msgPress}>
            <FastImage source={icon1} style={styles.icon} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity onPress={notiPress} marginL-5>
            <FastImage source={icon2} style={styles.icon} resizeMode='contain' />
          </TouchableOpacity>
        </View>
      </View>
    )
  },
)
CustomHeader.displayName = 'CustomHeader'
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(4),
    backgroundColor: 'white',
    width: responsiveWidth(100),
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    height: responsiveWidth(5),
    width: responsiveWidth(3),
  },
  leftHeader: {
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  icon: {
    height: responsiveWidth(8),
    width: responsiveWidth(8),
  },
  icons:{
    height: responsiveWidth(7),
    width: responsiveWidth(7),
    marginRight:5
  }
})
