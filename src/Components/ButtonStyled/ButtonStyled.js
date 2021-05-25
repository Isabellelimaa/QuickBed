import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const ButtonStyled = props => {
  return (
    <LinearGradient
      colors={['#00BCD4', '#3D0B83']}
      style={styles.linearGradient}
      onTouchEnd={props.onTouchEnd}>
      <Text style={styles.buttonText}>Cadastrar</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    marginTop: moderateScale(8, 0.6),
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default ButtonStyled;
