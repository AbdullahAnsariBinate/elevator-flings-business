import { StyleSheet } from 'react-native'
import { theme } from '../../../utils/constants'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

export const  styles = StyleSheet.create({
  scrollBar: {
    marginHorizontal: 15,
    justifyContent: 'center',
    marginBottom: responsiveHeight(2),
    paddingTop: responsiveHeight(1),
  },
  scrollBar2: {
    paddingTop: responsiveHeight(0.6),
    marginBottom: responsiveHeight(2),
  },
  search: {
    flexDirection: 'row-reverse',
    paddingRight: 20,
    borderRadius: 15,
    backgroundColor: theme.color.offWhite,
    marginHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 4,
  },
  img: { height: 20, width: 20 },
  icons: {
    height: 25,
    width: 25,
  },
  label: {
    color: 'red',
  },
  tabCus:{
    width: '92%',
    borderRadius: 15,
    backgroundColor: theme?.color?.offWhite,
    alignSelf: 'center',
    marginTop: 5,
  },
  tabText:{
    fontFamily: 'SofiaProRegular',
    fontWeight: 'bold',
    paddingVertical: 14,
    textAlign: 'center',
    borderRadius: 10,
    margin: 0,
  },
  tabbar:{ backgroundColor: 'transparent' }
})
