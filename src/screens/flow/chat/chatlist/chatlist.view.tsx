import * as React from 'react'
import { FlatList, ScrollView } from 'react-native'
import { useGetFormAttributes, useStateContext } from '../../../../utils/help'
import { ChatListComponentTypes } from './chatlist.types'
import { NavigationComponentProps } from 'react-native-navigation'
import { Containers, Core } from '../../../../components'
import { icons } from '../../../../../assets/images'
import { Chats } from './DummyData'
import FastImage from 'react-native-fast-image'
import { styles } from './chatlist.styles'
import { Searchbar } from 'react-native-paper'
import { theme } from '../../../../utils/constants'
import ChatComponent from '../../../../components/chat/chatcomponent'
import { View } from 'react-native-ui-lib'
import { screens } from '../../..'
import { Profile } from './chat'

const ChatListView = (props: ChatListComponentTypes) => {
  const [searchQuery, setSearchQuery] = React.useState<string>('')

  const onChangeSearch = (query: string) => setSearchQuery(query)
  const conf = useGetFormAttributes('SIGNUP')

  const { componentId } = useStateContext<NavigationComponentProps>()
  const navBar = React.useCallback(() => {
    screens.push(componentId, 'Notification')
  }, [])

  const handleChat = React.useCallback(() => {
    screens.push(componentId, 'ChatScreen')
  }, [])

  return (
    <Containers.CustomContainer
    marginT-50
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
              data={Profile}
              renderItem={({ item }) => <ChatComponent imgs={item?.imgs} handleChat={handleChat} />}
            />
          </View>
        </View>
      }
    />
  )
}
export default ChatListView
