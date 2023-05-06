import { If } from '@kanzitelli/if-component'
import { Platform, StyleSheet } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { View } from 'react-native-ui-lib'
import { theme } from '../../../utils/constants'

export default function withButtonShadow<T extends Button = Button>(
  WrappedComponent: React.ComponentType<T>,
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'ComponentButtonShadow'

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ButtonWithShadow = (props: Button) => {
    // Fetch the props you want to inject. This could be done with context instead.
    // startColor={'rgba(255, 255, 255, .4)'} distance={15} endColor={'rgba(201, 32, 39, .07)'} paintInside
    // props  comes afterwards so the can override the default ones.
    return (
      <If
        _={Platform.OS === 'android'}
        _then={
          <Shadow
            // distance={12}
            // startColor={'rgba(201, 32, 39, .13)'}
            // endColor={'rgba(255, 255, 255, .4)'}
            style={styles.container}
          >
            <WrappedComponent {...(props as T)} />
          </Shadow>
        }
        _else={
          <View style={styles.shadow}>
            <WrappedComponent {...(props as T)} />
          </View>
        }
      />
    )
  }

  ButtonWithShadow.displayName = `withButtonShadow(${displayName})`

  return ButtonWithShadow
}

const styles = StyleSheet.create({
  container: { width: '100%', height: 55, borderRadius: 15 },
  shadow: {
    shadowColor: theme.color.red,
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 11.14,
    elevation: 17,
  },
})
