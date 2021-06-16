import React from 'react';
import InputStyled from '../InputStyled';

const CadastroUsuario = ({data, handleChange}) => {
  return (
    <>
      <InputStyled
        label={'E-mail'}
        onChangeText={value => handleChange('dcEmail', value)}
        value={data.dcEmail}
        type={'default'}
      />
      <InputStyled
        label={'Login'}
        onChangeText={value => handleChange('dcLogin', value)}
        value={data.dcLogin}
        type={'default'}
      />
      <InputStyled
        label={'Senha'}
        onChangeText={value => handleChange('dcSenha', value)}
        value={data.dcSenha}
        type={'default'}
        secureTextEntry
      />
    </>
  );
};

export default CadastroUsuario;
