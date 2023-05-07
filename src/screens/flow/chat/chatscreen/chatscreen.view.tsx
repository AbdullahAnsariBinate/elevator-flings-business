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
import { icons } from '../../../../../assets/images'
import FastImage from 'react-native-fast-image'
import { styles } from './chatscreen.styles'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { FlashList } from '@shopify/flash-list'

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
  const handleVisible = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <Containers.CustomContainer
      Header={
        <Searchbar
          placeholder='Search'
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.search}
          icon={() => <FastImage source={icons.Search} style={styles.img} resizeMode='contain' />}
        />
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
                <Core.Text black bold>
                  Are you sure?
                </Core.Text>
                <Core.Text black regular marginT-20 center>
                  Do you really want to delete the lorem ipsum property? This process cannot be
                  undone.
                </Core.Text>
                <View row centerV marginT-20>
                  <TouchableOpacity style={styles.btn} onPress={handleVisible}>
                    <Core.Text white>Accept</Core.Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn1} onPress={handleVisible}>
                    <Core.Text black>Reject</Core.Text>
                  </TouchableOpacity>
                </View>
                <Core.Text style={styles.textStyle}>Done</Core.Text>
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
