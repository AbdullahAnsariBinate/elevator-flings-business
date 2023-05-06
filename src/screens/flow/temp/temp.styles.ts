import { StyleSheet } from 'react-native'
import { theme } from '../../../utils/constants'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
  search: {
    flexDirection: 'row-reverse',
    paddingRight: 20,
    borderRadius: 15,
    backgroundColor: theme.color.offWhite,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  img: { height: 20, width: 20 },
  scrollBar: {
    marginHorizontal: 15,
    justifyContent: 'center',
    marginBottom: responsiveHeight(8),
    paddingTop: responsiveHeight(1.5),
  },
  scrollBar2: {
    paddingTop: responsiveHeight(0.8),
    marginBottom: responsiveHeight(8),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
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
    minWidth: '100%',
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
