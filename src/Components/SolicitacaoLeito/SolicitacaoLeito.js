import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {LinearTextGradient} from 'react-native-text-gradient';

import InputStyled from '../InputStyled';
import Card from '../Card';

const SolicitacaoDetalhes = props => {
  const [value, setValue] = useState(0);

  const hospitais = [
    {name: 'Nome do hospital', especialidade: 'Especialidade', qtdleitos: 2},
    {name: 'Nome do hospital', especialidade: 'Especialidade', qtdleitos: 2},
    {name: 'Nome do hospital', especialidade: 'Especialidade', qtdleitos: 2},
    {name: 'Nome do hospital', especialidade: 'Especialidade', qtdleitos: 2},
    {name: 'Nome do hospital', especialidade: 'Especialidade', qtdleitos: 2},
  ];
  const renderCard = () => {
    return hospitais.map((value, index) => {
      return (
        <Card
          Key={index}
          name={value.name}
          especialidade={value.especialidade}
          qtd={value.qtdleitos}
        />
      );
    });
  };
  return (
    <>
      <InputStyled
        label={'Buscar por Hospitais'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'text'}
      />
      <View style={styles.viewText}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Hospitais de referência
        </Text>
        <LinearTextGradient locations={[0, 1]} colors={['#00BCD4', '#3D0B83']}>
          <Text>12 hospitais disponíveis</Text>
        </LinearTextGradient>
      </View>
      <ScrollView horizontal style={styles.cardContainer}>
        {renderCard()}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  viewText: {
    width: '100%',
    textAlign: 'left',
    marginLeft: moderateScale(20, 0.6),
    marginTop: moderateScale(5, 0.6),
    marginBottom: moderateScale(5, 0.6),
  },
  cardContainer: {
    height: moderateScale(850, 0.6),
    marginLeft: moderateScale(10, 0.6),
    marginRight: moderateScale(10, 0.6),
  },
});

export default SolicitacaoDetalhes;
