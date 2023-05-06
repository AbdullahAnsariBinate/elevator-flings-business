import * as React from 'react'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Card, View } from 'react-native-ui-lib'
import { Assets } from '../../../assets'
import { Core } from '..'
import { theme } from '../../utils/constants'
import { Bounceable } from 'rn-bounceable'
import { useCallback } from 'react'
import { useStateContext } from '../../utils/help'
import { screens } from '../../screens'

interface LeagueCardProps {
  league: League
}

const LeagueCard = ({ league }: LeagueCardProps) => {
  const { componentId } = useStateContext()
  const onPress = useCallback(() => {
    screens.push(componentId, 'LeaguesSignin')
  }, [])

  return (
    <Bounceable onPress={onPress}>
      <Card padding-10 marginV-5 bg-white style={styles.bg}>
        <View bg-white row spread centerV>
          <FastImage resizeMode='contain' source={league.imageUrl} style={styles.logo} />
          <Core.VectorIcon
            {...{
              vector: 'AntDesign',
              name: 'arrowright',
              size: 20,
              color: theme.color.red,
            }}
          />
        </View>
      </Card>
    </Bounceable>
  )
}

export default React.memo(LeagueCard)

const styles = StyleSheet.create({
  container: {},
  logo: {
    height: 50,
    width: 50,
  },
  bg: { backgroundColor: theme.color.white },
})
