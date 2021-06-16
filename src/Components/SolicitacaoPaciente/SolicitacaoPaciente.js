import React from 'react';
import {ScrollView} from 'react-native';

import InputStyled from '../InputStyled/InputStyled';

const SolicitacaoPaciente = ({data, handleChange}) => {
  return (
    <ScrollView>
      <InputStyled
        label={'Nome do Paciente'}
        onChangeText={value => handleChange('nmPaciente', value, 'paciente')}
        value={data.paciente.nmPaciente}
        type={'default'}
      />
      <InputStyled
        label={'CPF'}
        onChangeText={value => handleChange('dcCpf', value, 'paciente')}
        value={data.paciente.dcCpf}
        type={'default'}
      />
      <InputStyled
        label={'RG'}
        onChangeText={value => handleChange('dcRg', value, 'paciente')}
        value={data.paciente.dcRg}
        type={'default'}
      />
    </ScrollView>
  );
};

export default SolicitacaoPaciente;
