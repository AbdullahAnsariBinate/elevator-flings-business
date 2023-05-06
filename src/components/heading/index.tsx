import React from 'react'
import { MarginModifiers } from 'react-native-ui-lib'
import { Bounceable } from 'rn-bounceable'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Containers, Core } from '..'
import { NavigationComponentProps } from 'react-native-navigation'
import { useGetFormAttributes, useStateContext } from '../../utils/help'
import { screens } from '../../screens'
import { View, Image } from 'react-native-ui-lib'

type Props = MarginModifiers & {
  name?: string
  icon?: string
}
export const Heading: React.FC<Props> = ({ name, icon }) => {
  const { componentId } = useStateContext<NavigationComponentProps>()

  return (
    <View marginT-20 width={'90%'} row centerV style={styles.container}>
      <TouchableOpacity style={styles.maincontainer}>
        <Image source={icon} style={styles.icnstyle} />
        <Core.Text marginL-10 bold large black>
          {name}
        </Core.Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  icnstyle: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  maincontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
})
