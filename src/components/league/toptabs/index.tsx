import * as React from 'react'
import { Alert, StyleSheet } from 'react-native'
import { View } from 'react-native-ui-lib'
import Tabs from './tabs'
import { createStateContext, useStateContext } from '../../../utils/help'
import PagerView from 'react-native-pager-view'
import { Core } from '../..'

interface TopTabsProps {
  tabs: Tabs[]
}

const TopTabs = ({ tabs }: TopTabsProps) => {
  const pagerRef = React.useRef<PagerView>()
  const passProps = useStateContext()
  const TopTabContext = createStateContext()

  const onTabChanged = React.useCallback((i: number) => {
    pagerRef.current?.setPage(i)
  }, [])

  const renderTabs = React.useMemo(() => {
    return tabs && tabs.map((_) => _.component)
  }, [])

  return (
    <TopTabContext.Provider value={{ onTabChanged, ...passProps }}>
      <View flex style={styles.container}>
        <Tabs tabs={tabs} />
        <View flex bg-white style={styles.topRounded}>
          <PagerView
            ref={pagerRef as any}
            scrollEnabled={false}
            style={styles.pagerView}
            initialPage={0}
          >
            {renderTabs}
          </PagerView>
        </View>
      </View>
    </TopTabContext.Provider>
  )
}

export default TopTabs

const styles = StyleSheet.create({
  container: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    overflow: 'hidden',
  },
  topRounded: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    overflow: 'hidden',
    top: -20,
  },
  pagerView: {
    flex: 1,
  },
})
