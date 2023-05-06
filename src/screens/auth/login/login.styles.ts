import { StyleSheet } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { scale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  backArrow: {
    height: scale(14),
    width: scale(14),
  },
  viewStyles: {
    // borderWidth: 0.5,
    borderColor: '#FFFF',
  },
  logo: {
    marginTop: responsiveHeight(15),
  },
  footer: {
    marginTop: responsiveHeight(20),
  },
})
