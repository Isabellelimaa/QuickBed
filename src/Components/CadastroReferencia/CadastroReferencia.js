import React, {useState, useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {LinearTextGradient} from 'react-native-text-gradient';

import {API} from '../../Configs/AxiosConfigs';
import InputStyled from '../InputStyled/InputStyled';
import SelectStyled from '../SelectStyled/SelectStyled';

const CadastroReferencia = ({data, handleChange}) => {
  const [referencia, setReferencia] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    API.get('hospital/list-referencia')
      .then(response => {
        console.log(response.data.resultado);
        setReferencia(response.data.resultado);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderReferencia = () => {
    return new Array(count).fill(null).map((item, index) => {
      return (
        <SelectStyled
          label={'Referência'}
          options={referencia}
          value={
            data.hospital.cdReferencia[index]
              ? data.hospital.cdReferencia[index]
              : null
          }
          onValueChange={value =>
            handleChange('cdReferencia', value, 'hospital', index)
          }
          key={`${index}-ref`}
        />
      );
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderReferencia()}
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
          + ADICIONAR MAIS ESPECIALIDADES
        </Text>
      </LinearTextGradient>
      <InputStyled
        label={'Leitos Disponíveis'}
        onChangeText={value => handleChange('qtLeito', value, 'hospital')}
        value={data.hospital.qtLeito}
        type={'numeric'}
      />
    </ScrollView>
  );
};

export default CadastroReferencia;
