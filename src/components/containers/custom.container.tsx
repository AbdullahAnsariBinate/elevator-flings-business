import * as React from 'react'
import { View } from 'react-native-ui-lib'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import { Dimensions, ImageBackground, StyleSheet } from 'react-native'
import {
  AlignmentModifiers,
  FlexModifiers,
  MarginModifiers,
  PaddingModifiers,
  PositionModifiers,
} from 'react-native-ui-lib/src/commons/modifiers'
import { images } from '../../../assets/images'

interface AuthContainerProps {
  Header?: React.ReactNode
  Content?: React.ReactNode
  Footer?: React.ReactNode
}

const CustomContainer = ({
  Header,
  Content,
  Footer,
  ...modifiers
}: AuthContainerProps &
  FlexModifiers &
  MarginModifiers &
  PaddingModifiers &
  PositionModifiers &
  AlignmentModifiers) => {
  //  contentContainerStyle={styles.contentContainerStyle}
  return (
    <View flex bg-white>
      {/* <KeyboardAwareScrollView style={styles.contentContainerStyle}> */}
        <View flex paddingT-0 {...modifiers}>
          {Header}
          {Content}
          {Footer}
        </View>
      {/* </KeyboardAwareScrollView> */}
    </View>
  )
}

export default React.memo(CustomContainer)

const styles = StyleSheet.create({
  contentContainerStyle: {
    minHeight: Dimensions.get('window').height,
    // flex: 1,
    // backgroundColor: theme.color.bg,
  },
  // bgImages: { height: '100%', width: '100%', minHeight: Dimensions.get('window').height , backgroundColor:'red'},
})
