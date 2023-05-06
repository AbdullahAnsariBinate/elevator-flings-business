import { StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
// import { Post } from '../config/Dummydata/Dummydata';
// import { Colors } from '../config';
// import StarRating from 'react-native-star-rating';
// import Icons from '../assets/Icons';
import { Containers, Core } from '../../components'
import { TouchableOpacity, View, Text, Image, TextField } from 'react-native-ui-lib'
import { images, icons } from '../../../assets/images'

const Bar = () => {
  const [search, setSearch] = React.useState('')
  return (
    <View
      height={45}
      row
      centerV
      marginB-25
      backgroundColor='white'
      br-5
      marginT-20
      style={styles.conatiner}
    >
      <TextField
        placeholder={'Search'}
        floatingPlaceholder
        enableErrors
        showCharCounter
        maxLength={30}
        hideUnderline={true}
        containerStyle={styles.txtinput}
      />
      <Image source={icons.search} style={styles.img} />
    </View>
  )
}

export default Bar

const styles = StyleSheet.create({
  img: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '#C9D4E7',
  },
  txtinput: {
    flex: 1,
    color: 'grey',
    fontSize: 14,
    paddingHorizontal: 4,
  },
  conatiner: {
    borderWidth: 1,
    borderColor: '#C9D4E7',
    borderRadius: 5,
  },
})
