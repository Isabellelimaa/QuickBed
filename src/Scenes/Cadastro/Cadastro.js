import React, {useState} from 'react';
import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import ButtonStyled from '../../Components/ButtonStyled';
import CadastroUsuario from '../../Components/CadastroUsuario';
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
      nextForm = 'endereco';
      return <Text>Hospital</Text>;
    } else if (form == 'endereco') {
      onTouchEnd = Actions.Cadastro({form: 'login'});
      return <Text>Endereco</Text>;
    }
  };

  return (
    <>
      <Step step={1} />
      <View style={styles.container}>
        <View style={styles.grid}>{renderCadastro(form)}</View>
        <View style={styles.grid}>
          <View
            style={{
              width: wp(65),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: hp(1),
            }}>
            <ButtonStyled onTouchEnd={() => setForm(nextForm)} />
            <Text style={styles.text}>JÁ TEM UMA CONTA? CONECTE-SE</Text>
          </View>
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
