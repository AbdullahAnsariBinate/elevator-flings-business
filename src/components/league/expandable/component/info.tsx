import * as React from 'react'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { View } from 'react-native-ui-lib'
import { Core } from '../../..'

interface InfoCardProps {
  info: LeagueVS
  position: 'left' | 'right'
}

const InfoCard = ({ info, position = 'left' }: InfoCardProps) => {
  return (
    <View spread style={styles.container} marginT-9>
      <View>
        <View row spread centerV paddingR-10={position == 'left'} paddingL-10={position == 'right'}>
          {position == 'right' && (
            <Core.Text large semibold>
              {info.score}
            </Core.Text>
          )}
          <View>
            <FastImage resizeMode='contain' source={info.imageUrl} style={styles.logo} />
          </View>
          {position == 'left' && (
            <Core.Text large semibold>
              {info.score}
            </Core.Text>
          )}
        </View>

        <Core.Text
          numberOfLines={2}
          adjustsFontSizeToFit
          medium
          extraSmall
          style={position === 'left' ? styles.left : styles.right}
        >
          {info.title}
        </Core.Text>
      </View>

      <Core.Text
        numberOfLines={2}
        adjustsFontSizeToFit
        semibold
        gray
        mediumSize
        style={position === 'left' ? styles.left : styles.right}
      >
        {info.info}
      </Core.Text>
    </View>
  )
}

export default React.memo(InfoCard)

const styles = StyleSheet.create({
  container: {
    maxWidth: '50%',
    width: '50%',
  },
  logo: {
    height: 60,
    width: 60,
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
})
