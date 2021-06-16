import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import {API} from '../../Configs/AxiosConfigs';
import InputStyled from '../InputStyled';
import CheckboxStyled from '../CheckboxStyled';
import SelectStyled from '../SelectStyled/SelectStyled';

const SolicitacaoDetalhes = ({data, handleChange}) => {
  const [enfermidade, setEnfermidade] = useState([]);
  const [exame, setExame] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    API.get('hospital/list-enfermidades')
      .then(response => {
        setEnfermidade(response.data.resultado);
      })
      .catch(error => {
        console.log(error);
      });

    API.get('hospital/list-exames')
      .then(response => {
        setExame(response.data.resultado);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderEnfermidade = () => {
    return new Array(count).fill(null).map((item, index) => {
      return (
        <SelectStyled
          label={'Enfermidade'}
          options={enfermidade}
          value={data.cdEnfrmdade[index] ? data.cdEnfrmdade[index] : null}
          onValueChange={value => handleChange('cdEnfrmdade', value, '', index)}
          key={`${index}-ref`}
        />
      );
    });
  };

  const renderExame = () => {
    return exame.map((item, index) => {
      return <CheckboxStyled name={item.nmExame} label={item.nmExame} />;
    });
  };

  return (
    <>
      <ScrollView>
        {renderEnfermidade()}
        <View style={styles.container}>{renderExame()}</View>
        <InputStyled
          label={'Informações Importantes'}
          onChangeText={value => handleChange('dcMotivo', value)}
          value={data.dcMotivo}
          type={'default'}
        />
      </ScrollView>
    </>
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
