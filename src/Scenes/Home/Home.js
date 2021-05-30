import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Actions, Scene, Router} from 'react-native-router-flux';

import Cadastro from '../Cadastro';
import Login from '../Login';
import NavBar from '../../Components/NavBar/NavBar';

const Home = () => {
  return (
    <>
      <NavBar />
    </>
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
  tabStyle: {
    borderTopWidth: 0.5,
    borderColor: '#b7b7b7',
    backgroundColor: 'red',
    opacity: 1,
  },
});

export default Home;
