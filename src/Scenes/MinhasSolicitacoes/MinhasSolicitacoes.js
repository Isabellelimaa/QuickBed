import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Actions} from 'react-native-router-flux';

import Message from '../../Components/Message';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const MinhasSolicitacoes = props => {
  return (
    <>
      <ImageBackground
        source={require('../../Assets/Vector.png')}
        style={styles.image}>
        <Text style={styles.text}>Minhas solicitações</Text>
      </ImageBackground>
      <View>
        <Message />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: moderateScale(16, 0.6),
    paddingLeft: moderateScale(15, 0.6),
  },
  image: {
    height: moderateScale(100, 0.6),
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: moderateScale(10, 0.6),
    width: '100%',
    justifyContent: 'center',
  },
});

export default MinhasSolicitacoes;
