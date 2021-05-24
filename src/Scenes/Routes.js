import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import {useDispatch, useSelector} from 'react-redux';

import Login from './Login';

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
          <Scene key="Login" component={Login} hideNavBar />
        </Scene>
      </Router>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default Routes;
