import React from 'react';
import {StyleSheet} from 'react-native';
import InputStyled from '../InputStyled';

const CadastroUsuario = props => {
  return (
    <>
      <InputStyled
        label={'E-mail'}
        onChangeText={value => props.handleChange('dcEmail', value)}
        value={props.dcEmail}
        type={'default'}
      />
      <InputStyled
        label={'Login'}
        onChangeText={value => props.handleChange('dcLogin', value)}
        value={props.dcLogin}
        type={'default'}
      />
      <InputStyled
        label={'Senha'}
        onChangeText={value => props.handleChange('dcSenha', value)}
        value={props.dcSenha}
        type={'default'}
        secureTextEntry
      />
    </>
  );
};

export default CadastroUsuario;
