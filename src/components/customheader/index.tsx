import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native-ui-lib';
import { Core } from '..';
import { scale } from 'react-native-size-matters';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import FastImage from 'react-native-fast-image';
import { icons } from '../../../assets/images';

type Props = {
    title?: string;
    back?: boolean;
    leftText?: string;
    backPress?: any;
    msgPress?: any;
    notiPress?: any;

};

export const CustomHeader: React.FC<Props> = memo(({ title, back, leftText, backPress, msgPress, notiPress }: Props) => {
    return (
        <View style={styles.container} >
            <View>
                {back && <TouchableOpacity onPress={backPress}>
                    <FastImage source={icons?.Back} style={styles.header} resizeMode='contain' />
                </TouchableOpacity>
                }
                {leftText &&
                    <Core.Text bold black large>{leftText}</Core.Text>
                }
            </View>
            <View>
                {title && <Core.Text bold black large>{title}</Core.Text>}
            </View>
            <View style={styles.leftHeader}>
                <TouchableOpacity onPress={msgPress}>
                    <FastImage source={icons?.Message} style={styles.icon} resizeMode='contain' />
                </TouchableOpacity>

                <TouchableOpacity onPress={notiPress} marginL-5>
                    <FastImage source={icons?.Notification} style={styles.icon} resizeMode='contain' />
                </TouchableOpacity>
            </View>

        </View>
    );
});
CustomHeader.displayName = 'CustomHeader'
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: responsiveWidth(4),
        backgroundColor: 'white',
        width: responsiveWidth(100),
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        height: responsiveWidth(5),
        width: responsiveWidth(3)
    },
    leftHeader: {
        flexDirection: 'row',
    },
    icon: {
        height: responsiveWidth(8),
        width: responsiveWidth(8),
    }
});
