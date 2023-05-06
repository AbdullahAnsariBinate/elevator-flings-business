import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { Containers, Core } from '../../../components'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import { TempComponentTypes } from './temp.types'
import { useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import { screens } from '../..'
import FastImage from 'react-native-fast-image'
import { icons } from '../../../../assets/images'
import { styles } from './temp.styles'

const TempView = (props: TempComponentTypes) => {
  const { componentId } = useStateContext<NavigationComponentProps>()
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const handleHome = React.useCallback(() => {
    setIsModalVisible(!isModalVisible)
    screens.push(componentId, 'Home')
  }, [])
  const handleNewEvent = React.useCallback(() => {
    screens.push(componentId, 'AddNewEvent')
  }, [])
  const handleNewProperty = React.useCallback(() => {
    screens.push(componentId, 'AddNewProperty')
  }, [])
  return (
    <Containers.AppContainer
      padding-0
      margin-0
      Content={
        <>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View centerV marginT-20>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={handleNewEvent}>
                  <Core.Text style={styles.textStyle}>Add New Event</Core.Text>
                </Pressable>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={handleNewProperty}>
                  <Core.Text style={styles.textStyle}>Add New Property</Core.Text>
                </Pressable>
              </View>
            </View>
          </View>
        </>
      }
    />
  )
}

export default TempView
