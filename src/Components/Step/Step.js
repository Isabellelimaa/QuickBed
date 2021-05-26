import React, {useState} from 'react';
import {StyleSheet, Text, ImageBackground, Image, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const Step = props => {
  const [step, setStep] = useState(props.step);

  return (
    <>
      <ImageBackground
        source={require('../../Assets/Vector.png')}
        style={styles.image}>
        <Image
          style={styles.logo}
          source={require('../../Assets/LogoWhite.png')}
          resizeMode={'center'}
        />
        <Text style={styles.text}>
          Atenção, para se cadastrar, você tem que preencher alguns itens
          importantes.
        </Text>
        <View style={styles.container}>
          <View style={styles.steps}>
            <LinearGradient
              colors={['#00BCD4', '#3D0B83']}
              style={styles.linearGradient}
              onTouchEnd={props.onTouchEnd}>
              <Text style={styles.textLinearGradient}>1</Text>
            </LinearGradient>
            <Text style={styles.textStep}>Login</Text>
          </View>
          <View style={styles.steps}>
            <LinearGradient
              colors={['#00BCD4', '#3D0B83']}
              style={styles.linearGradient}
              onTouchEnd={props.onTouchEnd}>
              <Text style={styles.textLinearGradient}>2</Text>
            </LinearGradient>
            <Text style={styles.textStep}>Hospital</Text>
          </View>
          <View style={styles.steps}>
            <LinearGradient
              colors={['#00BCD4', '#3D0B83']}
              style={styles.linearGradient}
              onTouchEnd={props.onTouchEnd}>
              <Text style={styles.textLinearGradient}>3</Text>
            </LinearGradient>
            <Text style={styles.textStep}>Endereço</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    height: moderateScale(250, 0.6),
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    justifyContent: 'center',
  },
  text: {
    marginLeft: moderateScale(20, 0.6),
    marginRight: moderateScale(20, 0.6),
    color: '#FFFFFF',
    fontSize: moderateScale(15, 0.6),
    textAlign: 'center',
  },
  textStep: {
    marginLeft: moderateScale(5, 0.6),
    color: '#FFFFFF',
    fontSize: moderateScale(12, 0.6),
    textAlign: 'center',
  },
  steps: {
    flex: 1,
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  linearGradient: {
    width: moderateScale(18, 0.6),
    height: moderateScale(18, 0.6),
    marginTop: moderateScale(8, 0.6),
    borderRadius: 10,
  },
  textLinearGradient: {
    color: '#FFFFFF',
    fontSize: moderateScale(12, 0.6),
    textAlign: 'center',
  },
});

export default Step;
