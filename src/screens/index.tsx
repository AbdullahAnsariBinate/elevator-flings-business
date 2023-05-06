import { gestureHandlerRootHOC as withGestureHandler } from 'react-native-gesture-handler'
import { generateRNNScreens } from 'rnn-screens'
import { theme } from '../utils/constants'
import { withAppearance } from '../utils/hooks'
import { withNavigationPropsDrilling, withSS } from '../utils/providers'
import * as Screens from './_'
import { icons } from '../../assets/images'
import Entypo from 'react-native-vector-icons/Entypo'

export const screens = generateRNNScreens(
  {
    Splash: {
      component: Screens.SplashScreen,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
    Login: {
      component: Screens.Auth.Login,
      options: {
        bottomTabs: {
          visible: false,
        },
        topBar: {
          backButton: {
            visible: false,
          },
          visible: true,
          title: {
            alignment: 'center',
            text: 'Login',
          },
        },
      },
    },

    Signup: {
      component: Screens.Auth.Signup,
      options: {
        bottomTabs: {
          visible: false,
        },
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          visible: true,
          title: {
            alignment: 'center',
            text: 'Sign Up',
          },
        },
      },
    },
    Forget: {
      component: Screens.Auth.Forget,
      options: {
        bottomTabs: {
          visible: false,
        },
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          visible: true,
          title: {
            alignment: 'center',
            text: 'Forgot Password',
          },
        },
      },
    },
    Otp: {
      component: Screens.Auth.Otp,
      options: {
        bottomTabs: {
          visible: false,
        },
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          visible: true,
          title: {
            alignment: 'center',
            text: 'Otp Verification',
          },
        },
      },
    },
    ResetPassword: {
      component: Screens.Auth.ResetPassword,
      options: {
        bottomTabs: {
          visible: false,
        },
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          visible: true,
          title: {
            alignment: 'center',
            text: 'Reset Password',
          },
        },
      },
    },
    // ----------------------------------------
    Home: {
      component: Screens.flow.HomeView,
      options: {
        bottomTab: {
          disableIconTint: false,
          icon: icons.Home,
          text: 'Home',
          iconColor: theme.color.lightPink,
          textColor: theme.color.lightPink,
          selectedIconColor: theme.color.pink,
          selectedTextColor: theme.color.pink,
        },
        bottomTabs: {
          backgroundColor: theme?.color?.white,
        },
        topBar: {
          backButton: {
            visible: false,
          },
          rightButtons: [
            {
              id: 'SomeUniqueId',
              component: {
                id: 'HeaderRight',
                name: 'HeaderRight',
                // passProps: {
                //   componentId: 'Component8',
                // },
              },
            },
          ],
          visible: false,
          // title: {
          //   text: 'Home, John',
          // },
        },
      },
    },

    PropertyDetail: {
      component: Screens.flow.PropertyDetailView,
      options: {
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          visible: true,
          title: {
            text: 'Property Detail',
            alignment: 'center',
          },
        },
      },
    },
    EventDetail: {
      component: Screens.flow.EventDetailView,
      options: {
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          visible: true,
          title: {
            text: 'Event Detail',
            alignment: 'center',
          },
        },
      },
    },
    ChatList: {
      component: Screens.flow.ChatListView,
      options: {
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          visible: true,
          title: {
            text: 'Messages',
            alignment: 'center',
          },
        },
      },
    },
    MyEvent: {
      component: Screens.flow.MyEventView,
      options: {
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          visible: true,
          title: {
            text: 'Past Event',
            alignment: 'center',
          },
        },
      },
    },
    Notification: {
      component: Screens.flow.NotificationView,
      options: {
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          visible: true,
          title: {
            text: 'Notification',
            alignment: 'center',
          },
        },
      },
    },
    Term: {
      component: Screens.flow.TermView,
      options: {
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          visible: true,
          title: {
            text: 'Term & Conditions',
            alignment: 'center',
          },
        },
      },
    },
    Privacy: {
      component: Screens.flow.PrivacyView,
      options: {
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          visible: true,
          title: {
            text: 'Privacy Policy',
            alignment: 'center',
          },
        },
      },
    },
    PastEventDetail: {
      component: Screens.flow.PastEventDetailView,
      options: {
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          visible: true,
          title: {
            text: 'Event Detail',
            alignment: 'center',
          },
        },
      },
    },
    Myprofile: {
      component: Screens.flow.MyprofileView,
      options: {
        bottomTab: {
          icon: icons.Users,
          text: 'Profile',
          iconColor: theme.color.lightPink,
          textColor: theme.color.lightPink,
          selectedIconColor: theme.color.pink,
          selectedTextColor: theme.color.pink,
        },
        bottomTabs: {
          backgroundColor: theme?.color?.white,
        },
        topBar: {
          backButton: {
            visible: false,
          },
          rightButtons: [
            {
              id: 'Component9',
              component: {
                id: 'HeaderRight2',
                name: 'HeaderRight2',
                passProps: {
                  // componentId: 'Component9',
                },
              },
            },
          ],
          visible: true,
          title: {
            text: 'My Profile',
            alignment: 'center',
          },
        },
      },
    },
    Temp: {
      component: Screens.flow.TempView,
      options: {
        bottomTab: {
          disableIconTint: false,
          icon: icons.Plus,
          text: 'Add',
          iconColor: theme.color.lightPink,
          textColor: theme.color.lightPink,
          selectedIconColor: theme.color.pink,
          selectedTextColor: theme.color.pink,
        },
        bottomTabs: {
          backgroundColor: theme?.color?.white,
        },
        topBar: {
          visible: true,
          title: {
            text: 'Add',
            alignment: 'center',
          },
        },
      },
    },
    ChatScreen: {
      component: Screens.flow.ChatScreenView,
      options: {
        bottomTabs: {
          visible: false,
          drawBehind: true,
        },
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },
          rightButtons: [
            {
              id: 'comp',
              component: {
                id: 'comp',
                name: 'HeaderChat',
              },
            },
          ],
          visible: true,
          title: {
            text: 'Chat',
            alignment: 'center',
          },
        },
      },
    },
    EditMyprofile: {
      component: Screens.flow.EditMyprofileView,
      options: {
        bottomTab: {},
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },

          visible: true,
          title: {
            text: 'Edit My Profile',
            alignment: 'center',
          },
        },
      },
    },
    AddNewEvent: {
      component: Screens.flow.AddNewEventView,
      options: {
        bottomTab: {},
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },

          visible: true,
          title: {
            text: 'Add New Event',
            alignment: 'center',
          },
        },
      },
    },
    AddNewProperty: {
      component: Screens.flow.AddNewPropertyView,
      options: {
        bottomTab: {},
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },

          visible: true,
          title: {
            text: 'Add New Property',
            alignment: 'center',
          },
        },
      },
    },
    EditProperty: {
      component: Screens.flow.EditPropertyView,
      options: {
        bottomTab: {},
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },

          visible: true,
          title: {
            text: 'Add New Property',
            alignment: 'center',
          },
        },
      },
    },
    EditEvent: {
      component: Screens.flow.EditEventView,
      options: {
        bottomTab: {},
        topBar: {
          backButton: {
            visible: true,
            icon: Entypo.getImageSourceSync('chevron-left', 25),
            color: theme.color.pink,
          },

          visible: true,
          title: {
            text: 'Edit Event',
            alignment: 'center',
          },
        },
      },
    },
  },

  [withGestureHandler, withSS, withNavigationPropsDrilling, withAppearance],
)
