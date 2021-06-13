import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import InputStyled from '../InputStyled';

const CadastroHospital = props => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <InputStyled
        label={'Nome'}
        onChangeText={value =>
          props.handleChange('nmHsptal', value, 'hospital')
        }
        value={props.nmHsptal}
        type={'default'}
      />
      <InputStyled
        label={'Telefone'}
        onChangeText={value =>
          props.handleChange('dcTlfone', value, 'hospital')
        }
        value={props.dcTlfone}
        type={'default'}
      />
      <InputStyled
        label={'CEP'}
        onChangeText={value => props.handleChange('dcCep', value, 'hospital')}
        value={props.dcCep}
        type={'default'}
      />
      <InputStyled
        label={'Endereço'}
        onChangeText={value => props.handleChange('nmRua', value, 'endereco')}
        value={props.nmRua}
        type={'default'}
      />
      <InputStyled
        label={'Número'}
        onChangeText={value =>
          props.handleChange('nrNumero', value, 'endereco')
        }
        value={props.nrNumero}
        type={'numeric'}
      />
      <InputStyled
        label={'Bairro'}
        onChangeText={value =>
          props.handleChange('nmBairro', value, 'endereco')
        }
        value={props.nmBairro}
        type={'default'}
      />
      <InputStyled
        label={'Cidade'}
        onChangeText={value =>
          props.handleChange('nmCidade', value, 'endereco')
        }
        value={props.nmCidade}
        type={'default'}
      />
      <InputStyled
        label={'Estado'}
        onChangeText={value =>
          props.handleChange('nmEstado', value, 'endereco')
        }
        value={props.nmEstado}
        type={'default'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default CadastroHospital;
