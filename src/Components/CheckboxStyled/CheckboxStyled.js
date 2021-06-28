import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {moderateScale} from 'react-native-size-matters';

const CheckboxStyled = props => {
  return (
    <View style={styles.container}>
      <CheckBox
        name={props.name}
        disabled={false}
        value={props.value}
        onValueChange={newValue => props.onValueChange(props.index, newValue)}
      />
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    padding: moderateScale(1.5, 0.6),
  },
  label: {
    margin: 8,
    color: '#999',
  },
});

export default CheckboxStyled;
