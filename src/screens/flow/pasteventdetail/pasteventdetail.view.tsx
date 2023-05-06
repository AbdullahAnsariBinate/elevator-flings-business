import React, { useState } from 'react'
import { PastEventDetailComponentTypes } from './pasteventdetail.types'
import { Containers, Core } from '../../../components'
import { Carousel, TouchableOpacity, View } from 'react-native-ui-lib'
import { icons, images } from '../../../../assets/images'
import FastImage from 'react-native-fast-image'
import { Data } from './data'
import { styles } from './pasteventdetail.styles'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { theme } from '../../../utils/constants'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { dummyData } from './dummy'
import Requests from '../../../components/requests'
import { useStateContext } from '../../../utils/help'
import { NavigationComponentProps } from 'react-native-navigation'
import { screens } from '../..'

const PastEventDetailView = (props: PastEventDetailComponentTypes) => {
  const { componentId } = useStateContext<NavigationComponentProps>()

  const renderItem = ({ item }: any) => {
    return <Requests imgs={item?.img} />
  }
  const handleEdit = React.useCallback(() => {
    screens.push(componentId, 'ChatList')
  }, [])


  return (
    <Containers.AppContainer
      Content={
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <Carousel
            containerStyle={{
              height: responsiveHeight(32),
            }}
            loop
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
                    <FastImage style={styles.carouselIcon} source={icons?.Message} resizeMode='contain' />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.dlt} >
                    <FastImage style={styles.carouselIcon} source={icons?.CutEye} resizeMode='contain' />
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
              <Core.Text marginL-5 black bold>
                Elementum nam laoreet dictumst bibendum
              </Core.Text>
            </View>
            <View paddingV-2>
              <Core.Text numberOfLines={6} black>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Core.Text>
            </View>
            <View style={styles.timingContainer}>
              <View row>
                <Core.Text black bold marginR-3>Time:</Core.Text>
                <Core.Text black>10am to 6pm</Core.Text>
              </View>
              <View row centerV>
                <Core.Text marginR-3 black bold>
                  Time:
                </Core.Text>
                <Core.Text black marginR-18>
                  Public
                </Core.Text>
                <FastImage source={images.Profile} style={styles.profile} resizeMode='contain' />
                <FastImage source={images.Profile2} style={styles.profile} resizeMode='contain' />
                <FastImage source={images.Profile3} style={styles.profile} resizeMode='contain' />
                <FastImage source={images.Profile4} style={styles.profile} resizeMode='contain' />
              </View>
            </View>
          </View>

          <View>
            <View style={styles.pastEvent} paddingH-15>
              <Core.Text large bold fontBlack>
                Guests
              </Core.Text>
            </View>
            <View paddingH-15 style={styles.flatlist}>
              <FlatList data={dummyData} renderItem={renderItem} />
            </View>
          </View>
        </ScrollView>
      }
    />
  )
}

export default PastEventDetailView
