import React, {useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Scene, Router, Stack, Actions} from 'react-native-router-flux';

import Cadastro from '../../Scenes/Cadastro';
import Login from '../../Scenes/Login';
import NovaSolicitacao from '../../Scenes/NovaSolicitacao';

const NavBar = () => {
  const SettingsTab = props => {
    let textColor = props.focused ? '#333333' : '#999999';
    const settingImageFocused = require('../../Assets/Icons/Message.png');
    const settingImageUnfocused = require('../../Assets/Icons/Message.png');
    let settingImage = props.focused
      ? settingImageFocused
      : settingImageUnfocused;
    let borderColor = props.focused ? '#333333' : '#FFFFFF';
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopColor: borderColor,
          borderTopWidth: 4,
          padding: 20,
          width: '100%',
        }}>
        <Image source={settingImage} style={{width: 20, height: 20}} />
        <Text style={{color: textColor}}>Settings</Text>
      </View>
    );
  };

  return (
    <>
      <Router>
        <Stack>
          <Scene
            key="Tabbar"
            tabs={true}
            tabBarStyle={styles.tabBar}
            default="Main"
            hideNavBar={true}>
            <Scene
              key="home"
              component={Login}
              hideNavBar={true}
              icon={SettingsTab}
              title="Home"
            />
            <Scene
              key="recebidas"
              initial={true}
              component={Cadastro}
              hideNavBar={true}
              icon={SettingsTab}
              title="Recebidas"
            />
            <Scene
              key="solicitar"
              component={NovaSolicitacao}
              hideNavBar={true}
              icon={SettingsTab}
              title="Solicitar"
            />
            <Scene
              key="notificacoes"
              component={Login}
              hideNavBar={true}
              icon={SettingsTab}
              title="Notificações"
            />
            <Scene
              key="configuracoes"
              component={Login}
              hideNavBar={true}
              icon={SettingsTab}
              title="Configurações"
            />
          </Scene>
        </Stack>
      </Router>
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    borderTopColor: 'darkgrey',
    borderTopWidth: 1,
    opacity: 0.98,
    justifyContent: 'space-between',
  },
});

export default NavBar;
