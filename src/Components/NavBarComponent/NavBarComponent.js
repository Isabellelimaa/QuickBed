import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Scene, Router, Stack} from 'react-native-router-flux';

import Configuracoes from '../../Scenes/Configuracoes';
import Home from '../../Scenes/Home';
import NovaSolicitacao from '../../Scenes/NovaSolicitacao';
import MinhasSolicitacoes from '../../Scenes/MinhasSolicitacoes';

const NavBarComponent = () => {
  const SettingsTab = props => {
    const settingImageFocused = require('../../Assets/Icons/SettingsSelected.png');
    const settingImageUnfocused = require('../../Assets/Icons/Settings.png');
    let settingImage = props.focused
      ? settingImageFocused
      : settingImageUnfocused;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          width: '100%',
        }}>
        <Image source={settingImage} style={{width: 20, height: 20}} />
      </View>
    );
  };

  const MessagesTab = props => {
    const MessageImageFocused = require('../../Assets/Icons/MessageSelected.png');
    const MessageImageUnfocused = require('../../Assets/Icons/Message.png');
    let MessageImage = props.focused
      ? MessageImageFocused
      : MessageImageUnfocused;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          width: '100%',
        }}>
        <Image source={MessageImage} style={{width: 20, height: 20}} />
      </View>
    );
  };

  const SearchTab = props => {
    const SearchImageFocused = require('../../Assets/Icons/SearchSelected.png');
    const SearchImageUnfocused = require('../../Assets/Icons/Search.png');
    let SearchImage = props.focused ? SearchImageFocused : SearchImageUnfocused;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          width: '100%',
        }}>
        <Image source={SearchImage} style={{width: 20, height: 20}} />
      </View>
    );
  };

  const HomeTab = props => {
    const HomeImageFocused = require('../../Assets/Icons/HomeSelected.png');
    const HomeImageUnfocused = require('../../Assets/Icons/Home.png');
    let HomeImage = props.focused ? HomeImageFocused : HomeImageUnfocused;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          width: '100%',
        }}>
        <Image source={HomeImage} style={{width: 20, height: 20}} />
      </View>
    );
  };

  const AddSolTab = props => {
    const AddSolTabImageFocused = require('../../Assets/Icons/AddSelected.png');
    const AddSolTabImageUnfocused = require('../../Assets/Icons/AddSelected.png');
    let AddSolTabImage = props.focused
      ? AddSolTabImageFocused
      : AddSolTabImageUnfocused;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          width: '100%',
        }}>
        <Image source={AddSolTabImage} style={{width: 20, height: 20}} />
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
              component={Home}
              hideNavBar={true}
              icon={HomeTab}
              title="Home"
            />
            <Scene
              key="recebidas"
              component={MinhasSolicitacoes}
              hideNavBar={true}
              icon={SearchTab}
              title="Recebidas"
            />
            <Scene
              key="solicitar"
              initial={true}
              component={NovaSolicitacao}
              hideNavBar={true}
              icon={AddSolTab}
              title="Solicitar"
            />
            <Scene
              key="notificacoes"
              component={MinhasSolicitacoes}
              hideNavBar={true}
              icon={MessagesTab}
              title="Notificações"
            />
            <Scene
              key="configuracoes"
              component={Configuracoes}
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
    height: 60,
    borderTopColor: 'darkgrey',
    borderTopWidth: 1,
    opacity: 0.98,
    justifyContent: 'space-between',
  },
});

export default NavBarComponent;
