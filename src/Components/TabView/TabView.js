import React, {Fragment, useState} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import PropTypes from 'prop-types';

import ItemTabView from '../ItemTabView';

const TabView = props => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });

  const renderTabOptions = () => {
    return props.options.map((item, index) => (
      <TouchableOpacity
        style={styles.viewHeaderOptions(layout.height, props.selected, index)}
        onPress={() => props.onPress(index)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    ));
  };

  const renderContent = () => {
    // let data = null;

    // if (props.selected === 0) {
    //   data = props.data.first;
    // } else {
    //   data = props.data.second;
    // }

    return (
      <FlatList
        data={props.data}
        renderItem={({item}) => <ItemTabView data={item} />}
        keyExtractor={item => `${item.name}-${Math.random()}`}
        ItemSeparatorComponent={() => <View style={styles.viewSeparator} />}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.viewRenderTabOptions}
        onLayout={event => setLayout(event.nativeEvent.layout)}>
        {renderTabOptions()}
      </View>
      <View style={styles.viewRenderContent}>{renderContent()}</View>
    </View>
  );
};

TabView.propTypes = {
  selected: PropTypes.number,
  onPress: PropTypes.func,
  data: PropTypes.object,
};

TabView.defaultProps = {
  selected: 0,
  data: null,
  onPress: null,
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
  },
  viewRenderTabOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(30, 0.6),
    backgroundColor: '#f1f1f1',
    borderRadius: moderateScale(15, 0.6),
  },
  viewHeaderOptions: (height, currentSelected, newCurrentSelected) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    borderRadius: moderateScale(15, 0.6),
    backgroundColor:
      currentSelected === newCurrentSelected ? '#FFFFFF' : 'transparent',
  }),
  viewRenderContent: {
    marginTop: hp(3),
  },
  viewSeparator: {
    backgroundColor: '#E8E6EA',
    height: hp(0.2),
    width: '100%',
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
    borderRadius: moderateScale(1, 0.6),
  },
});

export default TabView;
