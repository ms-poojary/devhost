import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === 'test@example.com' && password === 'password') {
            navigation.navigate('(tabs)'); // Adjust the target route as needed
        } else {
            Alert.alert('Login Failed', 'Invalid email or password.');
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
            <Text style={styles.signUpText}>
                Don’t have an account?{' '}
                <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>
                    Sign up here
                </Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: 20,
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
