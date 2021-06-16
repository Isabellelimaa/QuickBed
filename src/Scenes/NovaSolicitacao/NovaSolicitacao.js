import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Actions} from 'react-native-router-flux';

import Step from '../../Components/Step';
import SolicitacaoPaciente from '../../Components/SolicitacaoPaciente';
import SolicitacaoDetalhes from '../../Components/SolicitacaoDetalhes';
import SolicitacaoLeito from '../../Components/SolicitacaoLeito';
import Rodape from '../../Components/Rodape';

const NovaSolicitacao = props => {
  const [component, setComponent] = useState('paciente');
  const [form, setForm] = useState({
    cdUsuario: '',
    cdHsptal: '',
    paciente: {
      nmPaciente: '',
      dcCpf: '',
      dcRg: '',
    },
    dcMotivo: '',
    cdExame: [],
    cdEnfrmdade: [],
  });
  let nextComponent;

  const handleChange = (name, value, type = null, index = null) => {
    if (type !== null) {
      if ((name == 'cdEnfrmdade' || name == 'cdExame') && index !== null) {
        const newObj = form;

        newObj[type][name][index] = value;

        setForm(newObj);

        console.log(newObj);
      } else {
        setForm({...form, [type]: {...form[type], [name]: value}});
      }
    } else setForm({...form, [name]: value});
  };

  const renderCadastro = component => {
    if (component == 'paciente') {
      nextComponent = 'detalhes';
      return <SolicitacaoPaciente handleChange={handleChange} data={form} />;
    } else if (component == 'detalhes') {
      nextComponent = 'leito';
      return <SolicitacaoDetalhes handleChange={handleChange} data={form} />;
    } else if (component == 'leito') {
      return <SolicitacaoLeito handleChange={handleChange} data={form} />;
    }
  };

  const onTouchEnd = nextComponent => {
    if (component == 'leito') {
      console.log(form);
      // Actions.Welcome();
    } else {
      setComponent(nextComponent);
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
      <View style={styles.cadastro}>{renderCadastro(component)}</View>
      <View style={styles.rodape}>
        <Rodape
          onTouchEnd={() => onTouchEnd(nextComponent)}
          label={'Continuar'}
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
