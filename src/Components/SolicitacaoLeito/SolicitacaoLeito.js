import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {LinearTextGradient} from 'react-native-text-gradient';
import {useSelector} from 'react-redux';

import {API} from '../../Configs/AxiosConfigs';
import Card from '../Card';

const SolicitacaoDetalhes = ({data, handleChange}) => {
  const [hospitais, setHospitais] = useState([]);
  const usuarioDataStore = useSelector(store => store.UserReducer.login_data);

  const renderCard = () => {
    return hospitais.map((value, index) => {
      return (
        <Card
          Key={value.cdHsptal}
          name={value.nmHsptal}
          especialidade={value.refrncia[0].nmRefrncia}
          qtd={value.qtLeito}
          isSelected={data.cdHsptal == value.cdHsptal ? true : false}
          onPress={() => handleChange('cdHsptal', value.cdHsptal)}
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
        setHospitais(response.data.resultado);
      })
      .catch(error => {
        console.log(error);
      });
  }, [usuarioDataStore.response.accessToken]);
  return (
    <>
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
    marginBottom: moderateScale(5, 0.6),
  },
  cardContainer: {
    height: moderateScale(850, 0.6),
    marginLeft: moderateScale(10, 0.6),
    marginTop: moderateScale(15, 0.6),
    marginRight: moderateScale(10, 0.6),
  },
});

export default SolicitacaoDetalhes;
