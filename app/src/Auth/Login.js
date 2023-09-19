import react, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Login({ navigation }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(){
        alert(email + '\n'+password);
    }

    return (
        <View style={styles.container}>

            <TextInput 
            placeholder="E-mail"
            style={styles.inputText}
            onChangeText={(text) => setEmail(text)}
            value={email}></TextInput>
            
            <TextInput
            secureTextEntry={true}
            placeholder="Senha"
            style={styles.inputText}
            onChangeText={ (text) => setPassword(text)}
            value={password}></TextInput>

            <TouchableOpacity
            style={styles.btnStyle}
            onPress={login}>
                <Text style={styles.btnTextStyle}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>GO HOME</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        color: '#000',
        paddingTop: '40%',
    },
    inputText: {
        padding: 10,
        borderColor: 'red',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        width: '90%',
        borderRadius: 10,
    },
    btnStyle: {
        alignContent: "center",
        alignItems: "center",
        padding: 15,
        // borderColor: 'red',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        width: '90%',
        borderRadius: 10,
        backgroundColor: "#000",
    },
    btnTextStyle: {
        color: "#FFF",
    }
});