import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Counter(){
    const [count, setCount] = React.useState(0)
    return(
        <View style={styles.container}>
            <Text style={[styles.text,{fontSize: 30, marginBottom: 100}]}>Amazing counter application!!</Text>
            <View style={styles.middle}>
                <TouchableOpacity style={styles.button} onPress={()=>setCount(count-1)}>
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>
                <View style={styles.circleContainer}>
                    <Text style={styles.data}>{count}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>setCount(count+1)}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.text,{fontSize: 20, marginTop: 100}]}>Powered by React Native and Coffee</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#787cfc",
        alignItems: "center",
        justifyContent: "center",
    },
    middle:{
        width: "85%",
        flexDirection: "row",
        backgroundColor: '#9195f9',
        // paddingVertical: 10,
        borderRadius: 50,
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    text:{
        alignSelf: "center",
        color: "white",
        fontSize: 70
    },
    circleContainer:{
        position: "absolute",
        alignSelf: "center",
        left: '35%',
        height: 95,
        alignItems: "center",
        backgroundColor: "white",
        width: '30%',
        borderRadius: 55,
        elevation: 20,
        justifyContent: "center",
        alignContent: "center"
    },
    data:{
        color: "black",
        fontSize: 50
    }
})