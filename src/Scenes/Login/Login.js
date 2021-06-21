import React, {useState} from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Actions} from 'react-native-router-flux';
import {useDispatch} from 'react-redux';

import InputStyled from '../../Components/InputStyled';
import Rodape from '../../Components/Rodape';
import {authenticate} from '../../Redux/UserReducers/UserReducer';

const Login = () => {
  const [login, setLogin] = useState(null);
  const [senha, setSenha] = useState(null);

  const dispatch = useDispatch();

  const handlerSubmit = () => {
    dispatch(authenticate({dcLogin: login, dcSenha: senha}));
    // Actions.NavBar();
  };

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
            onChangeText={value => setLogin(value)}
            type={'default'}
            value={login}
          />
          <InputStyled
            label={'Senha'}
            onChangeText={value => setSenha(value)}
            value={senha}
            type={'default'}
            secureTextEntry
          />
        </View>
        <View style={styles.grid}>
          <Rodape
            onTouchEnd={handlerSubmit}
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
    height: moderateScale(250, 0.6),
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Login;
