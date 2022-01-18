import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login(){
    
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    return (
        <View style={styles.sheet}> 
            <Image style={styles.image} source={require('../../assets/company.png')} />
            <Text style={styles.title}>Login</Text>
            <Text style={styles.text}>Email</Text>
            <Input value={email} onChange={setEmail} placeholder="Email@gmail.com" type="email" />
            <Text style={styles.text}>Password</Text>
            <Input value={password} onChange={setPassword} placeholder="Password" type="password" />
            <Button>Submit</Button>
            <Text style={styles.bottomlink}>
                Dont Have an account SignUp Now!
            </Text>
            <Text style={styles.trademark}>Powered By Coffee and React Native</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sheet:{
        flex: 1,
        backgroundColor: "white",
    },
    title:{
        fontSize: 40,
        color: "black",
        fontWeight: "bold",
        alignSelf: 'center',
    },
    image: {
        alignSelf: 'center',
        backgroundColor: "white"
    },
    text:{
        marginLeft: "5%",
        color: "black",
        fontSize: 20,
        marginBottom: 5,
    },
    bottomlink: {
        alignSelf: "center",
        color: "#5ede99",
        fontSize: 14,
        marginTop: 10,
    },
    trademark:{
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 50,
    }
})