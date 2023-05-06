import * as React from 'react'
import { useMemo } from 'react'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import { Core } from '..'
import { styles } from '../../screens/auth/login/login.styles'
import { theme } from '../../utils/constants'
import withButtonShadow from './hoc/withShadow'

interface FormComponentType {
  type?: ButtonType
  FieldsContainerFooter?: React.ReactNode
  ButtonComponent: React.MemoExoticComponent<(props: Button) => JSX.Element>
  onAction?: (key: ActionKeys) => void
  onSubmit?: (form: unknown) => void
  spacing?: FormSpacing
  Field?: React.MemoExoticComponent<(props: any) => JSX.Element>
  forgetPass?: string
  onPress: () => void
}

const FormComponent = ({
  fields,
  bottomActions,
  onAction,
  onSubmit,
  title,
  actionText,
  FieldsContainerFooter,
  ButtonComponent,
  spacing = 'loose',
  type = 'proceed',
  Field,
  forgetPass,
  onPress,
}: PageConfigurations & FormComponentType) => {
  const ShadowButton = withButtonShadow(ButtonComponent)

  const FormFields = useMemo(() => {
    return fields?.map((_) =>
      Field ? (
        <Field spacing={spacing} {..._} key={_.key} />
      ) : (
        <Core.Field spacing={spacing} {..._} key={_.key} />
      ),
    )
  }, [])

  const onSubmitForm = React.useCallback(() => {
    onSubmit && onSubmit({})
  }, [])

  const BottomAction = useMemo(() => {
    return bottomActions?.map((_) => {
      return (
        <View row spread key={_.key}>
          <Core.Text medium extraSmall headingBlue>
            {_.title}
          </Core.Text>
          <TouchableOpacity onPress={onAction?.bind(this, _.key)}>
            <Core.Text icnBlue> {_.action}</Core.Text>
          </TouchableOpacity>
        </View>
      )
    })
  }, [])

  return (
    <View flex width={'100%'} paddingH-20 br30 paddingV-20 style={styles.viewStyles}>
      {FormFields}
      {FieldsContainerFooter}
      <View height={8} />
      {forgetPass && (
        <TouchableOpacity onPress={onPress}>
          <Core.Text center black underline regular marginT-8>
            {forgetPass}
          </Core.Text>
        </TouchableOpacity>
      )}
      <View height={15} />
      <Core.Button text={actionText} small onPress={onSubmitForm} bg-pink></Core.Button>
    </View>
  )
}

export default React.memo(FormComponent)
