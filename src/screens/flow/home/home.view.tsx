import React from 'react'
import { HomeComponentTypes } from './home.types'
import { Containers, Core } from '../../../components'
import { Searchbar } from 'react-native-paper'
import { theme } from '../../../utils/constants'
import FastImage from 'react-native-fast-image'
import { icons, images } from '../../../../assets/images'
import { TabController, View } from 'react-native-ui-lib'
import EventPost from '../../../components/eventpost'
import { data } from './data'
import { FlatList } from 'react-native-gesture-handler'
import { data2 } from './data2'
import { Modal, Pressable, ScrollView, Text, useWindowDimensions } from 'react-native'
import { NavigationComponentProps } from 'react-native-navigation'
import { useStateContext } from '../../../utils/help'
import { screens } from '../..'
import { styles } from './home.styles'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { CustomHeader } from '../../../components/customheader'
import { TouchableOpacity } from 'react-native'
const HomeView = (props: HomeComponentTypes) => {
  const [searchQuery, setSearchQuery] = React.useState<string>('')
  const { componentId } = useStateContext<NavigationComponentProps>()
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [isModalVisible2, setIsModalVisible2] = React.useState(false)

  const handleMessage = React.useCallback(() => {
    screens.push(componentId, 'ChatList')
  }, [])
  const handleNotification = React.useCallback(() => {
    screens.push(componentId, 'Notification')
  }, [])

  const handlePropertydetail = React.useCallback(() => {
    screens.push(componentId, 'PropertyDetail')
  }, [])
  const handlePastEvent = React.useCallback(() => {
    screens.push(componentId, 'MyEvent')
  }, [])

  const handleEventdetail = React.useCallback(() => {
    screens.push(componentId, 'EventDetail')
  }, [])
  const handleAdd = () => {
    setIsModalVisible(!isModalVisible)
  }
  const handleEvent = React.useCallback(() => {
    setIsModalVisible(!isModalVisible)

    screens.push(componentId, 'AddNewEvent')
  }, [])
  const handleProperty = React.useCallback(() => {
    setIsModalVisible(!isModalVisible)

    screens.push(componentId, 'AddNewProperty')
  }, [])

  const FirstRoute = () => (
    <View style={styles.scrollBar}>
      <FlatList renderItem={renderItem} data={data} showsVerticalScrollIndicator={false} />
    </View>
  )
  const renderItem = ({ item }: any) => {
    return <EventPost imgs={item?.images} onPress={handlePropertydetail} />
  }
  const SecondRoute = () => (
    <View paddingH-15 style={styles.scrollBar2}>
      <FlatList
        ListHeaderComponent={
          <View paddingT-10 paddingB-10>
            <Core.Button regular text='Past Event' onPress={handlePastEvent} />
          </View>
        }
        renderItem={renderItem2}
        data={data2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
  const renderItem2 = ({ item }: any) => {
    return <EventPost imgs={item?.images} img onPress={handleEventdetail} />
  }
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })

  const tabItems = [{ label: 'Properties' }, { label: 'Events Posted' }]

  const onChangeSearch = (query: string) => setSearchQuery(query)

  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'Properties' },
    { key: 'second', title: 'Events Posted' },
  ])
  const renderTabBar = (props: any) => (
    <View style={styles.tabCus}>
      <TabBar
        {...props}
        activeColor='#e91e63'
        inactiveColor='#ddd'
        labelStyle={{ fontSize: 16 }}
        style={styles.tabbar}
        indicatorStyle={{ backgroundColor: 'transparent' }}
        renderLabel={({ route, focused }) => (
          <View width={responsiveWidth(41)}>
            <Text
              style={[
                {
                  color: focused ? '#ffffff' : '#000000',
                  backgroundColor: focused ? theme?.color?.pink : 'transparent',
                },
                styles.tabText,
              ]}
            >
              {route.title}
            </Text>
          </View>
        )}
      />
    </View>
  )

  return (
    <Containers.CustomContainer
      Header={
        <CustomHeader
          leftText='Home, John'
          msgPress={handleMessage}
          notiPress={handleNotification}
          icon1={icons.Message}
          icon2={icons.Notification}
          icon3={icons.Plus}
          addPress={handleAdd}
        />
      }
      Content={
        <>
          <Searchbar
            placeholder='Search'
            placeholderTextColor={theme?.color?.grey}
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.search}
            icon={() => <FastImage source={icons.Search} style={styles.img} resizeMode='contain' />}
          />
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
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
                <Pressable style={[styles.button, styles.buttonClose]} onPress={handleEvent}>
                  <Core.Text style={styles.textStyle}>Add New Event</Core.Text>
                </Pressable>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={handleProperty}>
                  <Core.Text style={styles.textStyle}>Add New Property</Core.Text>
                </Pressable>
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
        </>
      }
    />
  )
}

export default HomeView
