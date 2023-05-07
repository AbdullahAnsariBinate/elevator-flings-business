import React from 'react'
import { PropertyDetailComponentTypes } from './propertydetail.types'
import { Containers, Core } from '../../../components'
import { Carousel, TouchableOpacity, View } from 'react-native-ui-lib'
import { icons } from '../../../../assets/images'
import FastImage from 'react-native-fast-image'
import { Data } from './data'
import { styles } from './propertydetail.styles'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { theme } from '../../../utils/constants'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import PastEvents from '../../../components/pastevents'
import { dummyData } from './dummy'
import { NavigationComponentProps } from 'react-native-navigation'
import { useStateContext } from '../../../utils/help'
import { screens } from '../..'
import { Alert, Modal, Pressable } from 'react-native'
import { FlashList } from '@shopify/flash-list'

const PropertyDetailView = (props: PropertyDetailComponentTypes) => {
  const { componentId } = useStateContext<NavigationComponentProps>()
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const handleEdit = React.useCallback(() => {
    screens.push(componentId, 'EditProperty')
  }, [])
  const renderItem = ({ item }: any) => {
    return <PastEvents img={item?.img} title={item?.title} />
  }

  const handleVisible = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <Containers.CustomContainer
      marginT-60

      Content={
        <ScrollView>
          <View marginT-10>
            <Carousel
              containerStyle={{
                height: responsiveHeight(32),
              }}
              loop
              autoplay={true}
              pageControlProps={{
                size: 7,
                color: theme.color.pink,
              }}
              pageControlPosition={Carousel.pageControlPositions.UNDER}
            >
              {Data.map((image, i) => {
                return (
                  <View key={i}>
                    <FastImage style={styles.dataImg} source={image.image} resizeMode='cover' />
                    <TouchableOpacity style={styles.edit} onPress={handleEdit}>
                      <FastImage
                        style={styles.carouselIcon}
                        source={image.edit}
                        resizeMode='cover'
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dlt} onPress={handleVisible}>
                      <FastImage
                        style={styles.carouselIcon}
                        source={image.dlt}
                        resizeMode='cover'
                      />
                    </TouchableOpacity>
                  </View>
                )
              })}
            </Carousel>

            <View style={styles.descContainer}>
              <View spread row paddingV-4 centerV>
                <Core.Text large black bold>
                  Lorem Ispum
                </Core.Text>
                <View row>
                  <Core.Text regular black bold marginR-3>
                    Category:
                  </Core.Text>
                  <Core.Text regular black>
                    Lorem ipsum
                  </Core.Text>
                </View>
              </View>
              <View row paddingV-2 centerV>
                <View width={responsiveWidth(4)} height={responsiveWidth(4)}>
                  <FastImage source={icons.Marker} style={styles.loc} resizeMode='contain' />
                </View>
                <Core.Text marginL-5 bold black>Elementum nam laoreet dictumst bibendum</Core.Text>
              </View>
              <View paddingV-2>
                <Core.Text numberOfLines={6} black>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Core.Text>
              </View>
            </View>

            <View>
              <View style={styles.pastEvent} paddingH-15>
                <Core.Text large bold fontBlack>
                  Past Event
                </Core.Text>
              </View>
              <View>
                <FlashList
                  estimatedItemSize={70}
                  data={dummyData}
                  renderItem={renderItem}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
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
                <Core.Text black bold large>
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
    />
  )
}

export default PropertyDetailView
