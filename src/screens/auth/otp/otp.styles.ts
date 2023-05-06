import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '../../../utils/constants'

export const styles = StyleSheet.create({
  backArrow: {
    height: scale(14),
    width: scale(14),
  },
  viewStyles: {
    borderWidth: 0.5,
    borderColor: '#FFFF',
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
    paddingVertical: 15,
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
})
