import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { EditPropertyComponentTypes } from './editproperty.types'
import { Containers, Core } from '../../../components'
import { Picker, TouchableOpacity, View } from 'react-native-ui-lib'
import { icons, images } from '../../../../assets/images'
import FastImage from 'react-native-fast-image'
import { styles } from './editproperty.styles'
import { useGetFormAttributes, useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import { screens } from '../..'
import ImagePicker from 'react-native-image-crop-picker'

const EditPropertyView = (props: EditPropertyComponentTypes) => {
  const { componentId } = useStateContext<NavigationComponentProps>()
  const conf = useGetFormAttributes('EDIT_PROPERTY')
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
          <View row spread paddingT-10 style={styles.allPost} width={'100%'} paddingH-24>
            <View bg-black br30>
              <FastImage source={images?.PostBg1} style={styles.post} resizeMode='contain' />
              <TouchableOpacity style={styles.iconBorder}>
                <FastImage source={icons?.Cross} style={styles.cross} resizeMode='contain' />
              </TouchableOpacity>
            </View>
            <View bg-black br30>
              <FastImage source={images?.PostBg2} style={styles.post} resizeMode='contain' />
              <TouchableOpacity style={styles.iconBorder}>
                <FastImage source={icons?.Cross} style={styles.cross} resizeMode='contain' />
              </TouchableOpacity>
            </View>
            <View bg-black br30>
              <FastImage source={images?.EventPost} style={styles.post} resizeMode='contain' />
              <TouchableOpacity style={styles.iconBorder}>
                <FastImage source={icons?.Cross} style={styles.cross} resizeMode='contain' />
              </TouchableOpacity>
            </View>
            <View bg-black br30>
              <FastImage source={images?.EventPost2} style={styles.post} resizeMode='contain' />
              <TouchableOpacity style={styles.iconBorder}>
                <FastImage source={icons?.Cross} style={styles.cross} resizeMode='contain' />
              </TouchableOpacity>
            </View>
          </View>
          <View paddingB-10 center paddingH-4>
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

export default EditPropertyView
