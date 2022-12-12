
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation();
    return(
        <View style={styles.screen}>
           <Text style={{
            fontSize: 30,
            textAlign: 'center',
            marginTop: "20%",
           }}>Inicio</Text> 
           <TouchableOpacity
           onPress={() => navigation.navigate()}
           style={{
            backgroundColor: "purple",
            padding: 10,
            marginTop: "20%",
            width: "50%",
            alignSelf: "center",
            borderRadius: 10,
           }}
           >
            <Text 
            style={{
                fontSize:15,
                textAlign: 'center',
                color: "white",
            }}
            >Conoce nuestros nuevos libros </Text>
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;