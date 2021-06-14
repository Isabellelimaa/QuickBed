import React, {Fragment, useState} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Actions, Scene, Router} from 'react-native-router-flux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import CardUser from '../../Components/CardUser';
import TabView from '../../Components/TabView';

const cardData = {
  name: 'Sônia',
  hospital: 'Hospital Luiz Souza',
  position: 'Cardiologia',
};

const tabViewData = {
  options: ['Notificações', 'Favoritos'],
  first: [
    {
      image: require('../../Assets/UserLogged.png'),
      name: 'Nome do hospital',
      description: 'Descrição do hostipal e do que ele precisa. No caso a vaga',
      time: '24 min',
      distance: '3.5KM',
      favorite: true,
    },
    {
      image: require('../../Assets/UserLogged.png'),
      name: 'Nome do hospital',
      description: 'Descrição do hostipal e do que ele precisa. No caso a vaga',
      time: '24 min',
      distance: '3.5KM',
      favorite: false,
    },
  ],
  second: [
    {
      image: require('../../Assets/UserLogged.png'),
      name: 'Nome do hospital 2',
      description: 'Descrição do hostipal e do que ele precisa. No caso a vaga',
      time: '24 min',
      distance: '3.5KM',
      favorite: true,
    },
    {
      image: require('../../Assets/UserLogged.png'),
      name: 'Nome do hospital 2',
      description: 'Descrição do hostipal e do que ele precisa. No caso a vaga',
      time: '24 min',
      distance: '3.5KM',
      favorite: false,
    },
  ],
};

const Home = () => {
  const [tabSelected, setTabSelected] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <View style={styles.firstViewHeader} />
        <View style={styles.secondViewHeader}>
          <Image
            source={require('../../Assets/Logo.png')}
            style={{height: moderateScale(27), width: moderateScale(142)}}
            resizeMode={'center'}
          />
        </View>
        <View style={styles.thirdViewHeader}>
          <Image
            source={require('../../Assets/UserLogged.png')}
            style={{height: moderateScale(32), width: moderateScale(31)}}
            resizeMode={'center'}
          />
        </View>
      </View>
      <View style={styles.viewCardUser}>
        <CardUser data={cardData} />
      </View>
      <View style={styles.viewTab}>
        <TabView
          data={tabViewData}
          selected={tabSelected}
          onPress={setTabSelected}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(2),
    paddingLeft: wp(6),
    paddingRight: wp(6),
    backgroundColor: '#f8f8f8',
  },
  viewHeader: {
    flex: 0.2,
    flexDirection: 'row',
  },
  firstViewHeader: {
    flex: 1,
  },
  secondViewHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdViewHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  viewCardUser: {
    flex: 0.5,
    marginTop: hp(3),
  },
  viewTab: {
    flex: 1,
    marginTop: hp(3),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Home;
