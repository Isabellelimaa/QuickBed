import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import {moderateScale} from 'react-native-size-matters';

const Card = props => {
  return (
    <View style={styles.backgroundColored(props.isSelected)} key={props.key}>
      <TouchableHighlight onPress={props.onPress}>
        <View>
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
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
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
  backgroundColored: isSelected => ({
    backgroundColor: isSelected ? '#E4E4E4' : '#F0F0F0',
    width: moderateScale(140, 0.6),
    height: moderateScale(140, 0.6),
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: moderateScale(2.5, 0.6),
    marginLeft: moderateScale(2.5, 0.6),
  }),
});

export default Card;
