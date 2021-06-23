import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {LinearTextGradient} from 'react-native-text-gradient';
import {useSelector} from 'react-redux';

import {API} from '../../Configs/AxiosConfigs';
import InputStyled from '../InputStyled';
import Card from '../Card';

const SolicitacaoDetalhes = props => {
  const [value, setValue] = useState(null);
  const [hospitais, setHospitais] = useState([]);
  const usuarioDataStore = useSelector(store => store.UserReducer.login_data);

  // const hospitais = [
  //   {name: 'Nome do hospital', especialidade: 'Especialidade', qtdleitos: 2},
  //   {name: 'Nome do hospital', especialidade: 'Especialidade', qtdleitos: 2},
  //   {name: 'Nome do hospital', especialidade: 'Especialidade', qtdleitos: 2},
  //   {name: 'Nome do hospital', especialidade: 'Especialidade', qtdleitos: 2},
  //   {name: 'Nome do hospital', especialidade: 'Especialidade', qtdleitos: 2},
  // ];

  const renderCard = () => {
    return hospitais.map((value, index) => {
      return (
        <Card
          Key={index}
          name={value.nmHsptal}
          especialidade={value.refrncia[0].nmRefrncia}
          qtd={value.qtLeito}
        />
      );
    });
  };

  useEffect(() => {
    API.get('hospital/search', {
      headers: {
        Authorization: ` Bearer ${usuarioDataStore.response.accessToken}`,
      },
    })
      .then(response => {
        console.log(response.data.resultado);
        setHospitais(response.data.resultado);
      })
      .catch(error => {
        console.log(error);
      });
  }, [usuarioDataStore.response.accessToken]);
  return (
    <>
      <InputStyled
        label={'Buscar por Hospitais'}
        onChangeText={() => console.log('teste')}
        value={value}
        type={'default'}
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
    textAlign: 'center',
    marginLeft: moderateScale(70, 0.6),
    marginTop: moderateScale(10, 0.6),
    marginBottom: moderateScale(5, 0.6),
  },
  cardContainer: {
    height: moderateScale(850, 0.6),
    marginLeft: moderateScale(10, 0.6),
    marginRight: moderateScale(10, 0.6),
  },
});

export default SolicitacaoDetalhes;
