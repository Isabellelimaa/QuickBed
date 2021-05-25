import React, {useState} from 'react';
import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import ButtonStyled from '../../Components/ButtonStyled';
import CadastroUsuario from '../../Components/CadastroUsuario';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Cadastro = props => {
  const [form, setForm] = useState(props.form);

  const renderCadastro = form => {
    if (form == 'login') {
      return <CadastroUsuario />;
    } else if (form == 'hospital') {
      return <Text>Hospital</Text>;
    } else if (form == 'endereco') {
      return <Text>Endereco</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Assets/Vector.png')}
        style={styles.image}>
        <Image
          style={styles.logo}
          source={require('../../Assets/LogoWhite.png')}
          resizeMode={'center'}
        />
        <Text style={styles.text}>
          Atenção, para se cadastrar, você tem que preencher alguns itens
          importantes
        </Text>
      </ImageBackground>
      <View style={styles.grid}>{renderCadastro(form)}</View>
      <View style={styles.grid}>
        <View
          style={{
            width: wp(65),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp(1),
          }}>
          <ButtonStyled onTouchEnd={() => setForm('hospital')} />
          <Text style={styles.text}>JÁ TEM UMA CONTA? CONECTE-SE</Text>
        </View>
      </View>
    </View>
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
  text: {
    marginLeft: moderateScale(20, 0.6),
    marginRight: moderateScale(20, 0.6),
    color: '#FFFFFF',
    fontSize: moderateScale(15, 0.6),
    textAlign: 'center',
  },
});

export default Cadastro;
