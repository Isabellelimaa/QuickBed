import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../Assets/Logo.png')}
          resizeMode={'center'}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../Assets/Signin.png')}
          resizeMode={'center'}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: moderateScale(26, 0.6), fontWeight: '700'}}>
            Seja Bem-Vindo!
          </Text>
        </View>
        <View
          style={{
            width: wp(65),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp(1),
          }}>
          <Text
            style={{
              color: '#8F8F8F',
              fontSize: moderateScale(14, 0.6),
              fontWeight: '400',
              textAlign: 'center',
            }}>
            Procure leitos para seus pacientes de maneira fácil e rápida!
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
});

export default Login;
