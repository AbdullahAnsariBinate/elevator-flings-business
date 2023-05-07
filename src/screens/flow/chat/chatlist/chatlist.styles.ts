import { StyleSheet } from 'react-native'
import { theme } from '../../../../utils/constants'
import { responsiveHeight } from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
  scrollstyle: { marginTop: 10, paddingBottom:90 },
  chatlist: {
    flexDirection: 'row-reverse',
    paddingRight: 20,
    borderRadius: 15,
    backgroundColor: theme.color.offWhite,
    marginHorizontal: 15,
  },
  chatIcon: { height: 20, width: 20 },
})
