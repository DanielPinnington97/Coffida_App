/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

function Splash({navigation}) {

  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.headerText}>Welcome To CoffiDa Reviews!</Text>
            <Image style={styles.Logo} source={require('../components/logo.png')} />
        </View>

        <View style={styles.buttons}>

            <View style={styles.login}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.register}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Join the Club...</Text>
                </TouchableOpacity>
            </View>

        </View>
        
        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.buttonText}>Not a CoffiDa Reviewer? Continue as a Guest</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c4a189',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttons: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    header: {
        flex: 6,
        backgroundColor: 'white',
        alignItems: 'center',
        width: '95%',
        borderRadius: 25,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#591a1f',
        padding: 20,
    },
    login: {
        flex: 3,
        backgroundColor: '#591a1f',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        marginHorizontal: 10,
        paddingVertical: 20,
    },
    register: {
        flex: 3,
        backgroundColor: '#591a1f',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        marginHorizontal: 10,
        paddingVertical: 20,
    },
    footer: {
        flex: 1,
        alignContent: 'flex-end',
    },
    Logo: {
        width: '70%',
        height: '40%',
        marginTop: 70,
        backgroundColor: '#dac4b5',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
    footerText: {
        marginTop: 40,
    },
});


/* onPress={() => {
    setLogin(true);
    navigation.navigate('Login');
  }} */