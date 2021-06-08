import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import {useDispatch, useSelector} from 'react-redux';

import Welcome from './Welcome';
import Cadastro from './Cadastro';
import Login from './Login';
import Home from './Home';

const Routes = () => {
  const dispatch = useDispatch();
  const firstAppStore = useSelector(store => store.AppReducer.first_time);

  return (
    <View style={styles.container}>
      <Router>
        <Scene key={'app'}>
          {/* {firstAppStore && (
            <Scene key="Intro" component={Intro} hideNavBar initial />
          )} */}
          <Scene key="Welcome" component={Welcome} hideNavBar initial />
          <Scene key="Cadastro" component={Cadastro} hideNavBar />
          <Scene key="Login" component={Login} hideNavBar />
          <Scene key="Home" component={Home} hideNavBar />
        </Scene>
      </Router>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    width: '100%',
    height: '100%',
  },
});

export default Routes;
