/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



type Props = {};
export default class App extends Component<Props> {
  render() {

    const image = "http://1.bp.blogspot.com/-qNg0y-A3foM/UMIbLV4P46I/AAAAAAAAT-g/TlcuaehdSSU/s1600/9-11-12-rescate_ad33362bd4aba2fd3d6fdda7217a3630.jpg";
    const name = "Rescate Band";
    const likes = 200;
    const comments = 160;

    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri: image }}></Image>
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <View  style={styles.iconContainer}>
                <Icon name="ios-heart-outline" size={30} color="grey" />
                <Text style={styles.count}>{likes}</Text>
              </View> 
              <View style={styles.iconContainer}> 
                <Icon name="ios-chatboxes-outline" size={30} color="grey" />
                <Text style={styles.count}>{comments}</Text>
              </View>  
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  image:{
    width: 150,
    height: 150
  },
  artistBox:{
    flexDirection: "row",
    backgroundColor: "white",
  },
  info:{
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
  },
  name:{
    fontSize: 20,
    marginTop: 10,
    color: '#333'
  },
  row:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 15,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
  },
  count:{
    color: "grey",
  }
});
