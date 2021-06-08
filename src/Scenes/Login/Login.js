import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {LinearTextGradient} from 'react-native-text-gradient';
import {Actions} from 'react-native-router-flux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import InputStyled from '../../Components/InputStyled';
import Rodape from '../../Components/Rodape';

const Login = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <ImageBackground
        source={require('../../Assets/Vector.png')}
        style={styles.image}>
        <Image
          style={styles.logo}
          source={require('../../Assets/LogoWhite2.png')}
          resizeMode={'contain'}
        />
      </ImageBackground>
      <View style={styles.container}>
        {/* <View style={styles.grid}>
        <LinearTextGradient
          style={{fontWeight: '700', fontSize: 25}}
          locations={[0, 1]}
          colors={['#00BCD4', '#3D0B83']}>
          <Text>Seja bem-vindo!</Text>
        </LinearTextGradient>
      </View> */}
        <View style={styles.grid}>
          <InputStyled
            label={'Login'}
            onChangeText={() => console.log('teste')}
            value={value}
            type={'text'}
          />
          <InputStyled
            label={'Senha'}
            onChangeText={() => console.log('teste')}
            value={value}
            type={'password'}
            secureTextEntry
          />
        </View>
        <View style={styles.grid}>
          <Rodape
            onTouchEnd={() => Actions.Home()}
            label={'Acessar'}
            text={'NÃO POSSUI CONTA? CADASTRE-SE'}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
  },
  logo: {
    marginBottom: moderateScale(10, 0.6),
    width: '100%',
    justifyContent: 'center',
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
  image: {
    flex: 1,
    height: moderateScale(250, 0.6),
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    justifyContent: 'center',
  },
});

export default Login;
