import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://192.168.103.221:8088/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            
            const text = await response.text();
            console.log('Response data:', text);  // Log full response as text
            
            const data = JSON.parse(text);  // Attempt to parse JSON afterward
            
            if (data.success) {
                navigation.navigate('(tabs)');
            } else {
                Alert.alert('Login Failed', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Login Failed', 'An error occurred. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Pressable style={styles.btn} onPress={handleLogin}>
                <Text style={styles.btnText}>Login</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
    },
    btn: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 16,
    },
    signUpText: {
        marginTop: 20,
        fontSize: 14,
        color: '#777',
    },
    signUpLink: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
});

export default Login;
