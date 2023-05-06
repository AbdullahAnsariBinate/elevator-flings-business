import * as React from 'react'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { View } from 'react-native-ui-lib'
import { Bounceable } from 'rn-bounceable'
import Components, { Core } from '..'
import { Assets } from '../../../assets'
import { screens } from '../../screens'
import { theme } from '../../utils/constants'
import { useStateContext } from '../../utils/help'

interface DrawerComponentProps {}

const DrawerComponent = ({ ...modifiers }: DrawerComponentProps) => {
  const { componentId, onDrawer } = useStateContext() as any

  const _ = [
    {
      title: 'Profile',
      icn: Assets.Images.icons.ProfileCircle,
      key: 'profile' as DrawerPages,
    },
    {
      title: 'FAQs',
      icn: Assets.Images.icons.MessageQuestion,
      key: 'faq' as DrawerPages,
    },
    {
      title: 'Terms and Conditions',
      icn: Assets.Images.icons.Note,
      key: 'terms' as DrawerPages,
    },
    {
      title: 'Privacy Policy',
      icn: Assets.Images.icons.DocumentText,
      key: 'privacy' as DrawerPages,
    },
    {
      title: 'Logout',
      icn: Assets.Images.icons.MoneyReceive,
      key: 'logout' as DrawerPages,
    },
  ]

  const onClickOption = React.useCallback((key: DrawerPages) => {
    switch (key) {
      case 'profile':
        screens.push(componentId, 'Profile')
        break
      case 'faq':
        screens.push(componentId, 'FAQ')
        break
      case 'privacy':
        screens.push(componentId, 'Privacy')
        break
      case 'terms':
        screens.push(componentId, 'Terms')
        break
    }

    // here put to close drawer as well
    onDrawer && onDrawer()
  }, [])

  return (
    <View flex width={'100%'} height={'100%'} absT {...modifiers}>
      <Components.Gradient style={styles.container} />
      <View padding-20 width={'70%'} flex style={styles.sideContainer}>
        <Components.ProfileAvatar edit />
        <Core.Text adjustsFontSizeToFit white large bold>
          John R. McBroom
        </Core.Text>

        <View height={15} paddingH-10 />
        {_ &&
          _.map((_) => (
            <Bounceable onPress={onClickOption.bind(this, _.key)} key={_.title}>
              <View marginV-5 row centerV height={40} style={styles.item}>
                <FastImage style={styles.icn} source={_.icn} />
                <Core.Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  medium
                  white
                  small
                  style={styles.maxWidth}
                >
                  {' '}
                  {_.title}
                </Core.Text>
              </View>
            </Bounceable>
          ))}
      </View>
    </View>
  )
}

export default React.memo(DrawerComponent)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  sideContainer: {},
  avatarCon: {
    overflow: 'hidden',
  },
  icn: {
    width: 25,
    height: 25,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: theme.color.borderGrayLight,
  },
  maxWidth: {
    width: '90%',
  },
})
