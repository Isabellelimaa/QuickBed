import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import InputStyled from '../InputStyled/InputStyled';

const SolicitacaoPaciente = props => {
  const [value, setValue] = useState(0);

  return (
    <ScrollView>
      <InputStyled
        label={'Nome do Paciente'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
      <InputStyled
        label={'CPF'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
      <InputStyled
        label={'RG'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SolicitacaoPaciente;
