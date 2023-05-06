import { StyleSheet } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { images } from '../../../assets/images'
import { Core } from '..'
import { View } from 'react-native-ui-lib'

type Props = {
  img?: any
  title?: string
}

const PastEvents = ({ img, title }: Props) => {
  return (
    <View style={styles.pastViewCont}>
      <FastImage source={img} style={styles.category} />
      <Core.Text  bold black >
        {title}
      </Core.Text>
    </View>
  )
}

export default PastEvents

const styles = StyleSheet.create({
  category: {
    height: responsiveScreenHeight(24),
    width: responsiveScreenWidth(40),
    borderRadius: 10,
    resizeMode: 'contain',
  },
  pastViewCont: {
    marginLeft: responsiveScreenWidth(4),
  },
})
