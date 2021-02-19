/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import { icons, images, SIZES, COLORS, FONTS } from '../constants';

function Home({navigation}) {

  function renderHeader() {
    return (
        <View style={{ flexDirection: 'row',
        height: 50,
        paddingTop: 10,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 25, padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17 }}>
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={icons.user}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: '#591a1f',
                    }}
                />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        width: '70%',
                        height: '100%',
                        backgroundColor: COLORS.lightGray3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius,
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>location</Text>
                </View>
            </View>

            <TouchableOpacity
                style={{
                    width: 50,
                    paddingRight: SIZES.padding * 2,
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={icons.search}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: '#591a1f',
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer} >
          {renderHeader()}
          <SafeAreaView style={styles.box}>
            <Text>content</Text>
          </SafeAreaView>
        </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4a189',
},
    contentContainer: {
      flex: 1,
      margin: 10,
      backgroundColor: 'white',
      width: '95%',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 8,
      },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,
      elevation: 17,
    },
    box: {
      flex: 1,
      width: '95%',
      backgroundColor: 'white',
      margin: 10,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
});
