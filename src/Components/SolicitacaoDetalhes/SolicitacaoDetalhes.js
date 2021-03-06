import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import InputStyled from '../InputStyled';
import CheckboxStyled from '../CheckboxStyled';

const SolicitacaoDetalhes = props => {
  const [value, setValue] = useState(null);

  return (
    <ScrollView>
      <InputStyled
        label={'Trauma'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'default'}
      />
      <View style={styles.container}>
        <CheckboxStyled name={'teste'} label={'teste'} />
        <CheckboxStyled name={'teste'} label={'teste'} />
        <CheckboxStyled name={'teste'} label={'teste'} />
        <CheckboxStyled name={'teste'} label={'teste'} />
      </View>
      <InputStyled
        label={'Informações Importantes'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'default'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default SolicitacaoDetalhes;
