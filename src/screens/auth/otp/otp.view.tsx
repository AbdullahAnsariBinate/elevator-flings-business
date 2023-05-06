import * as React from 'react'
import { OtpComponentTypes } from './otp.types'
import { useGetFormAttributes, useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import Components, { Containers, Core } from '../../../components'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import { screens } from '../..'
import FastImage from 'react-native-fast-image'
import { icons } from '../../../../assets/images'
import { styles } from './otp.styles'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Alert, Modal, Pressable } from 'react-native'

const OtpView = (props: OtpComponentTypes) => {
  const conf = useGetFormAttributes('VERIFY_CODE')
  const { componentId } = useStateContext<NavigationComponentProps>()
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const backHandle = React.useCallback(() => {
    screens.pop(componentId)
  }, [])
  const handleVisible = () => {
    setIsModalVisible(!isModalVisible)
  }
  const handleHome = () => {
    screens.push(componentId, 'Home')
  }

  return (
    <Containers.AuthContainer
      paddingV-20
      Header={
        <View flex spread row>
          <TouchableOpacity onPress={backHandle}>
            <FastImage resizeMode='contain' source={icons.BackArrow} style={styles.backArrow} />
          </TouchableOpacity>
          <Core.Text medium bold mediumSize white>
            Forgot Password
          </Core.Text>
          <View width={20}>
            <Core.Text medium bold mediumSize white></Core.Text>
          </View>
        </View>
      }
      Content={
        <View>
          <View flex center>
            <Components.LogoComponent />
          </View>
          <Core.Form
            {...conf}
            ButtonComponent={Core.Button}
            forgetPass=''
            onSubmit={handleVisible}
            // onPress={handleVisible}
          />

          <View center>
            <Core.Text pink>00:30</Core.Text>
          </View>

          <Modal
            animationType='fade'
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.')
              setIsModalVisible(!isModalVisible)
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Core.Text black bold>
                  Submitted
                </Core.Text>
                <Core.Text black regular marginT-20>
                  Pending verification by Elevator Flings
                </Core.Text>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={handleHome}>
                  <Core.Text style={styles.textStyle}>Done</Core.Text>
                </Pressable>
                <View style={styles.cross}>
                  <Pressable
                    onPress={() => setIsModalVisible(!isModalVisible)}
                    style={styles.crossBtn}
                  >
                    <FastImage source={icons?.CrossRed} style={styles.image} resizeMode='contain' />
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      }
    />
  )
}

export default React.memo(OtpView)
