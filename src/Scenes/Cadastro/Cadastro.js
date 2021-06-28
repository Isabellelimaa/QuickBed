import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Actions} from 'react-native-router-flux';

import {API} from '../../Configs/AxiosConfigs';
import Rodape from '../../Components/Rodape';
import CadastroUsuario from '../../Components/CadastroUsuario';
import CadastroHospital from '../../Components/CadastroHospital';
import CadastroReferencia from '../../Components/CadastroReferencia';
import Step from '../../Components/Step';

const Cadastro = props => {
  const [component, setComponent] = useState(props.component);
  const [form, setForm] = useState({
    dcLogin: '',
    dcSenha: '',
    dcEmail: '',
    hospital: {
      nmHsptal: '',
      dcTlfone: '',
      cdReferencia: [],
      qtLeito: '',
    },
    endereco: {
      nmEstado: '',
      nmCidade: '',
      nmBairro: '',
      nmRua: '',
      nrNumero: '',
      dcComplmnto: '',
      dcCep: '',
    },
  });
  let nextComponent;

  const handleChange = (name, value, type = null, index = null) => {
    if (type !== null) {
      if (name == 'cdReferencia' && index !== null) {
        const newObj = form;

        newObj[type][name][index] = value;

        setForm(newObj);

        console.log(newObj);
      } else {
        setForm({...form, [type]: {...form[type], [name]: value}});
      }
    } else setForm({...form, [name]: value});
  };

  const handleSubmit = () => {
    API.post('/usuario', form)
      .then(response => {
        Actions.Confirmacao({mensagem: response.data.mensagem});
      })
      .catch(error => {
        console.log(error);
      });
  };

  const renderCadastro = component => {
    if (component == 'login') {
      nextComponent = 'hospital';
      return <CadastroUsuario handleChange={handleChange} data={form} />;
    } else if (component == 'hospital') {
      nextComponent = 'referencia';
      return <CadastroHospital handleChange={handleChange} data={form} />;
    } else if (component == 'referencia') {
      return <CadastroReferencia handleChange={handleChange} data={form} />;
    }
  };

  const onTouchEnd = nextComponent => {
    if (component == 'referencia') {
      handleSubmit();
    } else {
      setComponent(nextComponent);
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
      <View style={styles.cadastro}>{renderCadastro(component)}</View>
      <View style={styles.rodape}>
        <Rodape
          onTouchEnd={() => onTouchEnd(nextComponent)}
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
