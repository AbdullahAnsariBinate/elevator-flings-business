import { If } from '@kanzitelli/if-component'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Avatar, View } from 'react-native-ui-lib'
import { Assets } from '../../../assets'

interface ProfileAvatarProps {
  size?: number
  edit?: boolean
}

const ProfileAvatar = ({ size = 80, edit }: ProfileAvatarProps) => {
  return (
    <View width={size || 80} br100 style={styles.avatarCon}>
      <Avatar
        size={size || 80}
        source={{
          uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg',
        }}
        label={'IT'}
      />
      <If
        _={edit !== undefined}
        _then={
          <View center height={30} width={'100%'} absB bg-black style={styles.opacity}>
            <FastImage resizeMode='contain' source={Assets.Images.icons.CAM} style={styles.icn} />
          </View>
        }
      />
    </View>
  )
}

export default ProfileAvatar

const styles = StyleSheet.create({
  container: {},
  avatarCon: {
    overflow: 'hidden',
  },
  opacity: {
    opacity: 0.4,
  },
  icn: {
    width: 15,
    height: 15,
  },
})
