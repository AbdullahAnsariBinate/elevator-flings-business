import { StyleSheet } from 'react-native'
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions'
import { theme } from '../../../utils/constants'

export const styles = StyleSheet.create({
  dataImg: {
    width: responsiveWidth(90),
    height: responsiveScreenHeight(24),
    alignSelf: 'center',
    borderRadius: 10,
  },
  loc: {
    width: '100%',
    height: '100%',
  },
  descContainer: {
    borderBottomColor: theme.color.lightGrey,
    marginHorizontal: 15,
  },
  pastEvent: {
    paddingVertical: responsiveHeight(2),
  },
  profile: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
    borderRadius: 50,
    marginLeft: -12,
  },
  timingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
  },
  scroll: {
    marginTop: 15,
  },
  flatlist: {
    paddingBottom: responsiveHeight(8),
  },
  carouselIcon: {
    width: responsiveWidth(3),
    height: responsiveWidth(3),
  },
  edit: {
    position: 'absolute',
    right: responsiveWidth(7),
    bottom: responsiveWidth(2),
    backgroundColor: theme?.color?.white,
    height: responsiveWidth(7),
    width: responsiveWidth(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  dlt: {
    position: 'absolute',
    right: responsiveWidth(7),
    bottom: responsiveWidth(10),
    backgroundColor: theme?.color?.white,
    height: responsiveWidth(7),
    width: responsiveWidth(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
})
