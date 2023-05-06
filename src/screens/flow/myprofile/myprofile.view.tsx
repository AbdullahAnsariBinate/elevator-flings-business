import { StyleSheet, ScrollView, Modal, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Containers, Core } from '../../../components'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import { MyprofileComponentTypes } from './myprofile.types'
import { useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import { screens } from '../..'
import FastImage from 'react-native-fast-image'
import { styles } from './myprofile.styles'
import { icons, images } from '../../../../assets/images'
import { Switch } from 'react-native-ui-lib'
import { theme } from '../../../utils/constants'
import { FlashList } from '@shopify/flash-list'
import Requests from '../../../components/requests'
import { dummyData } from './dummy'

const MyprofileView = (props: MyprofileComponentTypes) => {
  const [isEnabled, setIsEnabled] = React.useState(true)
  const { componentId } = useStateContext<NavigationComponentProps>()
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [isModalVisible2, setIsModalVisible2] = React.useState(false)

  const handleVisible = () => {
    setIsModalVisible(!isModalVisible)
  }

  const handleVisible2 = () => {
    setIsModalVisible2(!isModalVisible2)
  }
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
  }

  const handlePrivacy = React.useCallback(() => {
    screens.push(componentId, 'Privacy')
  }, [])
  const handleTerm = React.useCallback(() => {
    screens.push(componentId, 'Term')
  }, [])
  const renderItem = ({ item }: any) => {
    return <Requests imgs={item?.img} btn name2='Remove User' name='Unblock' />
  }

  const handleLogout = React.useCallback(() => {
    screens.push(componentId, 'Login')
  }, [])
  return (
    <Containers.AuthContainer
      marginV-20
      Content={
        <ScrollView showsVerticalScrollIndicator={false}>
          <View paddingV-20 paddingH-15 style={styles.containerMain}>
            <View style={styles.container}>
              <View center>
                <FastImage source={images.Profile3} style={styles.profile} resizeMode='contain' />
                <Core.Text large bold>
                  John Smith
                </Core.Text>
              </View>
              <View row spread style={styles.bio}>
                <Core.Text black regular>
                  Business Name
                </Core.Text>
                <Core.Text black bold>
                  Lorem Ipsum
                </Core.Text>
              </View>
              <View row spread style={styles.bio}>
                <Core.Text black regular>
                  Email Address
                </Core.Text>
                <Core.Text black bold>
                  John@email.com
                </Core.Text>
              </View>
              <View row spread style={styles.bioLast}>
                <Core.Text black regular>
                  Phone Number
                </Core.Text>
                <Core.Text black bold>
                  +123-456-789
                </Core.Text>
              </View>
              <View style={styles.bottomArea} />
            </View>
            <View>
              <View row spread style={styles.notification} marginB-5 marginT-10>
                <Core.Text black large>
                  Notifications
                </Core.Text>
                <Switch
                  value={isEnabled}
                  onValueChange={toggleSwitch}
                  onColor={theme.color.pink}
                  offColor='#e84118'
                />
              </View>
              <View paddingV-5>
                <Core.Button
                  text='Block Profiles'
                  btnIcon={icons.RightArrow}
                  rightIcon
                  spread
                  large
                  center={false}
                  bg-black
                  onPress={handleVisible2}
                />
              </View>
              <View paddingV-5>
                <Core.Button
                  text='Term and Conditions'
                  btnIcon={icons.RightArrow}
                  rightIcon
                  spread
                  large
                  center={false}
                  bg-black
                  onPress={handleTerm}
                />
              </View>
              <View paddingV-5>
                <Core.Button
                  text='Privacy Policy'
                  btnIcon={icons.RightArrow}
                  rightIcon
                  spread
                  large
                  center={false}
                  bg-black
                  onPress={handlePrivacy}
                />
              </View>
              <View paddingV-5>
                <Core.Button
                  text='Delete Account'
                  btnIcon={icons.RightArrow}
                  spread
                  bg-red
                  large
                  onPress={handleVisible}
                />
              </View>
              <View paddingV-5>
                <Core.Button
                  large
                  text='Logout'
                  btnIcon={icons.RightArrow}
                  spread
                  bg-pink
                  onPress={handleLogout}
                />
              </View>
            </View>
          </View>
          <Modal
            animationType='fade'
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
              setIsModalVisible(!isModalVisible)
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Core.Text black bold large>
                  Are you sure?
                </Core.Text>
                <Core.Text black regular marginT-20 center>
                  Do you really want to delete your profile?
                </Core.Text>
                <View row centerV marginT-20>
                  <View bg-flashWhite width={'100%'} br30 paddingV-5>
                    <TextInput
                      placeholder='Enter Password'
                      style={styles.pass}
                      placeholderTextColor={theme?.color?.grey}
                    />
                  </View>
                </View>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={handleVisible}>
                  <Core.Text style={styles.textStyle}>Submit</Core.Text>
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
          <Modal
            animationType='fade'
            transparent={true}
            visible={isModalVisible2}
            onRequestClose={() => {
              setIsModalVisible2(!isModalVisible2)
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Core.Text black bold large>
                  Block Profiles
                </Core.Text>
                <View paddingH-15 row width={'100%'} style={styles.request} paddingT-15>
                  <FlashList data={dummyData} renderItem={renderItem} estimatedItemSize={70} />
                </View>
                <View style={styles.cross}>
                  <Pressable
                    onPress={() => setIsModalVisible2(!isModalVisible2)}
                    style={styles.crossBtn}
                  >
                    <FastImage source={icons?.CrossRed} style={styles.image} resizeMode='contain' />
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      }
    />
  )
}

export default MyprofileView
