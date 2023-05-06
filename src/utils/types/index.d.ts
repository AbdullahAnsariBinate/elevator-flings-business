// `stores` layer
interface IStore {
  hydrate?: () => PVoid
}

type StoreDefaultKeys = 'set' | 'setMany' | 'hydrate'
type StoreKeysOf<S> = keyof Omit<S, StoreDefaultKeys>

// `services` layer
interface IService {
  init: () => PVoid
}

// System
type PVoid = Promise<void>
type AnyObj = Record<string, unknown>
type PureFunc = () => void
type PureFuncAsync = () => PVoid
type PureFuncArg<T> = (value?: T) => void

// Design system
type StatusBarStyle = 'light' | 'dark' | undefined
type ThemeColors = {
  textColor: string
  bgColor: string
  bg2Color: string
}

interface FontFamilies {
  [key: string]: {
    fontFamily: string
  }
}

type FieldType =
  | 'password'
  | 'email'
  | 'string'
  | 'phone'
  | 'button'
  | 'number'
  | 'otp'
  | 'bg'
  | 'dropdown'
  | 'textbox'
type Field = {
  placeHolder: string
  label: string
  otp: string
  icon?: () => ReactNode | undefined
  key: string
  type: FieldType
  secure: boolean | undefined
  error: string
  floating?: string
  masked?: boolean
  mask?: string
  selections?: string[]
  gadients?: string[]
  fontColor?: string
  disabled?: boolean
  backgroundColor?: string
  borderColor?: string
  multiline?: boolean | undefined
  borderRadius?: number
  underline?: boolean
  fields?: Field[]
  rightIcon?: () => void
  supportSecure?: boolean
  spacing?: FormSpacing
  bgColor?: any
  label2?: string
}

type ActionKeys = 'forgetpass' | 'signup' | 'signin'

type Actions = {
  title: string
  key: ActionKeys
}

type SecActions = {
  title: string
  key: ActionKeys
  action: string
}

type FormSpacing = 'tight' | 'loose'
interface PageConfigurations {
  title: string | null | undefined
  actionText: string
  fields: Field[]
  secondaryActions?: Actions[]
  bottomActions?: SecActions[]
  key: string
  navigationOptions?: Options
  spacing?: FormSpacing
}

type Page =
  | 'LOGIN'
  | 'SIGNUP'
  | 'FORGET_PASS'
  | 'LEAGUE_SIGN'
  | 'EDIT_PROFILE'
  | 'ADD_NEWEVENT'
  | 'VERIFY_CODE'
  | 'ADD_NEWPROPERTY'
  | 'EDIT_PROPERTY'
  | 'EDIT_EVENT'
  | 'RESET_PASSWORD' // | 'FORGETPASS' | 'SIGNUP' | 'GET_STARTED'
type Configuration = { [page in Page]: PageConfigurations }

type icon_vector =
  | 'FontAwesome'
  | 'Fontisto'
  | 'MaterialCommunityIcons'
  | 'AntDesign'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'MaterialIcons'
  | 'SimpleLineIcons'
  | 'Zocial'
  | 'Octicons'
  | 'Ionicons'
  | 'Foundation'
  | 'Fontisto'

interface IconProps {
  vector?: icon_vector
  name: string
  size: number
  color: string
  style?: StyleProp<TextStyle>
  onPress?: () => void
  ref?: any
}

interface Button {
  text?: string
  rightIcon?: any
  btnIcon?: IconProps
  leftIcon?: IconProps
  activeScale?: number
  delayActiveScale?: number
  onPress?: PureFunc
  height?: number
  width?: number | string
  iconCustomStyles?: any
}

type ButtonType = 'add' | 'proceed'

type League = {
  id: string
  imageUrl: ImageSource
  title: string
}

type LeagueImportInfo = {
  id: string
  imageUrl: ImageSource
  title: string
  subHeading?: string
}

type LeagueVS = {
  imageUrl: ImageSource
  title: string
  info: string
  score: string
}

interface LeagueDetails {
  league: League
  info: {
    subHeading: string
    vs: LeagueVS[]
  }
}

type Tabs = {
  title: string
  key: string
  component: ReactNode
}

type DrawerPages = 'profile' | 'faq' | 'terms' | 'privacy' | 'logout'
