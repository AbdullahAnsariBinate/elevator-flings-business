import * as React from 'react'
import { FlatList } from 'react-native'
import { NotificationComponentTypes } from './notification.types'
import { NavigationComponentProps } from 'react-native-navigation'
import { Chats } from './DummyData'
import FastImage from 'react-native-fast-image'
import { styles } from './notification.styles'
import { Searchbar } from 'react-native-paper'
import { View } from 'react-native-ui-lib'
import ChatComponent from '../../../components/chat/chatcomponent'
import { useGetFormAttributes, useStateContext } from '../../../utils/help'
import { Containers, Core } from '../../../components'
import { icons } from '../../../../assets/images'
import Notification from '../../../components/notification'
import { screens } from '../..'

const NotificationView = (props: NotificationComponentTypes) => {
  const [searchQuery, setSearchQuery] = React.useState<string>('')

  const onChangeSearch = (query: string) => setSearchQuery(query)
  const conf = useGetFormAttributes('SIGNUP')

  const { componentId } = useStateContext<NavigationComponentProps>()

  const dummyNav = React.useCallback(() => {
    screens.push(componentId, 'Term')
  }, [])
  return (
    <Containers.AppContainer
      Content={
        <View style={styles.scrollstyle}>
          <Searchbar
            placeholder='Search'
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.chatlist}
            icon={() => (
              <FastImage source={icons.Search} style={styles.chatIcon} resizeMode='contain' />
            )}
          />
          <View paddingH-15 paddingT-15 paddingB-30>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={Chats}
              renderItem={({ item }) => <Notification imgs={item?.imgs} />}
            />
          </View>
        </View>
      }
    />
  )
}
export default NotificationView
