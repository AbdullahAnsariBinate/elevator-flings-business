import { StyleSheet, TouchableOpacity } from 'react-native'
import * as React from 'react'
import { View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { icons, images } from '../../../assets/images'
import { Core } from '..'

interface Props {
  imgs?: any
  img?: any
  onPress?: any
}

const EventPost = ({ imgs, img, onPress }: Props) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <FastImage source={imgs} style={styles.postImg} resizeMode='contain' />
        {img && (
          <View style={styles.img}>
            <View>
              <Core.Text white>Time: 10am to 6pm</Core.Text>
            </View>
            <View row centerV>
              <Core.Text marginR-18 white>
                Time: Public
              </Core.Text>
              <FastImage source={images.Profile} style={styles.profile} resizeMode='contain' />
              <FastImage source={images.Profile2} style={styles.profile} resizeMode='contain' />
              <FastImage source={images.Profile3} style={styles.profile} resizeMode='contain' />
              <FastImage source={images.Profile4} style={styles.profile} resizeMode='contain' />
            </View>
          </View>
        )}
      </TouchableOpacity>

      <View spread row paddingV-4>
        <Core.Text bold large black>Lorem Ispum</Core.Text>
        <Core.Text black bold>1200, SQFT</Core.Text>
      </View>
      <View row paddingV-2>
        <View width={responsiveWidth(4)} height={responsiveWidth(4)}>
          <FastImage source={icons.Marker} style={styles.loc} resizeMode='contain' />
        </View>
        <Core.Text marginL-5 bold black>Elementum nam laoreet dictumst bibendum</Core.Text>
      </View>
      <View paddingV-2>
        <Core.Text numberOfLines={4}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </Core.Text>
      </View>
    </View>
  )
}

export default EventPost

const styles = StyleSheet.create({
  postImg: {
    width: '100%',
    height: '100%',
  },
  loc: {
    width: '100%',
    height: '100%',
  },
  profile: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
    borderRadius: 50,
    marginLeft: -12,
  },
  img: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    bottom: 12,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  btn: {
    height: responsiveWidth(56),
    width: '100%',
    borderRadius: 20,
  },
})
