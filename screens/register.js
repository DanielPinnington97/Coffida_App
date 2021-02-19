/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput, ToastAndroid} from 'react-native';

function Register({navigation}) {

    const [first_name, setFName] = useState();
    const [last_name, setLName] = useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    let signUp = () => {

        //validation goes here 

        return fetch('http://10.0.2.2:3333/api/1.0.0/user', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              'first_name': first_name,
              'last_name': last_name,            
              'email': email,
              'password': password,
          }),
        })
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else if (response.status === 400) {
              throw 'Failed Validation';
            } else {
              throw 'Something Went wrong';
            }
          })
          .then(async (responseJson) => {
            console.log('User ID created: ', responseJson);
            ToastAndroid.show('Account Created', ToastAndroid.SHORT);
            navigation.navigate('Login');
          })
          .catch((error) => {
            console.log(error);
            ToastAndroid.show(error, ToastAndroid.SHORT);
          });
      };
    

  return (
    <View style={styles.container}>

        <View style={styles.content}>

            <View style={styles.titlebox}>
                 <Text style={styles.headerText}>Register</Text>
            </View>

            <View style={styles.inputContent}>

                <Text style={styles.ContentText}>Enter your first name</Text>
                <TextInput 
                    placeholder="First Name" 
                    style={styles.inputContentText} 
                    value={first_name}
                    onChangeText={setFName} />

                <Text style={styles.ContentText}>Enter your last name</Text>
                <TextInput 
                placeholder="Last Name" 
                style={styles.inputContentText}         
                value={last_name}
                onChangeText={setLName} />

                <Text style={styles.ContentText}>Enter your email</Text>
                <TextInput 
                placeholder="Email" 
                style={styles.inputContentText}
                value={email}
                onChangeText={setEmail} />

                <Text style={styles.ContentText}>Enter your password</Text>
                <TextInput 
                placeholder="Password" 
                style={styles.inputContentText}
                value={password}
                onChangeText={setPassword}
                secureTextEntry />

                <Text style={styles.ContentText}>Confirm your password</Text>
                <TextInput 
                placeholder="Confirm Password" 
                style={styles.inputContentText} />

            </View>

            <View style={styles.footer}>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate('Splash')}>
                    <Text style={styles.buttonText}>Back to Home</Text>
                </TouchableOpacity> 

                <TouchableOpacity
                    style={styles.button} 
                    onPress={signUp()}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>

            </View>

        </View>

    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c4a189',
    },
    content: {
        flex: 6,
        backgroundColor: 'white',
        width: '95%',
        height: '95%',
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
    titlebox: { 
        flex: 1,
        marginBottom: 100,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#591a1f',
        padding: 20,
        paddingBottom: 100,
    },
    inputContent: {
        flex: 8,
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    ContentText: {
        color: '#591a1f',

    },
    inputContentText: {
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
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
    footer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

});


/* onPress={() => {
    setLogin(true);
    navigation.navigate('Login');
  }} */