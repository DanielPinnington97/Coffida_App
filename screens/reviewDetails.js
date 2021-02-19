/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Button, StyleSheet} from 'react-native';

function Review({navigation}) {

    //const [login, setLogin] = React.useState(false);


  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Review Screen</Text>
      </TouchableOpacity>
      <Button
        title="Logout"
      />
    </View>
  );
}

export default Review;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'coral',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


/* onPress={() => {
    setLogin(true);
    navigation.navigate('Login');
  }} */