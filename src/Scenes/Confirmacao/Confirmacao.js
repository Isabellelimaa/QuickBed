import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, Alert} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {LinearTextGradient} from 'react-native-text-gradient';
import {Actions} from 'react-native-router-flux';

const Confirmacao = props => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <Image
          source={require('../../Assets/Logo.png')}
          resizeMode={'center'}
        />
      </View>
      <View style={styles.grid}>
        <Image
          source={require('../../Assets/Signin.png')}
          resizeMode={'center'}
        />
      </View>
      <View style={styles.grid}>
        <LinearTextGradient
          style={{fontWeight: '700', fontSize: 25}}
          locations={[0, 1]}
          colors={['#00BCD4', '#3D0B83']}>
          <Text>{props.mensagem}</Text>
        </LinearTextGradient>
        <View
          style={{
            width: wp(65),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp(1),
          }}>
          <Text style={styles.text} onPress={() => Actions.Login()}>
            JÁ TEM UMA CONTA? CONECTE-SE
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#8F8F8F',
    fontSize: moderateScale(14, 0.6),
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default Confirmacao;
