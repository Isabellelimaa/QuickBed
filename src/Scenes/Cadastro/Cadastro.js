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

  return (
    <>
      <Step step={1} />
      <View style={styles.container}>
        <View style={styles.grid}>{renderCadastro(form)}</View>
        <View style={styles.grid}>
          <Rodape
            onTouchEnd={() => onTouchEnd(nextForm)}
            label={'Cadastrar'}
            text={'JÁ TEM UMA CONTA? CONECTE-SE'}
          />
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

export default Cadastro;
