import React,{Component} from 'react';
import {Image,StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    logo: {
      width: 166,
      height: 158,
    },
  });

class HomeImage extends Component {
    render(){
        return(
           <View style={styles.container}>
            <Image
            style={styles.logo}
            source={{uri:'https://b.zmtcdn.com/data/pictures/chains/3/143/c77dfea619f2d7786a7d054afab5cd88_featured_v2.jpg'}}
            />
           </View>
        )
    }
}

export default HomeImage;