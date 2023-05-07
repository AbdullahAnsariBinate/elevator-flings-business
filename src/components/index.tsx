import Gradient from './gradient'
import LogoComponent from './logo'
import { Text } from './core/text'
import AuthContainer from './containers/auth.container'
import AppContainer from './containers/app.container'
import HomeConatiner from './containers/home.container'
import CustomContainer from './containers/custom.container'

import Form from './core/form'
import Field from './core/field'
import VectorIcon from './core/icon'
import Button from './core/button'
import CustomButton from './core/custom-button'
import LeagueCard from './league/card'
import LeagueImportCard from './league/import'
import LeagueExpandable from './league/expandable'
import ProfileAvatar from './profile/avatar'
import MaterialField from './core/materialfield'
import withKeyboardAware from './containers/hoc/withKeyboardAware'
import FAQExpandable from './faq/expandable'
import HeaderRight from './headerright'
import HeaderRight2 from './headerright2'
import EventPost from './eventpost'
import PastEvents from './pastevents'
import Requests from './requests'
import Notification from './notification'
import { MacroChat } from './chat/macrochat'

import TopTabs from './league/toptabs'
import ChatComponent from './chat/chatcomponent'

const HOC = {
  withKeyboardAware,
}

const Components = {
  Gradient,
  LogoComponent,
  LeagueCard,
  LeagueImportCard,
  LeagueExpandable,
  HOC,
  TopTabs,
  ProfileAvatar,
  FAQExpandable,
  HeaderRight,
  EventPost,
  PastEvents,
  Requests,
  ChatComponent,
  Notification,
  HeaderRight2,
  MacroChat,
}

export const Core = {
  Text,
  Form,
  Field,
  VectorIcon,
  Button,
  MaterialField,
  CustomButton,
}

export const Containers = {
  AuthContainer,
  AppContainer,
  HomeConatiner,
  CustomContainer
}

export default Components
