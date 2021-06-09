import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const Message = props => {
  return (
    <View style={{margin: moderateScale(10, 0.6)}}>
      <View style={styles.displayRow}>
        <View>
          <Text>Nome do Paciente</Text>
          <Text>115.392.366-17</Text>
        </View>
        <View>
          <Text>STATUS</Text>
        </View>
      </View>
      <View>
        <Text>
          Descrição de estado de saúde do paciente, breve informação..
        </Text>
      </View>
      <View style={styles.displayRow}>
        <View style={styles.displayRow2}>
          <Image
            resizeMode={'contain'}
            source={require('../../Assets/Icons/Clock.png')}
          />
          <Text>24 min</Text>
        </View>
        <View>
          <Text>Novas mensagens</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#DBD9DD',
          height: moderateScale(1.5, 0.6),
          borderRadius: 10,
          marginTop: moderateScale(10, 0.6),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  displayRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  displayRow2: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Message;
