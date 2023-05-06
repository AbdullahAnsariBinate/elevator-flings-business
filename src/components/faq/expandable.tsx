import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Card, ExpandableSection, Text, View } from 'react-native-ui-lib'
import { Core } from '..'
import { theme } from '../../utils/constants'

interface FAQExpandableProps {}

const FAQExpandable = (props: FAQExpandableProps) => {
  const [expanded, setExpanded] = React.useState(false)

  const toggleExpanded = React.useCallback(() => {
    setExpanded(!expanded)
  }, [expanded])

  return (
    <Card bg-bg padding-10 marginV-5 style={[styles.container, styles.bg]}>
      <ExpandableSection
        expanded={expanded}
        sectionHeader={
          <View row centerV>
            <Core.Text icnBlue large semibold marginB-5 marginR-5>
              Q.
            </Core.Text>
            <Core.Text fadeBlack extraSmall semibold>
              What is the use of Fantasy app?
            </Core.Text>
          </View>
        }
        onPress={toggleExpanded}
      >
        <Core.Text fadeBlack extraSmall regular>
          Purchasing an item on Fantasy is a simple process. First, find the item you want and
          select it. Then, click on the “Add to Cart” button. You will be prompted to enter your
          payment information and then confirm your order. Once you have completed these steps, you
          will receive an email confirmation.
        </Core.Text>
      </ExpandableSection>
    </Card>
  )
}

export default React.memo(FAQExpandable)

const styles = StyleSheet.create({
  container: {},
  bg: {
    backgroundColor: theme.color.white,
  },
})
