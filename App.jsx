import React, { useState, useEffect } from 'react';
import { Dimensions, View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import buttons_vertical from './components/buttons_vertical';
import buttons_horizontal from './components/buttons_horizontal';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();

    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    Dimensions.addEventListener('change', updateOrientation);
    updateOrientation();
  }, []);

  const [orientation, setOrientation] = useState('portrait');
  const [equation, setEquation] = useState("");
  const [currentValue, setCurrentValue] = useState("0");
  const [memory, setMemory] = useState(0);

  const [units, setUnits] = useState("RAD");

  const buttons_v=buttons_vertical(currentValue, setCurrentValue, equation, setEquation);
  const buttons_h=buttons_horizontal(currentValue, setCurrentValue, equation, setEquation, memory, setMemory, units, setUnits);

  // STYLE FUNC.

  const getResultTextStyle = () => {
    return {
      fontSize: orientation === 'portrait' ? 74 : 42,
      paddingRight: 10,
      color: '#fff',
    };
  };

  return (
    <View style={style.mainContainer}>

      <View style={style.resultHolder}>

        <View style={style.equationView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} persistentScrollbar={true}>
            <Text style={style.equationText}>{equation}</Text>
          </ScrollView>
        </View>

        <View style={style.resultView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} persistentScrollbar={true}>
            <Text style={getResultTextStyle()}>{currentValue.toString()}</Text>
          </ScrollView>
        </View>

      </View>

      <View style={style.buttonHolder}>
        { orientation === 'landscape' && buttons_h.map((button, key) => (
          <TouchableOpacity
            key={key}
            style={[style.buttonh, {backgroundColor: button.backgroundColor, ...(button.width && { width: button.width })}]}
            onPress={button.onPress}>
            <Text style={[style.buttonText, {fontSize: button.fontSize}]}>{button.title}</Text>
          </TouchableOpacity>
        ))}

        { orientation === 'portrait' && buttons_v.map((button, key) => (
          <TouchableOpacity
            key={key}
            style={[style.buttonv, {backgroundColor: button.backgroundColor, ...(button.width && { width: button.width })}]}
            onPress={button.onPress}>
            <Text style={[style.buttonText, {fontSize: button.fontSize}]}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#525457',
  },
  resultHolder: {
    flex: 2,
    borderWidth: 2,
    borderColor: '#525457',
  },
  equationView: {
    flex: 1,
  },
  resultView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  equationText: {
    color: '#EEE',
    fontSize: 24,
    textAlign: 'left',
  },
  buttonHolder: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonv: {
    height: '20%',
    width: '25%',
    borderWidth: 1,
    borderColor: '#525457',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonh: {
    height: '20%',
    width: '9.9%',
    borderWidth: 1,
    borderColor: '#525457',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
  },
})


export default App;
