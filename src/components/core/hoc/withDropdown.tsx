import React from 'react'
import { If } from '@kanzitelli/if-component'
import { theme } from '../../../utils/constants'
import { View } from 'react-native-ui-lib'
import { Core } from '../..'
import { Picker } from '@react-native-picker/picker'
import { StyleSheet } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
export default function withDropdown<T extends Field = Field>(
  WrappedComponent: React.ComponentType<T>,
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'ComponentWithDropdown'

  const FieldWithBgInput = (props: Field) => {
    const [selectedLanguage, setSelectedLanguage] = React.useState()
    // Fetch the props you want to inject. This could be done with context instead.

    // props comes afterwards so the can override the default ones.
    return (
      <If
        _={props.type === 'dropdown'}
        _then={
          <View flex style={[styles.pickerContainer, { borderRadius: 8 }]}>
            <Picker
              style={styles.picker}
              selectedValue={selectedLanguage}

              onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
            >
              <Picker.Item label={props?.label} value='java' color={theme?.color?.black} />
              <Picker.Item label={props?.label2} value='js' color={theme?.color?.black} />
            </Picker>
          </View>
        }
        _else={<WrappedComponent {...(props as T)} />}
      />
    )
  }

  FieldWithBgInput.displayName = `withDropdown(${displayName})`
  return FieldWithBgInput
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderRadius: 8,
    overflow: 'hidden', // This is important to make the borderRadius work
    backgroundColor: theme?.color?.flashWhite,
    marginTop: responsiveHeight(1.5),
  },
  picker: {
    height: 50,
    width: '100%',
    color: theme?.color?.black
  },
})
