import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import PropTypes from 'prop-types';
import {LinearTextGradient} from 'react-native-text-gradient';

const ItemTabView = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewLeft}>
        <Image
          source={require('../../Assets/UserLogged.png')}
          style={styles.imageViewLeft}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.viewRight}>
        <View style={styles.firstViewRight}>
          <Text style={styles.textName}>{data.name}</Text>
          <Image
            source={
              data.favorite
                ? require('../../Assets/BookMarkCheck.png')
                : require('../../Assets/BookMark.png')
            }
            style={styles.imageBookmark}
          />
        </View>
        <View style={styles.secondViewRight}>
          <Text style={styles.textDescription}>{data.description}</Text>
        </View>
        <View style={styles.thirdViewRight}>
          <View style={styles.viewTime}>
            <Image
              source={require('../../Assets/Clock.png')}
              style={styles.imageClock}
              resizeMode={'center'}
            />
            <View style={styles.viewTextTime}>
              <Text style={styles.textTime}>{data.time}</Text>
            </View>
          </View>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#00BCD4', '#3D0B83']}>
            <Text style={styles.textDistance}>{data.distance}</Text>
          </LinearTextGradient>
        </View>
      </View>
    </View>
  );
};

ItemTabView.propTypes = {
  data: PropTypes.object,
};

ItemTabView.defaultProps = {
  data: null,
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(92, 0.6),
    width: '100%',
    flexDirection: 'row',
  },
  viewLeft: {
    flex: 0.5,
  },
  imageViewLeft: {
    height: moderateScale(92, 0.6),
    width: moderateScale(93, 0.6),
    borderRadius: moderateScale(8, 0.6),
  },
  viewRight: {
    flex: 1,
  },
  firstViewRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textName: {
    color: '#000000',
    fontSize: moderateScale(12, 0.6),
  },
  imageBookmark: {
    height: moderateScale(16, 0.6),
    width: moderateScale(16, 0.6),
  },
  secondViewRight: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textDescription: {
    color: '#000000',
    fontWeight: '700',
    fontSize: moderateScale(12, 0.6),
  },
  thirdViewRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  viewTime: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageClock: {
    height: moderateScale(14.9, 0.6),
    width: moderateScale(15, 0.6),
  },
  viewTextTime: {
    marginLeft: wp(1.5),
  },
  textTime: {
    fontSize: moderateScale(10, 0.6),
    color: '#989AA6',
  },
  textDistance: {
    fontSize: moderateScale(12, 0.6),
    fontWeight: '700',
  },
});

export default ItemTabView;
