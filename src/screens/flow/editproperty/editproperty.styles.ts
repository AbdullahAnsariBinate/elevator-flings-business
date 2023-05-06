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
  post: {
    height: responsiveWidth(18),
    width: responsiveWidth(18),
  },
  cross: {
    height: responsiveWidth(2),
    width: responsiveWidth(2),
  },
  iconBorder: {
    backgroundColor: theme?.color?.red,
    borderWidth: 1,
    borderColor: theme?.color?.white,
    borderRadius: 50,
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -responsiveWidth(1),
    right: -responsiveWidth(1),
  },
  allPost: {
    marginBottom: -responsiveHeight(2),
  },
})
