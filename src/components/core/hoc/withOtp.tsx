import { If } from '@kanzitelli/if-component'
import * as React from 'react'
import { Image, Text, View } from 'react-native-ui-lib'
import { StyleSheet } from 'react-native'
import OtpInputs from 'react-native-otp-inputs'
import { Core } from '../..'
import { icons } from '../../../../assets/images'
import { scale } from 'react-native-size-matters'
import { theme } from '../../../utils/constants'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'
export default function withOtp<T extends Field = Field>(WrappedComponent: React.ComponentType<T>) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'ComponentwithOtp'

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const FieldWithOtpInput = (props: Field) => {
    // Fetch the props you want to inject. This could be done with context instead.

    // props comes afterwards so the can override the default ones.
    return (
      <If
        _={props.type === 'otp'}
        _then={
          <View flex>
            <OtpInputs
              autofillFromClipboard
              style={styles.otpStyles}
              inputStyles={styles.inputStyles}
              inputContainerStyles={styles.inputContainer}
              handleChange={(code) => console.log(code)}
              numberOfInputs={6}
              placeholder='0'
            />
          </View>
        }
        _else={<WrappedComponent {...(props as T)} />}
      />
    )
  }

  FieldWithOtpInput.displayName = `withOtp(${displayName})`

  return FieldWithOtpInput
}

const styles = StyleSheet.create({
  otpStyles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputStyles: {
    backgroundColor: 'white',
    width: responsiveScreenWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 2,
    fontSize: 20,
    color: theme.color.black,
    borderColor: theme.color.pink,
    borderWidth: 1,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    height: 50,
    width: 50,
  },
})
