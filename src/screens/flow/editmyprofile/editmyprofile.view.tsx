import React from 'react'
import { Containers, Core } from '../../../components'
import { EditMyprofileComponentTypes } from './editmyprofile.types'
import { useGetFormAttributes, useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import { screens } from '../..'
import { ScrollView } from 'react-native'
import { View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import { icons, images } from '../../../../assets/images'
import { styles } from './editmyprofile.styles'

const EditMyprofileView = (props: EditMyprofileComponentTypes) => {
  const { componentId } = useStateContext<NavigationComponentProps>()
  const conf = useGetFormAttributes('EDIT_PROFILE')
  const handleLogin = React.useCallback(() => {
    screens.push(componentId, 'Home')
    // screens.N.setRoot(BottomTabActivity())
  }, [])
  const handleForgot = React.useCallback(() => {
    screens.push(componentId, 'Forget')
  }, [])

  return (
    <Containers.AppContainer
      Header={
        <View center>
          <View width={120} style={styles.imagesContainer}>
            <View center height={120} width={120} marginT-50>
              <FastImage
                source={images.UploadImg}
                style={styles.uploadProImg}
                resizeMode='contain'
              />
            </View>
            <View center height={30} width={30} bg-red style={styles.uploadIcon}>
              <FastImage source={icons.Upload} style={styles.uploadIconImg} resizeMode='contain' />
            </View>
          </View>
        </View>
      }
      Content={
        <ScrollView>
          <View paddingH-4 paddingV-20 center>
            <Core.Form
              {...conf}
              ButtonComponent={Core.Button}
              onSubmit={handleLogin}
              onPress={handleForgot}
            />
          </View>
        </ScrollView>
      }
    />
  )
}

export default EditMyprofileView
