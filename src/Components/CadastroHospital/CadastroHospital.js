import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import InputStyled from '../InputStyled';

const CadastroHospital = props => {
  const [value, setValue] = useState(0);

  return (
    <ScrollView>
      <InputStyled
        label={'Nome'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
      <InputStyled
        label={'Telefone'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
      <InputStyled
        label={'CEP'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
      <InputStyled
        label={'Endereço'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
      <InputStyled
        label={'Bairro'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
      <InputStyled
        label={'Cidade'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
      <InputStyled
        label={'Estado'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default CadastroHospital;
