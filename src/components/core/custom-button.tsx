import * as React from 'react'
import { scale } from 'react-native-size-matters'
import { TypographyModifiers, View, Image } from 'react-native-ui-lib'
import { Bounceable } from 'rn-bounceable'
import { Core } from '..'

const CButtonComponent = ({
  text,
  rightIcon,
  leftIcon,
  activeScale = 0.99,
  delayActiveScale = 0,
  height,
  btnIcon,
  onPress,
  iconCustomStyles,
  ...modifiers
}: Button & TypographyModifiers) => {
  return (
    <Bounceable onPress={onPress} delayActiveScale={delayActiveScale} activeScale={activeScale}>
      <View
        paddingH-20
        row
        spread={rightIcon !== undefined || leftIcon !== undefined}
        centerV
        center={rightIcon == undefined || leftIcon == undefined}
        width={'100%'}
        height={height || 58}
        bg-red
        br30
        {...modifiers}
      >
        <View width={'80%'} row marginL-35>
          {leftIcon && (
            <View center width={40} height={40}>
              {/* <Core.VectorIcon {...leftIcon} /> */}
              <Image
                source={btnIcon}
                resizeMode='contain'
                style={[{ height: scale(12) }, iconCustomStyles]}
              />
            </View>
          )}
          <Core.Text large white marginT-8 {...modifiers}>
            {text}
          </Core.Text>
          {rightIcon && (
            <View center width={35} height={35} bg-white br100>
              {/* <Core.VectorIcon {...rightIcon} /> */}
            </View>
          )}
        </View>
      </View>
    </Bounceable>
  )
}

export default React.memo(CButtonComponent)
