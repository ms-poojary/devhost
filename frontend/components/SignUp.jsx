import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState(''); // Add username state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSignup = async () => {
        try {
            const response = await fetch('http://192.168.103.221:8088/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    confirmPassword,
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                Alert.alert('Success', 'User registered successfully');
                navigation.navigate('Login');
                console.log('Response data:', data);
            } else {
                const errorData = await response.text();
                console.error('Error response:', errorData); // Log the server response for debugging
                Alert.alert('Error', 'Failed to register user');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'Something went wrong');
        }
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
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
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            
            <Pressable style={styles.btn} onPress={handleSignup}>
                <Text style={styles.btnText}>Sign Up</Text>
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
});

export default SignUp;
