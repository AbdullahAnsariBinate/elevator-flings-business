import * as React from 'react'
import { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Card, TouchableOpacity, View } from 'react-native-ui-lib'
import { Core } from '../..'
import { Assets } from '../../../../assets'
import { screens } from '../../../screens'
import { theme } from '../../../utils/constants'
import { useStateContext } from '../../../utils/help'
import InfoCard from './component/info'

interface ExpandableCardProps {
  league: LeagueDetails
}

const ExpandableCard = ({ league }: ExpandableCardProps) => {
  const openStatus = useSharedValue(0)

  const { componentId } = useStateContext()
  const onPress = useCallback(() => {
    if (openStatus.value > 0) openStatus.value = withTiming(0)
    else openStatus.value = withTiming(1)
  }, [])

  const onNav = useCallback(() => {
    // screens.push(componentId, 'LeagueDetails')
  }, [])

  const animatedHeightStyle = useAnimatedStyle(() => {
    const input = [0, 1]
    const output = [0, 200]

    const height = interpolate(openStatus.value, input, output)

    return {
      height,
    }
  })

  const animatedArrowIcon = useAnimatedStyle(() => {
    const input = [0, 1]
    const output = [0, 90]

    const rotation = interpolate(openStatus.value, input, output)
    return {
      transform: [
        {
          rotate: `${rotation}deg`,
        },
      ],
    }
  })

  return (
    <Card bg-white marginV-5 style={styles.bg}>
      <TouchableOpacity onPress={onPress} activeOpacity={9.7}>
        <View row spread centerV padding-10>
          <FastImage resizeMode='contain' source={league.league.imageUrl} style={styles.logo} />
          <View reanimated style={animatedArrowIcon}>
            <Core.VectorIcon
              {...{
                vector: 'AntDesign',
                name: 'arrowright',
                size: 20,
                color: theme.color.red,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      <View reanimated height={200} style={[styles.overHidden, animatedHeightStyle]}>
        <View height={200}>
          <View height={1} marginT-0 bg-gray width={'100%'} style={styles.divider} />
          <View padding-10 flex>
            <Core.Text medium mediumSize icnBlue>
              {'Chets $100 Kicker'}
            </Core.Text>

            <TouchableOpacity onPress={onNav} spread row width={'100%'}>
              <InfoCard info={league.info.vs[0]} position='left' />
              <InfoCard info={league.info.vs[1]} position='right' />
            </TouchableOpacity>
            <FastImage resizeMode='contain' source={Assets.Images.images.VS} style={styles.vsIcn} />
          </View>
        </View>
      </View>
    </Card>
  )
}

export default React.memo(ExpandableCard)

const styles = StyleSheet.create({
  container: {},
  logo: {
    height: 40,
    width: 40,
  },
  selfCenter: {},
  overHidden: {
    overflow: 'hidden',
  },
  divider: {
    alignSelf: 'center',
    opacity: 0.4,
  },
  bg: { backgroundColor: theme.color.white },
  vsIcn: {
    height: 40,
    width: 40,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
  },
})
