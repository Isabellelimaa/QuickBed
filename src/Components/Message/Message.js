import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const Message = props => {
  return (
    <View
      style={{
        marginTop: moderateScale(10, 0.6),
        marginLeft: moderateScale(20, 0.6),
        marginRight: moderateScale(20, 0.6),
      }}>
      <View style={styles.displayRow}>
        <View>
          <Text style={styles.textName}>{props.nmPaciente}</Text>
          <Text style={styles.textCpf}>{props.dcCpf}</Text>
        </View>
        <View>
          <Text style={styles.textColored}>{props.nmStatus}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textDescription}>{props.dcMotivo}</Text>
      </View>
      <View style={styles.displayRow}>
        <View style={styles.displayRow2}>
          <Image
            resizeMode={'contain'}
            source={require('../../Assets/Icons/Clock.png')}
            style={styles.imageTime}
          />
          <Text style={styles.textColored}>{props.dataRegistro}</Text>
        </View>
        <View style={styles.displayRow2}>
          <View style={styles.iconRed} />
          <Text style={styles.textColored}>Novas mensagens</Text>
        </View>
      </View>
      <View style={styles.hr} />
    </View>
  );
};

const styles = StyleSheet.create({
  displayRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  displayRow2: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: moderateScale(5, 0.6),
    alignItems: 'center',
  },
  iconRed: {
    backgroundColor: 'red',
    height: moderateScale(7, 0.6),
    width: moderateScale(7, 0.6),
    borderRadius: 10,
    marginRight: moderateScale(3, 0.6),
  },
  hr: {
    backgroundColor: '#DBD9DD',
    height: moderateScale(1.5, 0.6),
    borderRadius: 10,
    marginTop: moderateScale(10, 0.6),
  },
  textName: {
    fontSize: moderateScale(14, 0.6),
    marginBottom: moderateScale(0.5, 0.6),
  },
  textCpf: {
    fontSize: moderateScale(10, 0.6),
    marginBottom: moderateScale(5, 0.6),
  },
  textDescription: {
    fontWeight: '700',
    fontSize: moderateScale(14, 0.6),
    marginBottom: moderateScale(5, 0.6),
  },
  textColored: {
    color: '#989AA6',
    fontSize: moderateScale(12, 0.6),
  },
  imageTime: {
    marginRight: moderateScale(3, 0.6),
  },
});

export default Message;
