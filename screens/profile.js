/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Button, StyleSheet} from 'react-native';

function Profile({navigation}) {

    //const [login, setLogin] = React.useState(false);


  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Profile Screen</Text>
      </TouchableOpacity>
      <Button
        title="Logout"
      />
    </View>
  );
}

export default Profile;

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