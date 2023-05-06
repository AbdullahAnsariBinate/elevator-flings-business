import { StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
// import { Post } from '../config/Dummydata/Dummydata';
// import { Colors } from '../config';
// import StarRating from 'react-native-star-rating';
// import Icons from '../assets/Icons';
import { Containers, Core } from '../../components'
import { TouchableOpacity, View, Text, Image } from 'react-native-ui-lib'
import { images, icons } from '../../../assets/images'

const Post = () => {
  const [starCount, setStarCount] = useState(1)
  return (
    <>
      <View marginT-10 style={styles.maincontainer}>
        <View height={45} row centerV marginT-10>
          <Image source={images.avatar} style={styles.avatar} />
          <View marginL-10>
            <Core.Text black bold mediumSize>
              Loreum Ipsum{' '}
            </Core.Text>
          </View>
          <Core.Text style={styles.hrs}>1 hour ago</Core.Text>
        </View>
        <Image source={images.flower} resizeMode='stretch' style={styles.banner} />
        <Core.Text marginL-5 marginT-10 black bold mediumSize>
          {' '}
          #ItsLit #ItsAVibe #NeedsCompany
        </Core.Text>
      </View>
    </>
  )
}

export default Post

const styles = StyleSheet.create({
  maincontainer: {
    borderTopWidth: 0.5,
    borderTopColor: '#C5C6D0',
  },
  avatar: {
    height: 50,
    width: 45,
    alignSelf: 'center',
    borderRadius: 60,
    resizeMode: 'center',
  },
  hrs: {
    position: 'absolute',
    right: 5,
    color: '#000',
    fontWeight: '600',
  },
  banner: {
    width: '100%',
    borderRadius: 20,
    marginTop: 10,
    height: 150,
  },
})
