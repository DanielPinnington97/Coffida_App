/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image, ToastAndroid } from 'react-native';

function Login({navigation}) {

    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    
/*     const checkLoggedIn = async () => {
        const value = await AsyncStorage.getItem('@session_token');
        if (value == null){
            navigation.navigate('Login');
        }
    }; */
 
    const signIn = () => {
        //send the request details e.g. GET, POST, DELETE, PATCH
        return fetch('http://10.0.2.2:3333/api/1.0.0/user/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              'email': email,
              'password': password,
          }),
        })
        //then find what response has been returned from the request
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else if (response.status === 400) {
              throw 'Invalid email/password supplied';
            } else {
              throw 'Something Went wrong';
            }
          })
          //then with that response tell the function what to do e.g. sign in, get data, delete data etc.
          .then(async (responseJson) => {
            console.log('User ID created: ', responseJson);
            await AsyncStorage.setItem('@session_token', responseJson.token);
            ToastAndroid.show('Log in Successful', ToastAndroid.SHORT);
            navigation.navigate('Drawer', {screen: 'Home'});
          })
          .catch((error) => {
            console.log(error);
            ToastAndroid.show(error, ToastAndroid.SHORT);
          });
      };

  return (
     

        <View style={styles.container}> 


            <View style={styles.contentContainer}>
                <View style={styles.headerBox}>
                    <Text style={styles.headerText}>Login</Text>
                    <Image style={styles.Logo} source={require('../components/logo.png')} />
                </View>

                 <View style={styles.detailsBox}>
                    <Text style={styles.detailsText}>Enter Email</Text>
                    <TextInput 
                    placeholder="Email" 
                    style={styles.detailsInput} 
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address" />
                    <Text style={styles.detailsText}>Enter Password</Text>
                    <TextInput 
                    placeholder="Password" 
                    style={styles.detailsInput} 
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry />
                </View>

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => signIn()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            </View>

        </View>


  );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c4a189',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 8,
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
    buttonContainer: {
        flex: 1.5,
        flexDirection: 'row',
        backgroundColor: '#591a1f',
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 25,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    headerBox: {
        flex: 6,
        backgroundColor: 'white',
        width: '90%',
        margin: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#591a1f',
    },
    detailsBox: {
        flex: 5,
        backgroundColor: 'white',
        width: '90%',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    detailsText: {
        fontSize: 15,
        marginTop: 10,
        color: '#591a1f',
        paddingVertical: 10,
    },
    detailsInput: {
        borderColor: '#591a1f',
        backgroundColor: '#eaded6',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        marginVertical: 10,
        width: '100%',
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        padding: 20,
        marginHorizontal: 20,
        width: '40%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    buttonText: {
        color: '#591a1f',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center',
    },
    Logo: {
        width: '70%',
        height: '50%',
        marginTop: 60,
        backgroundColor: '#dac4b5',
    },

});

