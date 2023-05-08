import * as React from 'react'
import { useStateContext } from '../../../../utils/help'
import { ChatScreenComponentTypes } from './chatscreen.types'
import { NavigationComponentProps } from 'react-native-navigation'
import { Containers, Core } from '../../../../components'
import { MicroChat } from '../../../../components/chat/microchat'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import { Modal, Pressable, ScrollView } from 'react-native'
import { Message } from './Dummydata'
import { MacroChat } from '../../../../components/chat/macrochat'
import CustomSender from '../../../../components/chat/customsender'
import { Searchbar } from 'react-native-paper'
import { icons, images } from '../../../../../assets/images'
import FastImage from 'react-native-fast-image'
import { styles } from './chatscreen.styles'
import { FlashList } from '@shopify/flash-list'
import { CustomHeader } from '../../../../components/customheader'
import { screens } from '../../..'
import { dummyData } from './dummy'
import Requests from '../../../../components/requests'

const ChatScreenView = (props: ChatScreenComponentTypes) => {

  const [searchQuery, setSearchQuery] = React.useState<string>('')
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const onChangeSearch = (query: string) => setSearchQuery(query)
  const renderItem = ({ item }: any) => {
    return <MicroChat msg={item?.msg} />
  }
  const renderItem1 = ({ item }: any) => {
    return <MacroChat msg={item?.msg} />
  }
  const handleSetting = () => {
    setIsModalVisible(!isModalVisible)
  }
  const renderItem4 = ({ item }: any) => {
    return <Requests imgs={item?.img} btn name2='Block User' name='Reject User' />
  }

  return (
    <Containers.CustomContainer
      Header={
        <>
          <CustomHeader
            title='Chat'
            msgPress={handleSetting}
            icon1={icons.Setting}
            icon2={images.Profile2}
          />
          <Searchbar
            placeholder='Search'
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.search}
            icon={() => <FastImage source={icons.Search} style={styles.img} resizeMode='contain' />}
          />
        </>
      }
      Content={
        <ScrollView>
          <View marginH-15 marginB-10>
            <View style={styles.flats}>
              <FlashList estimatedItemSize={70} data={Message} renderItem={renderItem} />
            </View>
            <View style={styles.flats}>
              <FlashList estimatedItemSize={70} data={Message} renderItem={renderItem1} />
            </View>
            <View style={styles.flats}>
              <FlashList estimatedItemSize={70} data={Message} renderItem={renderItem} />
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
                <Core.Text center bold black large marginB-15>User list</Core.Text>
                <View paddingH-15 style={styles.request}>
                  <FlashList data={dummyData} renderItem={renderItem4} estimatedItemSize={70} />
                </View>
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
        </ScrollView>
      }
      Footer={
        <View>
          <CustomSender />
        </View>
      }
    />
  )
}
export default ChatScreenView
