import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';

const Configuracoes = props => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <Image
          source={require('../../Assets/Logo.png')}
          resizeMode={'center'}
        />
      </View>
      <View style={styles.grid}>
        <Image
          source={require('../../Assets/Signin.png')}
          resizeMode={'center'}
        />
      </View>
      <View style={styles.grid}>
        <LinearTextGradient
          style={{fontWeight: '700', fontSize: 25}}
          locations={[0, 1]}
          colors={['#00BCD4', '#3D0B83']}>
          <Text>Em Construção</Text>
        </LinearTextGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Configuracoes;
