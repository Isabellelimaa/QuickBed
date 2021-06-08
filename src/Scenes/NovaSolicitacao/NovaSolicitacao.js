import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Actions} from 'react-native-router-flux';

import Step from '../../Components/Step';
import SolicitacaoPaciente from '../../Components/SolicitacaoPaciente';
import SolicitacaoDetalhes from '../../Components/SolicitacaoDetalhes';
import SolicitacaoLeito from '../../Components/SolicitacaoLeito';
import Rodape from '../../Components/Rodape';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const NovaSolicitacao = props => {
  const [form, setForm] = useState('paciente');
  let nextForm;

  const renderCadastro = form => {
    if (form == 'paciente') {
      nextForm = 'detalhes';
      return <SolicitacaoPaciente />;
    } else if (form == 'detalhes') {
      nextForm = 'leito';
      return <SolicitacaoDetalhes />;
    } else if (form == 'leito') {
      return <SolicitacaoLeito />;
    }
  };

  const onTouchEnd = nextForm => {
    if (form == 'leito') {
      Actions.Welcome();
    } else {
      setForm(nextForm);
    }
  };

  const stepsTitles = {
    1: 'Dados do paciente',
    2: 'Detalhes',
    3: 'Leito',
  };

  return (
    <>
      <Step step={1} titles={stepsTitles} />
      <View style={styles.cadastro}>{renderCadastro(form)}</View>
      <View style={styles.rodape}>
        <Rodape onTouchEnd={() => onTouchEnd(nextForm)} label={'Continuar'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    justifyContent: 'center',
  },
  rodape: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: moderateScale(10, 0.6),
  },
  cadastro: {
    paddingTop: moderateScale(20, 0.6),
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NovaSolicitacao;
