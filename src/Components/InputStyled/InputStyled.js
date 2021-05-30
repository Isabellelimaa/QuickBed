import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const InputStyled = props => {
  return (
    <>
      <Text style={styles.label}>{props.label.toUpperCase()}</Text>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.type}
        secureTextEntry={props.secureTextEntry}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    textAlign: 'left',
    width: moderateScale(300, 0.6),
    color: '#999',
    fontSize: moderateScale(12, 0.6),
  },
  input: {
    width: moderateScale(300, 0.6),
    height: moderateScale(40, 0.6),
    fontSize: moderateScale(16, 0.6),
    marginTop: moderateScale(1, 0.6),
    marginBottom: moderateScale(5, 0.6),
    padding: moderateScale(10, 0.6),
    borderRadius: 5,
    borderColor: '#999',
    borderWidth: 1,
  },
});

export default InputStyled;
