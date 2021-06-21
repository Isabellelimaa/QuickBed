import React from 'react';
import {ScrollView} from 'react-native';
import InputStyled from '../InputStyled';

const CadastroHospital = ({data, handleChange}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <InputStyled
        label={'Nome'}
        onChangeText={value => handleChange('nmHsptal', value, 'hospital')}
        value={data.hospital.nmHsptal}
        type={'default'}
      />
      <InputStyled
        label={'Telefone'}
        onChangeText={value => handleChange('dcTlfone', value, 'hospital')}
        value={data.hospital.dcTlfone}
        type={'default'}
      />
      <InputStyled
        label={'CEP'}
        onChangeText={value => handleChange('dcCep', value, 'endereco')}
        value={data.hospital.dcCep}
        type={'default'}
      />
      <InputStyled
        label={'Endereço'}
        onChangeText={value => handleChange('nmRua', value, 'endereco')}
        value={data.endereco.nmRua}
        type={'default'}
      />
      <InputStyled
        label={'Número'}
        onChangeText={value => handleChange('nrNumero', value, 'endereco')}
        value={data.endereco.nrNumero}
        type={'numeric'}
      />
      <InputStyled
        label={'Bairro'}
        onChangeText={value => handleChange('nmBairro', value, 'endereco')}
        value={data.endereco.nmBairro}
        type={'default'}
      />
      <InputStyled
        label={'Cidade'}
        onChangeText={value => handleChange('nmCidade', value, 'endereco')}
        value={data.endereco.nmCidade}
        type={'default'}
      />
      <InputStyled
        label={'Estado'}
        onChangeText={value => handleChange('nmEstado', value, 'endereco')}
        value={data.endereco.nmEstado}
        type={'default'}
      />
    </ScrollView>
  );
};

export default CadastroHospital;
