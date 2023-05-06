// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { AppContainerProps } from '../app.container'

export default function withKeyboardAware<T extends AppContainerProps = AppContainerProps>(
  WrappedComponent: React.ComponentType<T>,
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'ComponentSecureKey'

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const FieldWithSecureFunction = (props: AppContainerProps) => {
    // Fetch the props you want to inject. This could be done with context instead.
    // props comes afterwards so the can override the default ones.
    return <WrappedComponent {...(props as T)} />
  }

  FieldWithSecureFunction.displayName = `withKeyboardAware(${displayName})`

  return FieldWithSecureFunction
}

// const styles = StyleSheet.create({
//   contentContainerStyle: {
//     // flex: 1,
//     backgroundColor: theme.color.bg,
//   },
// });
