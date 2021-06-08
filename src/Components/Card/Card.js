import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import {moderateScale} from 'react-native-size-matters';

const Card = props => {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image
          resizeMode={'contain'}
          style={styles.image}
          source={require('../../Assets/Icons/Hospital.png')}
        />
      </View>
      <Text style={styles.textName}>{props.name}</Text>
      <Text style={styles.textEspecialidade}>{props.especialidade}</Text>
      <LinearTextGradient
        style={styles.textGradient}
        locations={[0, 1]}
        colors={['#00BCD4', '#3D0B83']}>
        <Text>{props.qtd} leitos disponíveis</Text>
      </LinearTextGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    width: moderateScale(140, 0.6),
    height: moderateScale(140, 0.6),
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: moderateScale(2.5, 0.6),
    marginLeft: moderateScale(2.5, 0.6),
  },
  viewImage: {
    width: '100%',
  },
  image: {
    marginBottom: moderateScale(10, 0.6),
    width: '100%',
    justifyContent: 'center',
  },
  textName: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: moderateScale(2.5, 0.6),
  },
  textEspecialidade: {
    textAlign: 'center',
    fontSize: 11,
    marginBottom: moderateScale(8, 0.6),
  },
  textGradient: {
    fontWeight: '200',
    fontSize: 11,
    textAlign: 'center',
  },
});

export default Card;
