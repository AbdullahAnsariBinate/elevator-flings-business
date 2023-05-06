import React from 'react'
import { If } from '@kanzitelli/if-component'
import { theme } from '../../../utils/constants'

export default function withBgField<T extends Field = Field>(
  WrappedComponent: React.ComponentType<T>,
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'ComponentWithBg'

  const FieldWithBgInput = (props: Field) => {
    // Fetch the props you want to inject. This could be done with context instead.

    // props comes afterwards so the can override the default ones.
    return (
      <If
        _={props.type === 'bg'}
        _then={
          <WrappedComponent
            {...(props as T)}
            bgColor={{ backgroundColor: theme?.color.flashWhite }}
            mode={false}
            outlineColor={theme?.color.flashWhite}
            newColor={theme?.color?.lightRed}
          />
        }
        _else={<WrappedComponent {...(props as T)} />}
      />
    )
  }

  FieldWithBgInput.displayName = `withBgField(${displayName})`
  return FieldWithBgInput
}
