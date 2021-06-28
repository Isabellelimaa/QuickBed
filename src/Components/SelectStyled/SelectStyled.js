import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Picker} from '@react-native-picker/picker';

const SelectStyled = props => {
  const renderOptions = () => {
    return props.options.map((value, index) => {
      return <Picker.Item label={value.value} value={value.key} key={index} />;
    });
  };

  return (
    <>
      <Text style={styles.label}>{props.label.toUpperCase()}</Text>
      <View style={styles.selectBox}>
        <Picker selectedValue={props.value} onValueChange={props.onValueChange}>
          {renderOptions()}
        </Picker>
      </View>
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
  selectBox: {
    marginTop: moderateScale(1, 0.6),
    marginBottom: moderateScale(5, 0.6),
    borderRadius: 5,
    borderColor: '#999',
    borderWidth: 1,
  },
});

export default SelectStyled;
