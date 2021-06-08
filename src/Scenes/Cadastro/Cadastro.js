import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Actions} from 'react-native-router-flux';

import Rodape from '../../Components/Rodape';
import CadastroUsuario from '../../Components/CadastroUsuario';
import CadastroHospital from '../../Components/CadastroHospital';
import CadastroReferencia from '../../Components/CadastroReferencia';
import Step from '../../Components/Step';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Cadastro = props => {
  const [form, setForm] = useState(props.form);
  let nextForm;

  const renderCadastro = form => {
    if (form == 'login') {
      nextForm = 'hospital';
      return <CadastroUsuario />;
    } else if (form == 'hospital') {
      nextForm = 'referencia';
      return <CadastroHospital />;
    } else if (form == 'referencia') {
      return <CadastroReferencia />;
    }
  };

  const onTouchEnd = nextForm => {
    if (form == 'referencia') {
      Actions.Welcome();
    } else {
      setForm(nextForm);
    }
  };

  const stepsTitles = {
    1: 'Login',
    2: 'Dados do Hospital',
    3: 'Referência',
  };

  return (
    <>
      <Step step={1} titles={stepsTitles} />
      <View style={styles.cadastro}>{renderCadastro(form)}</View>
      <View style={styles.rodape}>
        <Rodape
          onTouchEnd={() => onTouchEnd(nextForm)}
          label={'Cadastrar'}
          text={'JÁ TEM UMA CONTA? CONECTE-SE'}
        />
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
  },
  cadastro: {
    paddingTop: moderateScale(10, 0.6),
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cadastro;
