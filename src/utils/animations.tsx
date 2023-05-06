export const sharedElements = {
  LOGIN: {
    animations: {
      push: {
        sharedElementTransitions: [
          {
            fromId: 'logo',
            toId: 'logo',
            // interpolation: {
            //   type: 'overshoot',
            // },
          },
        ],
      },
    },
  },
  FORGET_PASS: {
    // topBar: {
    //   visible: true,
    // },
    animations: {
      push: {
        sharedElementTransitions: [
          {
            fromId: 'logo',
            toId: 'logo',
            // interpolation: {
            //   type: 'overshoot',
            // },
          },
        ],
      },
    },
  },
  LEAGUES: {
    // topBar: {
    //   visible: true,
    // },
    animations: {
      push: {
        sharedElementTransitions: [
          // {
          //   fromId: 'bg-app-container',
          //   toId: 'bg-app-container',
          // },
          {
            fromId: 'logo',
            toId: 'logo',
          },
          // {
          //   fromId: 'content',
          //   toId: 'content',
          // },
        ],
      },
      pop: {
        sharedElementTransitions: [
          // {
          //   fromId: 'bg-app-container',
          //   toId: 'bg-app-container',
          // },
          {
            fromId: 'logo',
            toId: 'logo',
          },
          // {
          //   fromId: 'content',
          //   toId: 'content',
          // },
        ],
      },
    },
  },
}
