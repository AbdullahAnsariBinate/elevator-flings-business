import React from 'react'
import { ScrollView, FlatList } from 'react-native'
import { MyEventComponentTypes } from './myevent.types'
import { Containers, Core } from '../../../components'
import { useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import { screens } from '../..'
import { View } from 'react-native-ui-lib'
import { data2 } from './data2'
import EventPost from '../../../components/eventpost'
import { styles } from './myevent.styles'

const MyEventView = (props: MyEventComponentTypes) => {
  const { componentId } = useStateContext<NavigationComponentProps>()

  const handlePastEventDetail = React.useCallback(() => {
    screens.push(componentId, 'PastEventDetail')
  }, [])
  const renderItem2 = ({ item }: any) => {
    return <EventPost imgs={item?.images} img onPress={handlePastEventDetail} />
  }

  return (
    <Containers.AppContainer
      Content={
        <ScrollView showsVerticalScrollIndicator={false}>
          <View paddingH-15 paddingB-30 style={styles.flatlist}>
            <FlatList renderItem={renderItem2} data={data2} scrollEnabled={false} />
          </View>
        </ScrollView>
      }
    />
  )
}

export default MyEventView
