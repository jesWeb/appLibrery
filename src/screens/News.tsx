import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const News = () => {
    return(
        <View style={styles.screen}>
           <Text style={{
            fontSize: 30,
            textAlign: 'center',
            marginTop: "20%",
           }}>Nuevos</Text> 
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

export default News;