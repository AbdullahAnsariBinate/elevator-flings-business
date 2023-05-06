import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Containers, Core } from '../../../components'
import { View } from 'react-native-ui-lib'
import { PrivacyComponentTypes } from './privacy.types'
import { useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import { screens } from '../..'

const PrivacyView = (props: PrivacyComponentTypes) => {
  const { componentId } = useStateContext<NavigationComponentProps>()

  const dummyNav = React.useCallback(() => {
    screens.push(componentId, 'Myprofile')
  }, [])
  return (
    <Containers.AppContainer
      Content={
        <ScrollView>
          <View paddingH-20 paddingV-20>
            <Core.Text small black adjustsFontSizeToFit={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, augue id
              finibus efficitur, nisi risus elementum mi, id ultrices ex leo non felis. Duis
              pellentesque tincidunt orci a lobortis. Proin magna lacus, hendrerit sed felis a,
              tincidunt cursus mi. Donec lobortis eros ut tortor lacinia maximus. Vestibulum quis
              semper enim, vel maximus purus. Vivamus rhoncus porta nisi eget vestibulum. Fusce
              euismod ut sem sed vulputate. Vestibulum turpis eros, lacinia consequat cursus id,
              vulputate sit amet ante. Curabitur in sagittis erat.v{' '}
            </Core.Text>
            <Core.Text small black adjustsFontSizeToFit={true} marginT-10>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, augue id
              finibus efficitur, nisi risus elementum mi, id ultrices ex leo non felis. Duis
              pellentesque tincidunt orci a lobortis. Proin magna lacus, hendrerit sed felis a,
              tincidunt cursus mi. Donec lobortis eros ut tortor lacinia maximus. Vestibulum quis
              semper enim, vel maximus purus. Vivamus rhoncus porta nisi eget vestibulum. Fusce
              euismod ut sem sed vulputate. Vestibulum turpis eros, lacinia consequat cursus id,
              vulputate sit amet ante. Curabitur in sagittis erat.v{' '}
            </Core.Text>
            <Core.Text small black adjustsFontSizeToFit={true} marginT-10>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, augue id
              finibus efficitur, nisi risus elementum mi, id ultrices ex leo non felis. Duis
              pellentesque tincidunt orci a lobortis. Proin magna lacus, hendrerit sed felis a,
              tincidunt cursus mi. Donec lobortis eros ut tortor lacinia maximus. Vestibulum quis
              semper enim, vel maximus purus. Vivamus rhoncus porta nisi eget vestibulum. Fusce
              euismod ut sem sed vulputate. Vestibulum turpis eros, lacinia consequat cursus id,
              vulputate sit amet ante. Curabitur in sagittis erat.v{' '}
            </Core.Text>
          </View>
        </ScrollView>
      }
    />
  )
}

export default PrivacyView

const styles = StyleSheet.create({})
