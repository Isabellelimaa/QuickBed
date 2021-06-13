import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import InputStyled from '../InputStyled/InputStyled';

const SolicitacaoPaciente = props => {
  const [value, setValue] = useState(null);

  return (
    <ScrollView>
      <InputStyled
        label={'Nome do Paciente'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'default'}
      />
      <InputStyled
        label={'CPF'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'default'}
      />
      <InputStyled
        label={'RG'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'default'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SolicitacaoPaciente;
