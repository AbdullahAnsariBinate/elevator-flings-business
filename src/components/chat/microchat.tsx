import React from 'react'
import { MarginModifiers } from 'react-native-ui-lib'
import { Bounceable } from 'rn-bounceable'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { images } from '../../../assets/images'
import { Containers, Core } from '../../components'
import { View, Image } from 'react-native-ui-lib'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { theme } from '../../utils/constants'

type Props = MarginModifiers & {
  msg?: string
  image?: string
}

export const MicroChat: React.FC<Props> = ({ msg }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View>
          <Image resizeMode='center' style={styles.avatar} source={images.avatar} />
        </View>
      </View>
      <View width={'70%'}>
        <View backgroundColor={theme?.color.lightRed} paddingH-20 paddingV-15 style={styles.msgbox}>
          <Core.Text white regular>
            {msg}
          </Core.Text>
        </View>
        <View spread row>
          <Core.Text bold black>
            John Doe
          </Core.Text>
          <Core.Text regular grey>
            12:00 PM
          </Core.Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(92),
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
  },
  avatar: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme?.color.lightRed,
  },
  msgbox: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  profile: {
    flexDirection: 'column-reverse',
    marginBottom: responsiveHeight(2.5),
    marginRight: responsiveWidth(2.5),
  },
})
