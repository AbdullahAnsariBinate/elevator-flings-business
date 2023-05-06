import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { EventDetailComponentTypes } from './addnewevent.types'
import { Containers, Core } from '../../../components'
import { Picker, TouchableOpacity, View } from 'react-native-ui-lib'
import { icons } from '../../../../assets/images'
import FastImage from 'react-native-fast-image'
import { styles } from './addnewevent.styles'
import { useGetFormAttributes, useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import { screens } from '../..'
import ImagePicker from 'react-native-image-crop-picker'

const AddNewEventView = (props: EventDetailComponentTypes) => {
  const { componentId } = useStateContext<NavigationComponentProps>()
  const conf = useGetFormAttributes('ADD_NEWEVENT')
  const [image, setImage] = useState(null)
  const handleLogin = React.useCallback(() => {
    screens.push(componentId, 'Home')
    // screens.N.setRoot(BottomTabActivity())
  }, [])
  const handleForgot = React.useCallback(() => {
    screens.push(componentId, 'Forget')
  }, [])
  const navBar = React.useCallback(() => {
    screens.push(componentId, 'ChatList')
  }, [])

  function handleSelectImage(): void {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((selectedImage: any) => {
        setImage(selectedImage.path)
      })
      .catch((error: Error) => {
        console.log(error)
      })
  }

  return (
    <Containers.AppContainer
      Content={
        <ScrollView>
          <View center marginT-20 paddingH-15>
            <TouchableOpacity style={styles.imagePick} centerH centerV onPress={handleSelectImage}>
              <FastImage source={icons?.UploadRed} style={styles.upload} resizeMode='contain' />
              <Core.Text>Upload Image</Core.Text>
            </TouchableOpacity>
          </View>

          <View center paddingH-4 style={styles.form}>
            <Core.Form
              {...conf}
              ButtonComponent={Core.Button}
              onSubmit={handleLogin}
              onPress={handleForgot}
            />
          </View>
          <View></View>
        </ScrollView>
      }
    />
  )
}

export default AddNewEventView
