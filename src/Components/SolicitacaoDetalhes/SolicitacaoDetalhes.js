import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {LinearTextGradient} from 'react-native-text-gradient';

import {API} from '../../Configs/AxiosConfigs';
import InputStyled from '../InputStyled';
import CheckboxStyled from '../CheckboxStyled';
import SelectStyled from '../SelectStyled/SelectStyled';

const SolicitacaoDetalhes = ({data, handleChange, handleCheckBox}) => {
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
    return new Array(count)
      .fill(null)
      .map((item, index) => (
        <SelectStyled
          label={'Enfermidade'}
          options={enfermidade}
          value={data.cdEnfrmdade[index] ? data.cdEnfrmdade[index] : null}
          onValueChange={value =>
            handleChange('cdEnfrmdade', value, 'array', index)
          }
          key={`${index}-ref`}
        />
      ));
  };

  const renderExame = () => {
    console.log(data.cdExame.includes(1));
    return exame.map((item, index) => (
      <View key={`${item}-${index}-ref`}>
        <CheckboxStyled
          name={item.nmExame}
          label={item.nmExame}
          value={data.cdExame.includes(item.cdExame) ? true : false}
          onValueChange={(index, value) => handleCheckBox(item.cdExame, value)}
          index={index}
        />
      </View>
    ));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderEnfermidade()}
      <LinearTextGradient
        style={{
          fontWeight: '700',
          fontSize: moderateScale(10, 0.6),
          textAlign: 'right',
          marginTop: moderateScale(5, 0.6),
        }}
        locations={[0, 1]}
        colors={['#00BCD4', '#3D0B83']}>
        <Text onPress={() => setCount(count + 1)}>
          + ADICIONAR MAIS ENFERMIDADES
        </Text>
      </LinearTextGradient>
      {renderExame()}
      <InputStyled
        label={'Informações Importantes'}
        onChangeText={value => handleChange('dcMotivo', value)}
        value={data.dcMotivo}
        type={'default'}
      />
    </ScrollView>
  );
};

export default SolicitacaoDetalhes;
