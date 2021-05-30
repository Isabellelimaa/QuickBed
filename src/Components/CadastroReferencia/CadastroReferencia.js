import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import InputStyled from '../InputStyled/InputStyled';

const CadastroReferencia = props => {
  const [value, setValue] = useState(0);

  return (
    <ScrollView>
      <InputStyled
        label={'Referência'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default CadastroReferencia;
