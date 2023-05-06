import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Incubator, TouchableOpacity, View } from 'react-native-ui-lib'
import { Core } from '..'
import { theme } from '../../utils/constants'
import withSecureKey from './hoc/withSecure'

const { TextField } = Incubator

type FieldHOC = {
  toggleSecure?: void
}

const FieldComponent = ({
  placeHolder,
  icon,
  secure,
  supportSecure,
  toggleSecure,
  spacing,
}: Field & FieldHOC) => {
  return (
    <View>
      <View
        bg-white
        paddingH-15
        row
        height={56}
        marginV-10={spacing === 'loose'}
        br40
        style={spacing === 'loose' ? styles.container : styles.containerTight}
      >
        <View bg-white paddingH-10 flex paddingT-3>
          <Core.Text marginT-4 smallest>
            {placeHolder}
          </Core.Text>
          <TextField
            migrate
            width={'100%'}
            height={'80%'}
            placeholderTextColor={theme.color.gray}
            placeholder={placeHolder}
            medium
            small
            textBlue
            secureTextEntry={secure}
          />
        </View>
        {supportSecure && (
          <TouchableOpacity onPress={toggleSecure} center width={20}>
            <Core.VectorIcon
              vector='Entypo'
              name={secure ? 'eye-with-line' : 'eye'}
              size={20}
              color={theme.color.gray}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default React.memo(withSecureKey(FieldComponent))

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.color.borderGray,
  },
  containerTight: {
    borderBottomWidth: 1,
    borderColor: theme.color.borderGray,
  },
})
