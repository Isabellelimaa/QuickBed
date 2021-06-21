import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, ImageBackground, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Action} from 'react-native-router-flux';
import {useSelector} from 'react-redux';

import {API} from '../../Configs/AxiosConfigs';
import Message from '../../Components/Message';

const MinhasSolicitacoes = props => {
  const [data, setData] = useState([]);
  const [label, setLabel] = useState([]);
  const usuarioDataStore = useSelector(store => store.UserReducer.login_data);

  const renderMessages = () => {
    return data.map((value, index) => {
      return (
        <Message
          nmPaciente={value.paciente.nmPaciente}
          dcCpf={value.paciente.dcCpf}
          nmStatus={value.status.nmStatus}
          dcMotivo={value.dcMotivo}
          dataRegistro={value.dataRegistro}
        />
      );
    });
  };

  useEffect(() => {
    console.log(usuarioDataStore);

    // if (props.navigation.state.routeName == '_notificacoes') {
    //   API.get('solicitacao/enviadas?cdUsuario=1')
    //     .then(response => {
    //       setData(response.data.resultado);
    //       setLabel('Minhas solicitações');
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // } else {
    //   API.get('solicitacao/recebidas?cdHsptal=1')
    //     .then(response => {
    //       setData(response.data.resultado);
    //       setLabel('Solicitações recebidas');
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }
  });
  return (
    <>
      <ImageBackground
        source={require('../../Assets/Vector.png')}
        style={styles.image}>
        <Text style={styles.text}>{label}</Text>
      </ImageBackground>
      <ScrollView>{renderMessages()}</ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: moderateScale(16, 0.6),
    paddingLeft: moderateScale(15, 0.6),
  },
  image: {
    height: moderateScale(100, 0.6),
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: moderateScale(10, 0.6),
    width: '100%',
    justifyContent: 'center',
  },
});

export default MinhasSolicitacoes;
