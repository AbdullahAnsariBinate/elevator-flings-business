import * as React from 'react'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Card, View } from 'react-native-ui-lib'
import { Bounceable } from 'rn-bounceable'
import { useCallback } from 'react'
import { useStateContext } from '../../utils/help'
import { screens } from '../../screens'
import { Core } from '..'
import { theme } from '../../utils/constants'

interface ImportCardProps {
  league: LeagueImportInfo
}

const ImportCard = ({ league }: ImportCardProps) => {
  const { componentId } = useStateContext()
  const onPress = useCallback(() => {
    screens.push(componentId, 'LeagueDashboard')
  }, [])

  return (
    <Card bg-white padding-15 marginV-5 style={styles.bg}>
      <View row spread centerV>
        <FastImage resizeMode='contain' source={league.imageUrl} style={styles.logo} />
        <View flex paddingH-10>
          <Core.Text numberOfLines={2} adjustsFontSizeToFit extraVSmall medium>
            {league.title}
          </Core.Text>
          {league.subHeading && (
            <Core.Text numberOfLines={1} adjustsFontSizeToFit extraVSmall light gray>
              {league.subHeading}
            </Core.Text>
          )}
        </View>

        <View width={80} height={40}>
          <Core.Button bg-bgBlue smallest br10 medium height={40} text='Import' onPress={onPress} />
        </View>

        {/* */}

        {/* <Core.VectorIcon
            {...{
              vector: 'AntDesign',
              name: 'arrowright',
              size: 20,
              color: theme.color.red,
            }}
          /> */}
      </View>
    </Card>
  )
}

export default React.memo(ImportCard)

const styles = StyleSheet.create({
  container: {},
  logo: {
    height: 60,
    width: 60,
  },
  bg: { backgroundColor: theme.color.white },
})
