import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';



class HomeScreen extends React.Component {
  _onPressButton = (e) => {
   console.log('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.container}>



  <Image source={require('assets/images/MainTitle.png')}
      style={{
      width: 350,
      height: 350,
      position: 'absolute',
      left: 0,
      bottom: 270,

  }}

/>


  <Image source={require('assets/images/LOGO.png')}
      style={{
      width: 500,
      height: 500,
      position: 'absolute',
      right: -60,
      top: 20,

  }}

/>

        <View style={styles.buttonContainer1}>
          <Button
            onPress={this._onPressButton}
            title = "Donate"
            color = "#000000"

          />
        </View>


        <View style={styles.buttonContainer2}>
          <Button
            onPress={this._onPressButton}
            title="Search"
            color="#000000"

          />


        </View>

        <View style={styles.buttonContainer3}>

          <Button
            onPress={this._onPressButton}
            title="Sign Up"
            color="#000000"

          />
</View>

</View>

    );

  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',

  },


  buttonContainer1: {
    margin: 20,
   right: 3,
    top: 300,
    borderRadius:15,


  },

 buttonContainer2: {
    margin: 20,
    backgroundColor: '#66ff99',
   right: 3,
    top: 150,
      borderRadius:15,
  },

   buttonContainer3: {
    margin: 20,
    backgroundColor: '#cc66ff',
    // right: 3,
    // top: 75,
    borderRadius:15,

  },
});
