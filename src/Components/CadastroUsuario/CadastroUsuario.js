import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
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

const styles = StyleSheet.create({});

export default CadastroUsuario;
