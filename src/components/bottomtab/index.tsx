import * as React from 'react'
import { StyleSheet, Keyboard, Platform, DeviceEventEmitter } from 'react-native'
import { screens } from '../../screens'
import { theme } from '../../utils/constants'
import { moderateScale } from 'react-native-size-matters'
import { Core } from '..'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

interface BottomTabProps {
  componentId: string
}
const bottom = Platform.OS === 'android' ? 10 : 25
const BottomTab = (props: BottomTabProps) => {
  const [activeTab, setActiveTab] = React.useState(1)
  const activeStatus = useSharedValue(0)
  const isForcefullyHidden = React.useRef(false)

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', onKeyboardShow)
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', onKeyboardWillHide)

    const showBottomTabListerner = DeviceEventEmitter.addListener('showTabs', forcefullyShowTabs)
    const hideBottomTabListerner = DeviceEventEmitter.addListener('hideTabs', forcefullyHideTabs)

    activeStatus.value = withSpring(1)

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
      showBottomTabListerner.remove()
      hideBottomTabListerner.remove()
    }
  }, [null])

  const forcefullyHideTabs = React.useCallback(() => {
    isForcefullyHidden.current = true
    onKeyboardShow()
  }, [])

  const forcefullyShowTabs = React.useCallback(() => {
    isForcefullyHidden.current = false
    onKeyboardWillHide()
  }, [])

  const onKeyboardShow = React.useCallback(() => {
    activeStatus.value = withSpring(0)
  }, [])

  const onKeyboardWillHide = React.useCallback(() => {
    console.log(isForcefullyHidden.current)

    if (!isForcefullyHidden.current) {
      activeStatus.value = withSpring(1)
    }
  }, [])

  const links = [
    {
      title: 'Home',
      icon: (active: boolean) => (
        <Core.VectorIcon
          vector={'FontAwesome5'}
          color={active ? theme.color.borderGrayLight : theme.color.gray}
          name='home'
          size={active ? 30 : 25}
        />
      ),
      key: 'home',
      action: () => changeTabChange(0, 1),
    },
    {
      title: 'Featured',
      icon: (active: boolean) => (
        <Core.VectorIcon
          vector={'MaterialCommunityIcons'}
          color={active ? theme.color.borderGrayLight : theme.color.gray}
          name='checkbox-multiple-blank'
          size={active ? 30 : 25}
        />
      ),
      key: 'featured',
      action: () => changeTabChange(1, 2),
    },
    {
      title: 'Eventpost',
      icon: (active: boolean) => (
        <Core.VectorIcon
          vector={'Ionicons'}
          color={active ? theme.color.borderGrayLight : theme.color.gray}
          name='chatbubble-ellipses-outline'
          size={active ? 30 : 25}
        />
      ),
      key: 'eventmessage',
      action: () => changeTabChange(2, 3),
    },
    {
      title: 'UserProfile',
      icon: (active: boolean) => (
        <Core.VectorIcon
          vector={'FontAwesome'}
          color={active ? theme.color.borderGrayLight : theme.color.gray}
          name='user'
          size={active ? 30 : 25}
        />
      ),
      key: 'user',
      action: () => changeTabChange(3, 4),
    },
  ]

  const changeTabChange = React.useCallback((tabIndex: number, tabSelected: number) => {
    screens.N.mergeOptions('Home', {
      bottomTabs: {
        currentTabIndex: tabIndex,
      },
    })
    setActiveTab(tabSelected)
  }, [])

  const AnimatedViewStyle = useAnimatedStyle(() => {
    const input = [0, 1]
    const output = [-100, bottom]
    const marginBottom = interpolate(activeStatus.value, input, output)
    return {
      marginBottom,
    }
  }, [])

  // animation={!active ? "slideOutDown" : "slideInUp"}
  return (
    <View reanimated style={[styles.container, AnimatedViewStyle]}>
      {links &&
        links.map((link, index) => {
          return (
            <TouchableOpacity
              onPress={link.action}
              activeOpacity={0.9}
              key={link.key}
              style={styles.btn}
            >
              {link.icon(activeTab === index)}
            </TouchableOpacity>
          )
        })}
    </View>
  )
}

export default React.memo(BottomTab)

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: moderateScale(65),
    bottom: Platform.OS === 'android' ? 10 : 25,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 40,
    flexDirection: 'row',
    backgroundColor: theme.color.purple,
  },
  btn: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})
