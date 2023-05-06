import * as React from 'react'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import Components, { Core } from '../../..'
import { useStateContext } from '../../../../utils/help'

interface TabsProps {
  tabs: Tabs[]
}

interface TabsInsects {
  [key: number]: {
    x: number
    y: number
    width: number
    height: number
  }
}

const Tabs = ({ tabs }: TabsProps) => {
  const { onTabChanged } = useStateContext() as any
  const [selectedIndex, setSelectedIndex] = useState(0)
  const index = React.useRef(0)

  const barX = useSharedValue(10)
  const barWidth = useSharedValue(60)

  const tabsRef = React.useRef<TabsInsects>()
  const onLayoutTab = React.useCallback((i: number, e: any) => {
    const { x, y, width, height } = e.nativeEvent.layout
    tabsRef.current = { ...tabsRef.current, [i]: { x, y, width, height } }

    if (index.current === 0 && i === 0) {
      barX.value = withTiming(tabsRef.current[i].x + tabsRef.current[i].width / 2.5)
      barWidth.value = withTiming(width)
    }
  }, [])

  const onPressTab = React.useCallback((i: number) => {
    if (tabsRef.current && tabsRef.current[i] !== undefined) {
      barWidth.value = withTiming(tabsRef.current[i].width)
      barX.value = withTiming(tabsRef.current[i].x + tabsRef.current[i].width / 2.5)
    }

    setSelectedIndex(i)
    index.current = i
    if (onTabChanged) onTabChanged(i)
  }, [])

  const renderTabs = React.useMemo(() => {
    return (
      tabs &&
      tabs.map((_, i) => (
        <TouchableOpacity
          onPress={onPressTab.bind(this, i)}
          onLayout={onLayoutTab.bind(this, i)}
          key={_.title}
        >
          <Core.Text white light extraSmall bold={selectedIndex === i}>
            {_.title}
          </Core.Text>
        </TouchableOpacity>
      ))
    )
  }, [selectedIndex])

  const barAnimated = useAnimatedStyle(() => {
    return {
      width: barWidth.value,
      left: barX.value - barWidth.value / 2.5,
    }
  }, [])

  return (
    <View paddingH-25 paddingT-15 spread row height={70} style={styles.header}>
      <Components.Gradient style={styles.headerBG} />
      {renderTabs}
      <View
        reanimated
        // width={60}
        height={3}
        br100
        // marginL-25
        marginB-28
        absB
        bg-white
        style={barAnimated}
      />
    </View>
  )
}

export default React.memo(Tabs)

const styles = StyleSheet.create({
  container: {},
  headerBG: {
    ...StyleSheet.absoluteFillObject,
    top: -300,
  },
  header: {},
})
