import { StyleSheet, FlatList, ImageBackground, Modal } from 'react-native'
import {
  TouchableOpacity,
  View,
  Card,
  Text,
  Colors,
  ScrollBar,
  Image,
  Icon,
  Button,
  KeyboardAwareScrollView,
} from 'react-native-ui-lib'
import { useGetFormAttributes, useStateContext } from '../../utils/help'
import React, { useState } from 'react'
import { Data } from '../../screens/localevents/home/Dummydata'
import { Containers, Core } from '../../components'
import { NavigationComponentProps, Color } from 'react-native-navigation'
import { screens } from '../../screens'

interface Props {
  visible: boolean
  onClose: () => void
}

const MyModal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType='slide' transparent={true} onRequestClose={onClose}>
      <View style={styles.modalview}>
        <View style={styles.modal}>
          <View style={styles.space}>
            <Core.Text bold marginL-70>
              Category
            </Core.Text>

            <Button style={styles.buttonstyle} label={'Close'} onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const Categories: React.FC = () => {
  const { componentId } = useStateContext<NavigationComponentProps>()
  const [modalVisible, setModalVisible] = useState(false)

  const handleOpenModal = React.useCallback(() => {
    setModalVisible(true)
  }, [])

  const handleCloseModal = React.useCallback(() => {
    setModalVisible(false)
  }, [])

  const toEvents = React.useCallback(() => {
    screens.push(componentId, 'Events')
  }, [])

  return (
    <>
      <FlatList
        data={Data}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <View row key={index} paddingB-18 paddingH-16>
            <TouchableOpacity flex row center onPress={() => toEvents()}>
              <ImageBackground
                style={styles.verticalStar}
                source={item.image}
                imageStyle={{ borderRadius: 12 }}
              >
                <TouchableOpacity onPress={handleOpenModal}>
                  <Image source={item.info} style={styles.verticalImage} />
                </TouchableOpacity>
                <Core.Text style={styles.verticalText} white extraBold mediumSize>
                  {item.name}
                </Core.Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        )}
      />
      <MyModal visible={modalVisible} onClose={handleCloseModal} />
    </>
  )
}

export default Categories

const styles = StyleSheet.create({
  horizontalStar: {
    padding: 10,
    height: 140,
    width: 105,
    marginLeft: 14,
  },
  borderstyle: { borderRadius: 12 },
  horizontalImage: {
    position: 'absolute',
    right: 12,
    top: 12,
    resizeMode: 'contain',
    width: 17,
    height: 17,
  },
  horizontalNotification: {
    width: 20,
    height: 20,
  },
  horizontalText: {
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
  },
  verticalStar: {
    borderRadius: 20,
    height: 170,
    width: '99%',
    paddingBottom: 5,
    marginVertical: 5,
    marginLeft: 5,
    paddingRight: 5,
  },
  verticalText: {
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
  },
  verticalImage: {
    position: 'absolute',
    right: 12,
    top: 12,
    resizeMode: 'contain',
    width: 20,
    height: 20,
    tintColor: 'white',
    marginRight: 14,
  },
  spacing: { paddingBottom: 15 },
  touchstyling: { marginVertical: 5, marginLeft: 6 },
  headers: { position: 'absolute', right: 20 },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  modal: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: '80%',
    maxHeight: 200,
    alignSelf: 'center',
  },
  modalview: { justifyContent: 'center', flex: 1 },
  space: { flex: 1, flexDirection: 'column', justifyContent: 'space-between' },
  buttonstyle: { width: 250, height: 50, backgroundColor: 'green' },
})
