import react from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function Principal({ navigation }){
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity 
            style={styles.btnStyle}
            onPress={() => navigation.goBack()}>
                <Text style={styles.btnTextStyle}>GO BACK</Text>
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