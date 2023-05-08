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
  request: {
    minHeight: 100,
    minWidth: 100,
  },
  carouselIcon: {
    width: responsiveWidth(3),
    height: responsiveWidth(3),
  },
  edit: {
    position: 'absolute',
    right: responsiveWidth(7),
    top: responsiveWidth(2),
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
    top: responsiveWidth(10),
    backgroundColor: theme?.color?.white,
    height: responsiveWidth(7),
    width: responsiveWidth(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  msg: {
    position: 'absolute',
    right: responsiveWidth(7),
    top: responsiveWidth(18),
    backgroundColor: theme?.color?.white,
    height: responsiveWidth(7),
    width: responsiveWidth(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    // padding: 25,
    paddingVertical:25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: theme?.color?.pink,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    height: 12,
    width: 12,
  },
  cross: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  crossBtn: {
    padding: 10,
  },
  btn: {
    paddingHorizontal: responsiveWidth(10.5),
    backgroundColor: theme.color.pink,
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(0.5),
    borderRadius: 10,
  },
  btn1: {
    paddingHorizontal: responsiveWidth(10.5),
    height: responsiveHeight(6),
    backgroundColor: theme.color.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(0.5),
    borderRadius: 10,
    borderColor: theme.color.black,
    borderWidth: 2,
    marginLeft: responsiveWidth(1),
  },
  
})
