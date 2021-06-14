import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

const CardUser = ({data}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#00BCD4', '#3D0B83']}
      style={styles.container}>
      <View style={styles.viewLeft}>
        <View style={styles.viewWelcome}>
          <Text style={styles.textHello}>Olá, </Text>
          <Text style={styles.textName}>{data.name}!</Text>
        </View>
        <View style={styles.viewHospital}>
          <Text style={styles.textHospital}>{data.hospital}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.viewPosition}>
          <Text style={styles.textPosition}>{data.position}</Text>
        </View>
      </View>
      <View style={styles.viewRight}>
        <Image
          source={require('../../Assets/Person.png')}
          style={styles.imagePerson}
          resizeMode={'center'}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 'auto',
    borderRadius: moderateScale(8, 0.6),
  },
  viewLeft: {
    flex: 1,
    paddingTop: moderateScale(25, 0.6),
    paddingBottom: moderateScale(25, 0.6),
    paddingLeft: moderateScale(15, 0.6),
    paddingRight: moderateScale(15, 0.6),
  },
  viewRight: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  viewWelcome: {
    flexDirection: 'row',
  },
  textHello: {
    fontSize: moderateScale(20, 0.6),
    color: 'white',
  },
  textName: {
    fontSize: moderateScale(20, 0.6),
    color: 'white',
    fontWeight: 'bold',
  },
  viewHospital: {
    marginTop: hp(1),
  },
  textHospital: {
    fontSize: moderateScale(14, 0.6),
    color: 'white',
  },
  separator: {
    marginTop: hp(1),
    width: moderateScale(195, 0.6),
    height: hp(0.1),
    backgroundColor: 'white',
    borderRadius: 1,
  },
  viewPosition: {
    marginTop: hp(1),
  },
  textPosition: {
    fontSize: moderateScale(10, 0.6),
    color: 'white',
  },
  imagePerson: {
    height: moderateScale(104, 0.6),
    width: moderateScale(72, 0.6),
  },
});

export default CardUser;
