import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Actions} from 'react-native-router-flux';

import Step from '../../Components/Step';
import SolicitacaoPaciente from '../../Components/SolicitacaoPaciente';
import SolicitacaoDetalhes from '../../Components/SolicitacaoDetalhes';
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
      return <CadastroReferencia />;
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
      <View style={styles.container}>
        <View style={styles.grid}>{renderCadastro(form)}</View>
        <View style={styles.grid}>
          <Rodape onTouchEnd={() => onTouchEnd(nextForm)} label={'Continuar'} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    justifyContent: 'center',
  },
  grid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NovaSolicitacao;
