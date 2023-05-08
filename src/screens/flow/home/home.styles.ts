import { StyleSheet } from 'react-native'
import { theme } from '../../../utils/constants'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
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
  tabCus: {
    width: '92%',
    borderRadius: 15,
    backgroundColor: theme?.color?.offWhite,
    alignSelf: 'center',
    marginTop: 5,
  },
  tabText: {
    fontFamily: 'SofiaProRegular',
    fontWeight: 'bold',
    paddingVertical: 14,
    textAlign: 'center',
    borderRadius: 10,
    margin: 0,
  },
  tabbar: { backgroundColor: 'transparent' },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    width: '92%',
    backgroundColor: 'white',
    borderRadius: 20,
    // paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 30,
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
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 2,
    marginTop: 20,
    width: '100%',
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
