import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Actions} from 'react-native-router-flux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ButtonStyled from '../ButtonStyled';

const Rodape = props => {
  const renderText = () => {
    if (props.text)
      return (
        <Text style={styles.text} onPress={() => Actions.Login()}>
          {props.text}
        </Text>
      );
  };

  return (
    <>
      <View style={styles.container}>
        <ButtonStyled onTouchEnd={props.onTouchEnd} title={props.label} />
        {renderText()}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(65),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1),
  },
  text: {
    marginTop: moderateScale(8, 0.6),
    color: '#8F8F8F',
    fontSize: moderateScale(12, 0.6),
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default Rodape;
