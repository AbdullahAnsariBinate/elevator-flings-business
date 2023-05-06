import * as React from 'react'
import { scale } from 'react-native-size-matters'
import { TypographyModifiers, View, Image } from 'react-native-ui-lib'
import { Bounceable } from 'rn-bounceable'
import { Core } from '..'

const ButtonComponent = ({
  text,
  rightIcon,
  leftIcon,
  activeScale = 0.99,
  delayActiveScale = 0,
  height,
  btnIcon,
  // left,
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
        bg-pink
        br30
        {...modifiers}
      >
        {leftIcon && (
          <View center width={35} height={35} marginR-10>
            {/* <Core.VectorIcon {...leftIcon} /> */}
            <Image
              source={btnIcon}
              resizeMode='contain'
              style={[{ height: scale(12) }, iconCustomStyles]}
            />
          </View>
        )}
        <Core.Text white regular {...modifiers}>
          {text}
        </Core.Text>
        {rightIcon && (
          <View center width={35} height={35}>
            {/* <Core.VectorIcon {...rightIcon} /> */}
            <Image
              source={btnIcon}
              resizeMode='contain'
              style={[{ height: scale(12) }, iconCustomStyles]}
            />
          </View>
        )}
      </View>
    </Bounceable>
  )
}

export default React.memo(ButtonComponent)
