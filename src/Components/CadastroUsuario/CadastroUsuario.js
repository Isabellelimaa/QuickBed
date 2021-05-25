import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import InputStyled from '../InputStyled';

const CadastroUsuario = props => {
  const [value, setValue] = useState(0);

  return (
    <>
      <InputStyled
        label={'E-mail'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
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
        type={'text'}
      />
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    marginTop: moderateScale(8, 0.6),
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default CadastroUsuario;
