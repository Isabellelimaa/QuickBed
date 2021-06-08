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
          source={require('../../Assets/LogoWhite2.png')}
          resizeMode={'contain'}
        />
        <Text style={styles.text}>
          Atenção, você terá que preencher alguns itens importantes.
        </Text>
        <View style={styles.container}>
          <View style={styles.steps}>
            <LinearGradient
              colors={['#00BCD4', '#3D0B83']}
              style={styles.linearGradient}
              onTouchEnd={props.onTouchEnd}>
              <Text style={styles.textLinearGradient}>1</Text>
            </LinearGradient>
            <Text style={styles.textStep}>{props.titles[1]}</Text>
          </View>
          <View style={styles.steps}>
            <LinearGradient
              colors={['#00BCD4', '#3D0B83']}
              style={styles.linearGradient}
              onTouchEnd={props.onTouchEnd}>
              <Text style={styles.textLinearGradient}>2</Text>
            </LinearGradient>
            <Text style={styles.textStep}>{props.titles[2]}</Text>
          </View>
          <View style={styles.steps}>
            <LinearGradient
              colors={['#00BCD4', '#3D0B83']}
              style={styles.linearGradient}
              onTouchEnd={props.onTouchEnd}>
              <Text style={styles.textLinearGradient}>3</Text>
            </LinearGradient>
            <Text style={styles.textStep}>{props.titles[3]}</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: moderateScale(15, 0.6),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    height: moderateScale(180, 0.6),
    resizeMode: 'cover',
    justifyContent: 'center',
    textAlign: 'center',
  },
  logo: {
    marginBottom: moderateScale(10, 0.6),
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
