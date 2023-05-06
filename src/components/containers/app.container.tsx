import { If } from '@kanzitelli/if-component'
import * as React from 'react'
import { useCallback, useEffect } from 'react'
import { BackHandler, Dimensions, NativeEventSubscription, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
// import { getStatusBarHeight } from 'react-native-status-bar-height'
import { KeyboardAwareScrollView, TouchableOpacity, View, StatusBar } from 'react-native-ui-lib'
import {
  AlignmentModifiers,
  FlexModifiers,
  MarginModifiers,
  PaddingModifiers,
  PositionModifiers,
} from 'react-native-ui-lib/src/commons/modifiers'
import Components, { Core } from '..'
import { Assets } from '../../../assets'
import { screens } from '../../screens'
import { theme } from '../../utils/constants'
import { createStateContext, useStateContext } from '../../utils/help'
import DrawerComponent from '../drawer'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const SCALED_CONTAINER_TRANSLATEX = Dimensions.get('window').width / 1.2
const SCALED_CONTAINER_TRANSLATEX_BACKBOX = Dimensions.get('window').width / 1.28

export interface AppContainerProps {
  Header?: React.ReactNode
  Content?: React.ReactNode
  Footer?: React.ReactNode
  bgHeight?: number
  fromBgHeight?: number
  back?: boolean
  menu?: boolean
  bgTop?: number
  keyboardAware?: boolean
  noPadding?: boolean
  title?: string
  subTitle?: string
  newPad?: any
}

// paddingT-15
const AppContainer = ({
  newPad,
  Header,
  Content,
  Footer,
  bgHeight,
  // fromBgHeight,
  bgTop = 0,
  menu,
  back,
  noPadding = false,
  title,
  subTitle,
  keyboardAware,
  ...modifiers
}: AppContainerProps &
  FlexModifiers &
  MarginModifiers &
  PaddingModifiers &
  PositionModifiers &
  AlignmentModifiers) => {
  const DrawerContext = createStateContext()
  const { componentId } = useStateContext()
  useEffect(() => {
    // if (bgHeight) height.value = withDelay(100, withTiming(bgHeight))
  }, [bgHeight])

  const drawerStatus = useSharedValue(0)
  const backHandler = React.useRef<NativeEventSubscription>()
  const onDrawer = useCallback(() => {
    drawerStatus.value = drawerStatus.value ? withTiming(0) : withTiming(1)
    if (drawerStatus.value) {
      if (backHandler.current) {
        backHandler.current.remove()
      }
    } else {
      backHandler.current = BackHandler.addEventListener('hardwareBackPress', handleBackPress)
    }
  }, [])

  const handleBackPress = () => {
    onDrawer()
    return true
  }

  const containerAnimatedStyle = useAnimatedStyle(() => {
    const input = [0, 1]
    const scaleXOutput = [1, 0.6]
    const scaleYOutput = [1, 0.7]
    const translateXOutput = [0, SCALED_CONTAINER_TRANSLATEX]
    const radiusOutput = [0, 30]

    const scaleX = interpolate(drawerStatus.value, input, scaleXOutput)
    const scaleY = interpolate(drawerStatus.value, input, scaleYOutput)
    const translateX = interpolate(drawerStatus.value, input, translateXOutput)
    const borderRadius = interpolate(drawerStatus.value, input, radiusOutput)

    return { transform: [{ scaleX }, { scaleY }, { translateX }], overflow: 'hidden', borderRadius }
  }, [])

  const backBoxAnimatedStyle = useAnimatedStyle(() => {
    const input = [0, 1]
    const scaleXOutput = [0.6, 0.6]
    const scaleYOutput = [0.65, 0.65]
    const translateXOutput = [SCALED_CONTAINER_TRANSLATEX, SCALED_CONTAINER_TRANSLATEX_BACKBOX]
    const radiusOutput = [0, 30]

    const scaleX = interpolate(drawerStatus.value, input, scaleXOutput)
    const scaleY = interpolate(drawerStatus.value, input, scaleYOutput)
    const translateX = interpolate(drawerStatus.value, input, translateXOutput)
    const borderRadius = interpolate(drawerStatus.value, input, radiusOutput)

    return {
      transform: [{ scaleX }, { scaleY }, { translateX }],
      overflow: 'hidden',
      borderRadius,
      opacity: 0.6,
    }
  }, [])

  const onBack = useCallback(() => {
    screens.pop(componentId)
  }, [])

  // const statusBarHeight = getStatusBarHeight(true)
  // const statusStyle = { [`paddingT-${statusBarHeight / 1}`]: false }

  // const Gradient = React.useMemo(
  //   () => (
  //     <View
  //       reanimated
  //       nativeID='bg-app-container'
  //       absT
  //       width={'130%'}
  //       height={250}
  //       style={[styles.bgTop, { top: bgTop }]}
  //     >
  //       <Components.Gradient style={styles.container} />
  //     </View>
  //   ),
  //   [],
  // )

  const hitSlop = { top: 10, left: 10, right: 10, bottom: 10 }

  const HeaderView = React.useMemo(
    () => (
      <View width={'100%'} centerH padding-20={noPadding} marginT-50>
        <View row width={'100%'}>
          {menu && (
            <View reanimated>
              <TouchableOpacity hitSlop={hitSlop} onPress={onDrawer}>
                <FastImage
                  resizeMode='contain'
                  source={Assets.Images.icons.Menu}
                  style={styles.icn}
                />
              </TouchableOpacity>
            </View>
          )}

          {back && (
            <View>
              <TouchableOpacity hitSlop={hitSlop} onPress={onBack}>
                <Core.VectorIcon
                  vector='Octicons'
                  name='chevron-left'
                  size={30}
                  color={theme.color.white}
                />
              </TouchableOpacity>
            </View>
          )}

          {title && (
            <View center flex marginR-10>
              <Core.Text large bold white>
                {title}
              </Core.Text>
              {subTitle && (
                <Core.Text numberOfLines={1} adjustsFontSizeToFit extraSmall medium white>
                  {subTitle}
                </Core.Text>
              )}
            </View>
          )}
        </View>
      </View>
    ),
    [],
  )

  const ContentView = React.useMemo(() => {
    return (
      <If
        _={keyboardAware !== undefined}
        _then={
          <KeyboardAwareScrollView>
            <View centerH>{Header}</View>
            {Content}
          </KeyboardAwareScrollView>
        }
        _else={
          <>
            <View centerH>{Header}</View>
            {Content}
          </>
        }
      />
    )
  }, [])

  return (
    <View flex style={styles.content}>
      <DrawerContext.Provider value={{ componentId, onDrawer }}>
        {/* <DrawerComponent {...statusStyle} /> */}
      </DrawerContext.Provider>
      <View reanimated absB width={'100%'} height={'100%'} bg-white style={backBoxAnimatedStyle} />

      <View
        reanimated
        flex
        bg-bg
        centerH
        // {...statusStyle}
        {...modifiers}
        style={containerAnimatedStyle}
      >
        {/* {Gradient} */}
        <View flex width={'100%'} backgroundColor='#ffffff' style={[styles.pad, newPad]} >
          {HeaderView}
          {ContentView}
        </View>
        <View width={'100%'} backgroundColor='#ffffff'>
          {Footer}
        </View>
      </View>
    </View>
  )
}

export default React.memo(AppContainer)

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    minHeight: Dimensions.get('window').height,
  },
  bgTop: {
    overflow: 'hidden',
    borderBottomEndRadius: 210,
    borderBottomStartRadius: 230,
  },
  icn: {
    width: 30,
    height: 30,
  },
  contentContainerStyle: {
    height: '100%',
  },
  pad: {
    paddingBottom: responsiveHeight(5),
  },
})
