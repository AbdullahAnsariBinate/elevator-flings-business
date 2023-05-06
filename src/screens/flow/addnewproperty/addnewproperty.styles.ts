import { StyleSheet } from 'react-native'
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions'
import { theme } from '../../../utils/constants'

export const styles = StyleSheet.create({
  imagePick: {
    height: responsiveHeight(24),
    width: responsiveWidth(88),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: theme?.color?.imgBorder,
    backgroundColor: theme?.color.flashWhite,
    borderRadius: 10,
  },
  upload: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  form: {
    marginTop: -responsiveHeight(2.5),
    paddingBottom: responsiveHeight(10),
  },
})
